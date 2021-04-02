<template>
  <div
    class="bg-darkGrey rounded-3xl my-5 w-1/2 py-5 px-20 content text-center mx-auto hover:bg-lightGrey"
  >
    <div class="flex flex-row">
      <div class="w-1/4 my-auto">
        <img
          src="~/assets/img/logo.png"
          alt=""
          class="h-full w-full rounded-full"
        />
        <p class="z-0 object-right-bottom">test</p>
      </div>
      <div class="w-1/2 my-auto mr">
        <p class="text-left content">
          <strong class="text-purple-400">Encrypted</strong>#0001
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      discordData: [],
      getStatus: {},
    };
  },
  mounted() {
    this.$axios
      .$get("http://localhost:3000/presences?userID=564434085708038144")
      .then((res) => {
        this.discordData = res.data;
      });
  },
  // computed: {
  //   getStatus() {
  //     const status = this.discordData;
  //     console.log(status);
  //   }
  // }
};
</script>
