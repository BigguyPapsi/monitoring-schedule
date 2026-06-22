<template>
  <div>


    <!-- BOTTOM NAVBAR -->
    <div class="bottom-navbar">
      <div
        class="nav-item"
        :class="{ active: isActive('/') }"
        @click="$router.push('/')"
      >
        <v-icon size="24">mdi-calendar-month</v-icon>
        <span>Schedule</span>
      </div>


      <div
        class="nav-item"
        :class="{ active: isActive('/all-staff') }"
        @click="$router.push('/all-staff')"
      >
        <v-icon size="24">mdi-account-group</v-icon>
        <span>Staff</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom-navbar {
  background-color: #fffcf9;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 6px 10px;
  border-top: 1px solid #e3e3e3;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999;
}

.nav-item {
  padding-top: 5px;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #8d8d8d;
  font-size: 11px;
  cursor: pointer;
  transition: all 0.2s ease;
  gap: 2px;
}

.nav-item .v-icon {
  color: #8d8d8d;
  transition: all 0.2s ease;
}

.nav-item.active {
  color: #0772BA;
  font-weight: 600;
  background-color: #e0f2ff;
}

.nav-item.active .v-icon {
  color: #0772BA;
}

</style>