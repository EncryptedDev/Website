<template>
    <header class="flex flex-row mb-20">
      <div class="header">
        <h1 class="fade-in-title font-bold text-3xl">EncryptedDev</h1>
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
    </header>
</template>

<script>
import GitHubIcon from "./Icons/GitHub";
import DiscordIcon from "./Icons/Discord";
import TwitterIcon from "./Icons/Twitter";

export default {
  components: { GitHubIcon, DiscordIcon, TwitterIcon },
};
</script>