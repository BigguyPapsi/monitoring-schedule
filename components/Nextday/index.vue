<template>
  <div>
    <v-container>
      <div class="title_style">
        <div><b>Tomorrow</b></div>
      </div>
      <div v-if="data?.nextDay?.names?.length !== 0">
        <v-row>
          <v-col
            cols="6"
            v-for="(name, i) in data?.nextDay?.names"
            :key="i"
            class="ma-0"
            :class="i % 2 === 0 ? 'pr-1' : 'pl-1'"
          >
            <v-card
              elevation="0"
              style="border: 1px #e3e3e3 solid; border-radius: 10px"
            >
              <v-card-text class="pa-1">
                <div style="display: flex; justify-content: center">
                  <img
                    style="
                      width: 60px;
                      height: 60px;
                      border-radius: 50%;
                      object-fit: cover;
                      margin-top: 12px;
                    "
                    :src="$staffImage(name)"
                    alt="profile"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    justify-content: center;
                    padding-top: 8px;
                  "
                >
                  <h3 style="color: #000">{{ name }}</h3>
                </div>
                <div
                  style="
                    display: flex;
                    justify-content: center;
                    margin-bottom: 12px;
                    font-size: 12px;
                  "
                >
                  {{ i + 1 === 1 ? "Site Alpha" : "Site Beta" }}
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <div
        style="
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        "
        v-else
      >
        🏝️ ພັກວຽກ
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
