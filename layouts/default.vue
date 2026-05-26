<template>
  <div>
    <v-app>
      <v-main style="background-color: black">
        <keep-alive>
          <Nuxt />
        </keep-alive>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  mounted() {
    document.addEventListener(
      "touchmove",
      function (event) {
        if (event.scale !== 1) {
          event.preventDefault();
        }
      },
      { passive: false }
    );
    let lastTouchEnd = 0;

    document.addEventListener(
      "touchend",
      function (event) {
        const now = new Date().getTime();

        if (now - lastTouchEnd <= 300) {
          event.preventDefault();
        }

        lastTouchEnd = now;
      },
      false
    );
  },
};
</script>

<style lang="scss" scoped></style>
