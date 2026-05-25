<template>
  <div class="container">
    <div v-if="loading">
      <div
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          height: 97.4vh;
        "
      >
        <img
          src="/img/loading.gif"
          alt="Loading..."
          style="display: block; width: 150px; mix-blend-mode: multiply"
        />
      </div>
    </div>

    <div v-else-if="error">{{ error }}</div>

    <div v-else class="mt-5">

      <div style="display: flex; justify-content: center">
       <img src="/img/itx-logo.png" alt="ITX Logo" style="width: 120px;"/>
      </div>

      <div style="display: flex; justify-content: center">
        <h2>ITX - Schedule</h2>
      </div>

      <div style="display: flex; justify-content: center; margin-bottom: 10px;">
        <span style="padding: 10px; background: #0772BA; border-radius: 8px; color: white;">
         {{ dayName }} ທີ່: {{ schedule.date }}
        </span>
      </div>

      <div class="section1">
        <h3>✅ Monitoring Today</h3>
        <div v-if="schedule.today.count === 0">
          <p>⛱️ພັກວຽກ</p>
        </div>
        <div v-else>
          <v-row class="pa-1">
            <v-col
              v-for="(name, i) in schedule.today.names"
              :key="i"
              class="pa-1"
              cols="6"
            >
              <v-card style="border-radius: 15px">
                <v-card-text>
                  <div style="display: flex; justify-content: center">
                    <img
                      :src="$staffImage(name)"
                      style="border-radius: 50%; width: 120px"
                    />
                  </div>
                  <div
                    style="
                      display: flex;
                      justify-content: center;
                      margin-top: 8px;
                    "
                  >
                    <b style="color: green; font-size: 12pt;">{{ name }}</b>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>

      <div class="section2">
        <h3>⏭️ Next Day</h3>
        <div v-if="schedule.nextDay.count === 0">
          <p>⛱️ພັກວຽກ</p>
        </div>
        <div v-else>
          <v-card
            v-for="(name, i) in schedule.nextDay.names"
            :key="i"
            class="mb-2"
            style="border-radius: 15px"
          >
            <v-card-text>
              <b style="color: black">{{ name }}</b>
            </v-card-text>
          </v-card>
        </div>
      </div>

      <div style="display: flex; justify-content: center">
        <v-btn @click="refresh" color="#0772BA" elevation="0" dark>
          <v-icon>mdi-refresh</v-icon> Refresh
        </v-btn>
      </div>

      <div class="section3 mt-4">
        <h3>🧑‍💼 All monitoring staff ({{ schedule.allStaff.count }})</h3>
        <div v-if="schedule.allStaff.count === 0">
          <p>ບໍ່ມີຂໍ້ມູນ</p>
        </div>
        <div v-else>
          <v-card
            v-for="(item, i) in schedule.allStaff.staff"
            :key="i"
            class="mb-2"
            style="border-radius: 15px"
          >
            <v-card-text>
              <div style="display: flex; align-items: center">
                <img
                  :src="$staffImage(item.name)"
                  style="border-radius: 50%; width: 80px; flex-shrink: 0"
                />
                <div class="ml-4">
                  <span style="font-size: 12pt;"><b>{{ item.name }}</b></span>
                  <br />
                  <span style="color: gray; font-size: 13px">{{
                    item.description
                  }}</span>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const APPS_SCRIPT_URL ='https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnRPGTvrUD64XUxrR-JzFkkdXphVhC_cm3uTa6g27DMYh4Yp5jWtt4igxH7-22NuFSoIYapyIYLxSlxp8PVascxHurrcyj6U37bGSYx1yTdojpkZdAu1T-48BI-ok2NOul9zVwM6PKWnwCPjfstx1mlKQFZvFgnQsdYMuke8kHWIcICdKi5QLv36JRGEQGkFVW-AGQbhW_ddYNxPr5WYFbhT-a2kx7DFuPZKJ-CHaAFfzcRHSe-HORQNfY8INHK-Q018xbm2H-DWJhca2YY&lib=MnzoDS8BQOsjp9pgS_EWMIi0dx0bejefQ'

export default {
  data() {
    return {
      loading: false,
      error: null,
      schedule: {
        date: '',
        today: { count: 0, names: [] },
        nextDay: { count: 0, names: [] },
        allStaff: { count: 0, staff: [] },
      },
    }
  },

  computed: {
    dayName() {
      const days = [
        'ວັນອາທິດ',
        'ວັນຈັນ',
        'ວັນອັງຄານ',
        'ວັນພຸດ',
        'ວັນພະຫັດ',
        'ວັນສຸກ',
        'ວັນເສົາ',
      ]
      return days[new Date().getDay()]
    },
  },

  async mounted() {
    await this.fetchSchedule()
  },

  methods: {
    async fetchSchedule() {
      if (this.loading) return
      this.loading = true
      this.error = null
      try {
        const { data } = await axios.get(APPS_SCRIPT_URL)
        this.schedule = data
      } catch (e) {
        this.error = 'Failed to load schedule'
      } finally {
        this.loading = false
      }
    },

    refresh() {
      this.fetchSchedule()
    },
  },
}
</script>

<style scoped>
.container {
  max-width: 500px;
  font-family: Arial, sans-serif;
  background: #fffcf9;
}
.section1 {
  background: #e9ffe8;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}
.section2 {
  background: #e0f7fa;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}
.section3 {
  background: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}
h2 {
  color: #333;
}
h3 {
  margin: 0 0 10px;
}
</style>
