<template>
  <div>
    <v-container>
      <div class="title_style">
        <div><b>All Staff</b></div>
        <div><router-link to="/all-staff" style="text-decoration: none;">View All</router-link></div>
      </div>
      <div>
        <v-card
          elevation="0"
          v-for="(staff, i) in data?.allStaff?.staff.slice(-3)"
          :key="i"
          :style="{
            borderRadius:
              i === 0 ? '10px 10px 0 0' : i === 1 ? '0px' : '0 0 10px 10px',
          }"
          style="border: 1px solid #e3e3e3"
        >
          <v-card-text class="pa-2">
            <div style="display: flex; justify-content: space-between; align-items: center">
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
              <div>{{ staff?.tel }}</div>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
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
