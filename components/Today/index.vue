<template>
  <div>
    <v-container>
      <div class="title_style">
        <div><b>Today</b></div>
        <div>
          <v-chip color="#D0E1FB"
            ><span>{{ dayName }} {{ data?.date }}</span></v-chip
          >
        </div>
      </div>

      <div>
        <v-card
          v-for="(name, i) in data?.today?.names"
          :key="i"
          class="mb-2"
          style="border-radius: 10px; display: flex; height: 82px"
        >
          <div
            style="
              background-color: #0772ba;
              width: 10px;
              height: 82px;
              border-radius: 10px 0 0 10px;
            "
          ></div>
          <v-card-text class="pa-2">
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 12px;
              "
            >
              <div style="display: flex">
                <div>
                  <img
                    style="
                      width: 60px;
                      height: 60px;
                      border-radius: 50%;
                      object-fit: cover;
                    "
                    :src="$staffImage(name)"
                    alt="profile"
                  />
                </div>
                <div
                  style="display: flex; align-items: center; padding-left: 12px"
                >
                  <div>
                    <div>
                      <h3 style="color: #000">{{ name }}</h3>
                    </div>
                    <div style="font-size: 12px">
                      Lead Monitor •
                      {{ i + 1 === 1 ? "Site Alpha" : "Site Beta" }}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <div>
                    <v-chip color="#d4ffd4"
                      ><span style="color: #028c00"
                        ><v-icon>mdi-circle-medium</v-icon>Active</span
                      ></v-chip
                    >
                  </div>

                  <div
                    style="
                      display: flex;
                      justify-content: center;
                      color: #0772ba;
                    "
                  >
                    <span>18:00-20:30</span>
                  </div>
                </div>
              </div>
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
    dayName: {
      type: String,
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
