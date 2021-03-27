<template>
  <header class="flex flex-row py-20 justify-between">
    <div class="lg:ml-40 text-left py-1">
      <h1 class="font-bold text-3xl dark:text-white leading-5">EncryptedDev</h1>
      <p class="text-xl dark:text-gray-200 mt-6 text-black">
        an aspiring full-stack software developer
      </p>
      <p class="text-xl dark:text-gray-200 mt-2 text-black leading-5">
        from London, England
      </p>
      <div class="flex flex-row mt-6">
        <GitHubIcon />
        <TwitterIcon />
      </div>
    </div>
    <div class="mr-40">
      <img
        src="~/assets/img/logo.png"
        class="ring-1 ring-white rounded-full lg:flex-shrink-0 w-40 h-40"
      />
    </div>
  </header>
</template>

<script>
import GitHubIcon from "./Icons/GitHub";
import TwitterIcon from "./Icons/Twitter";

export default {
  components: { GitHubIcon, TwitterIcon },
};
</script>
