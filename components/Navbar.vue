<template>
  <div class="w-auto">
    <header class="flex flex-row justify-between w-auto">
      <!-- Information -->
      <div class="description">
        <h1 class="fade-in-title font-bold text-3xl name">EncryptedDev</h1>
        <p
          class="fade-in-description description-text text-xl text-gray-300 mt-6"
        >
          an aspiring full-stack software developer
        </p>
        <p class="fade-in-description text-xl text-gray-300 mt-2">
          from London, England
        </p>

        <div class="flex flex-row mt-6">
          <GitHubIcon />
          <DiscordIcon />
          <TwitterIcon />
        </div>
      </div>
      <!-- Icon -->
      <div class="flex mb-8 sm:justify-center sm:mb-0">
        <img
          src="~/assets/img/logo.png"
          class="ring ring-white rounded-full h-2/5 fade-in-title"
          alt=""
        />
      </div>
    </header>
  </div>
</template>

<script>
import GitHubIcon from "./Icons/GitHub";
import DiscordIcon from "./Icons/Discord";
import TwitterIcon from "./Icons/Twitter";
export default {
  components: { GitHubIcon, DiscordIcon, TwitterIcon },
};
</script>

<!-- <div class="flex h-full w-8/12">
    <div class="m-auto">
      <div class="description">

        <div class="flex flex-row mt-6">



        </div>
      </div>
    </div>
    <div>
    <div class="w-4/12 ml-auto">
      <div class="">
        <img src="~assets/img/logo.png" class="h-59" alt="">
      </div>
    </div>
    </div>
  </div> -->
