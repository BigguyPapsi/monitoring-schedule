<template>
  <div>
    <v-container>
      <div class="title_style">
        <div><b>All Staff</b></div>
      </div>

      <div>
        <v-card
          @click="openDialogData(staff)"
          elevation="0"
          v-for="(staff, i) in data?.allStaff?.staff"
          :key="i"
          :style="{
            borderRadius:
              i === 0
                ? '10px 10px 0 0'
                : i === data?.allStaff?.staff.length - 1
                ? '0 0 10px 10px'
                : '0',
          }"
          style="border: 1px solid #e3e3e3"
        >
          <v-card-text class="pa-2">
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <div style="display: flex; gap: 12px; align-items: center">
                <div>
                  <img
                    style="
                      width: 60px;
                      height: 60px;
                      border-radius: 50%;
                      object-fit: cover;
                      margin-top: 12px;
                    "
                    :src="$staffImage(staff?.name)"
                    alt="profile"
                  />
                </div>

                <div>
                  <div>{{ staff?.name }}</div>
                  <div>{{ staff?.description }}</div>
                </div>
              </div>

              <div><v-icon>mdi-chevron-right</v-icon></div>
            </div>
          </v-card-text>
        </v-card>

        <div>
          <v-dialog v-model="dialog" max-width="350px">
            <v-card>
              <v-card-title
                class="headline"
                style="display: flex; justify-content: center"
              >
                <h3>Staff on Duty</h3>
              </v-card-title>

              <hr />

              <v-card-text>
                <div class="text-center mt-5">
                  <h2>{{ dialogText?.name }}</h2>
                </div>

                <div class="text-center" style="font-size: 15px">
                  {{ dialogText?.description }}
                </div>

                <div class="text-center">{{ dialogText?.tel }}</div>

                <div class="text-center mt-5">Monitor Date</div>

                <div
                  style="
                    border: #d1d1d1 1px solid;
                    padding: 2px;
                    padding-left: 5px;
                    margin-top: 5px;
                    border-radius: 5px;
                  "
                  v-for="(item, index) in dialogText?.monitorDate"
                  :key="index"
                >
                  

                  <span v-if="isPastDate(item)" style="color: #d6d6d6;">
                    <v-icon style="color: #d6d6d6;">mdi-calendar-account</v-icon> <s>{{ formatDate(item) }}</s>
                  </span>

                  <span style="color: black; font-weight: 700;" v-else>
                    <v-icon style="color: black;">mdi-calendar-account</v-icon> {{ formatDate(item) }}
                  </span>
                </div>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="error" elevation="0" block @click="dialog = false">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      dialogText: "",
    };
  },

  methods: {
    openDialogData(staff) {
      this.dialogText = staff;
      this.dialog = true;
    },

    parseDate(dateStr) {
      if (!dateStr) return null;

      // support DD/MM/YY เช่น 28/05/26
      if (dateStr.includes("/")) {
        const [day, month, year] = dateStr.split("/");
        return new Date(Number(`20${year}`), Number(month) - 1, Number(day));
      }

      // support YYYY-MM-DD เช่น 2026-05-28
      if (dateStr.includes("-")) {
        const [year, month, day] = dateStr.split("-");
        return new Date(Number(year), Number(month) - 1, Number(day));
      }

      return null;
    },

    isPastDate(dateStr) {
      const date = this.parseDate(dateStr);
      if (!date) return false;

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      date.setHours(0, 0, 0, 0);

      return date < today;
    },

    formatDate(dateStr) {
      if (!dateStr) return "";

      // DD/MM/YY -> DD/MM/YYYY
      if (dateStr.includes("/")) {
        const [day, month, year] = dateStr.split("/");
        return `${day}/${month}/20${year}`;
      }

      // YYYY-MM-DD -> DD/MM/YYYY
      if (dateStr.includes("-")) {
        const [year, month, day] = dateStr.split("-");
        return `${day}/${month}/${year}`;
      }

      return dateStr;
    },
  },

  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.title_style {
  padding: 12px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  b {
    font-size: 15pt;
  }

  span {
    color: #0772ba;
  }
}
</style>