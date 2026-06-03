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
              <!-- <div>{{ staff?.tel }}</div> -->
              <div><v-icon>mdi-chevron-right</v-icon></div>
            </div>
          </v-card-text>
        </v-card>

        <div>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title class="headline">Staff on Duty</v-card-title>
              <v-card-text>{{ dialogText }}</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false"
                  >Close</v-btn
                >
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
