<template>
  <div class="flex flex-col">
    <div class="m-auto">
      <h1
        class="text-3xl text-bold font-bold text-center text-black dark:text-white"
      >
        projects & experiences
      </h1>
      <div class="py-20">
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "./Templates/ProjectCard";

export default {
  components: { ProjectCard },

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
