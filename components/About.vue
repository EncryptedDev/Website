<template>
  <div class="flex h-3/4">
    <div class="m-auto w-4/5">
      <h1 class="text-4xl text-center heading">
        About <span class="text-purple-400"> me</span>
      </h1>
      <Introduction />
      <div class="lg:flex lg:flex-row lg:gap-4 mt-5"><Setup /><Setup /></div>
      <Socials />
    </div>
  </div>
</template>

<script>
import DiscordModal from "../components/About/DiscordModal";
import Introduction from "../components/About/Introduction";
import Setup from "../components/About/Setup";
import Socials from "../components/About/Socials";

export default {
  components: { DiscordModal, Introduction, Setup, Socials },
};
</script>
