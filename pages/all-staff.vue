<template>
  <div style="background-color: #fffcf9">
    <div v-if="loading" style="background-color: aliceblue; height: 100vh">
      <div
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          height: 97.4vh;
        "
      >
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
    </div>

    <div
      v-else-if="error"
      style="
        background-color: aliceblue;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      "
    >
      {{ error }}
    </div>

    <div v-else>
      <Nav />
      <div style="margin-bottom: 50px">
        <Viewall :data="schedule" />
      </div>
      <Navbottom />
    </div>
  </div>
</template>

<script>
import axios from "axios";

const APPS_SCRIPT_URL =
  "https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnRPGTvrUD64XUxrR-JzFkkdXphVhC_cm3uTa6g27DMYh4Yp5jWtt4igxH7-22NuFSoIYapyIYLxSlxp8PVascxHurrcyj6U37bGSYx1yTdojpkZdAu1T-48BI-ok2NOul9zVwM6PKWnwCPjfstx1mlKQFZvFgnQsdYMuke8kHWIcICdKi5QLv36JRGEQGkFVW-AGQbhW_ddYNxPr5WYFbhT-a2kx7DFuPZKJ-CHaAFfzcRHSe-HORQNfY8INHK-Q018xbm2H-DWJhca2YY&lib=MnzoDS8BQOsjp9pgS_EWMIi0dx0bejefQ";

const CACHE_KEY = "scheduleData";

export default {
  data() {
    return {
      loading: false,
      error: null,

      schedule: {
        img_url: "",
        date: "",
        today: {
          count: 0,
          names: [],
        },
        nextDay: {
          count: 0,
          names: [],
        },
        allStaff: {
          count: 0,
          staff: [],
        },
      },
    };
  },

  computed: {
    dayName() {
      const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      return days[new Date().getDay()];
    },
  },

  async mounted() {
    window.addEventListener("beforeunload", this.clearScheduleCache);

    const cached = sessionStorage.getItem(CACHE_KEY);

    if (cached) {
      this.schedule = JSON.parse(cached);
      this.loading = false;
      return;
    }

    await this.fetchSchedule(true);
  },

  beforeDestroy() {
    window.removeEventListener("beforeunload", this.clearScheduleCache);
  },

  methods: {
    clearScheduleCache() {
      sessionStorage.removeItem(CACHE_KEY);
    },

    shuffleArray(array) {
      const newArray = [...array];

      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }

      return newArray;
    },

    async fetchSchedule(force = false) {
      if (this.loading && !force) return;

      this.loading = true;
      this.error = null;

      try {
        const { data } = await axios.get(APPS_SCRIPT_URL);

        this.schedule = {
          ...data,
          allStaff: {
            ...data.allStaff,
            staff: this.shuffleArray(data.allStaff.staff || []),
          },
        };

        sessionStorage.setItem(CACHE_KEY, JSON.stringify(this.schedule));
      } catch (e) {
        console.error(e);
        this.error = "Failed to load schedule";
      } finally {
        this.loading = false;
      }
    },

    refresh() {
      sessionStorage.removeItem(CACHE_KEY);
      this.fetchSchedule(true);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0px;
  max-width: 500px;
  background: #fffcf9;
  margin-bottom: 60px;
}
</style>
