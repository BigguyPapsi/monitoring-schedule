<template>
  <div>
    <div class="bg">
      <div style="width: 36px; height: 30px"></div>
      <div
        style="
          display: flex;
          align-items: center;
          color: #0772ba;
          font-weight: bold;
        "
      >
        <span
          ><img
            src="@/assets/img/itx-logo-full.png"
            alt="ITX Logo"
            style="width: 35px"
        /></span>
        <h3>SCHEDULE</h3>
      </div>

      <div style="display: flex; align-items: center">
        <v-btn @click="refresh" icon
          ><v-icon color="#454651">mdi-refresh</v-icon></v-btn
        >
      </div>
    </div>

    <v-divider />
  </div>
</template>

<script>
export default {
  methods: {
    refresh() {
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.bg {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  height: 50px;
  background: #fffcf9;
}
</style>
