<template>
  <div class="container">
    <div class="flex flex-row">
      <div class="m-auto">
        <h1 class="text-3xl text-bold font-bold text-center">
          projects & experiences
        </h1>
        <div class="grid grid-cols-3 gap-2 m-auto">
          <div
            class="bg-gray-800 py-4 px-4 mt-4 hover:bg-gray-600 hover:shadow-md rounded-2xl"
          >
            <h2 class="font-bold text-xl">PreMiD</h2>
            <p>
              PreMiD is a simple, configurable utility that allows you to show
              what you're doing on the web in your Discord now playing status.
            </p>
            <p>Support Agent</p>
            <p>27th Feburary 2021 -</p>
          </div>
          <div
            class="bg-gray-800 py-4 px-4 mt-4 hover:bg-gray-600 hover:shadow-md rounded-2xl"
          >
            <h2 class="font-bold text-xl">AscendHost</h2>
            <p>
              A hosting company striving to provide affordable & fast services
              to everyone.
            </p>
            <p>Support</p>
            <p>25th Feburary 2020 -</p>
          </div>
          <div
            class="bg-gray-800 py-4 px-4 mt-4 hover:bg-gray-600 hover:shadow-md rounded-2xl"
          >
            <h2 class="font-bold text-xl">Dmod.gg</h2>
            <p>All of your Discord Moderation needs, on 1 platform!</p>
            <p>Development Team - Frontend Developer</p>
            <p>5th Feburary 2021 -</p>
          </div>
          <div
            class="bg-gray-800 py-4 px-4 mt-4 hover:bg-gray-600 hover:shadow-md rounded-2xl"
          >
            <h2 class="font-bold text-xl">EncryptedBot</h2>
            <p>A multi-utility Discord bot for you!</p>
            <p>Developer</p>
            <p>4th April 2020 -</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

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
          duration: "27th Feburary 2021 - ",
        },
        {
          title: "AscendHost",
          description:
            "A hosting company striving to provide affordable & fast services to everyone.",
          role: "Support",
          duration: "25th Feburary 2020 - ",
        },
        {
          title: "Dmod.gg",
          description: "All of your Discord Moderation needs, on 1 platform!",
          role: "Development Team - Frontend Developer",
          duration: "5th Feburary 2021 - ",
        },
        {
          title: "EncryptedBot",
          description: "A multi-utility Discord bot for you!",
          role: "Developer",
          duration: "4th April 2020 - ",
        },
      ],
    };
  },
};
</script>
