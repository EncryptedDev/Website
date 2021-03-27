<template>
  <div class="flex flex-col">
    <div class="m-auto">
      <h1
        class="text-3xl text-bold font-bold text-center text-black dark:text-white"
      >
        projects & experiences
      </h1>
      <div class="">
        <div
          class="mt-10 border-black border rounded-3xl py-4 px-8 transform ease-in-out duration-200 dark:text-white dark:border-white hover:scale-105 max-w-xs"
        >
          <h2 class="text-xl font-semibold dark:text-white text-black text-center">
            PreMiD
          </h2>
          <p class="dark:text-white text-black inline">
            <i class="fas fa-info-circle"></i> PreMiD is a simple, configurable
            utility that allows you to show what you're...
          </p>
          <p><i class="fas fa-user"></i> Support Agent</p>
          <p><i class="fas fa-calendar-alt"></i> 27th Feburary 2021 -</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "PreMiD",
          description:
            "PreMiD is a simple, configurable utility that allows you to show what you're doing on the web in your Discord now playing status.",
          role: "Support Agent",
          date: "27th Feburary 2021 - "
        },
        {
          title: "AscendHost",
          description:
            "A hosting company striving to provide affordable & fast services to everyone.",
          role: "Support",
          date: "25th Feburary 2020 - "
        },
        {
          title: "Dmod.gg",
          description: "All of your Discord Moderation needs, on 1 platform!",
          role: "Development Team - Frontend Developer",
          date: "5th Feburary 2021 - "
        },
        {
          title: "EncryptedBot",
          description: "A multi-utility Discord bot for you!",
          role: "Developer",
          date: "4th April 2020 - "
        }
      ]
    };
  }
};
</script>
