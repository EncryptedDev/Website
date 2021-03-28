<template>
  <div class="backgroundDark text-white">
    <Header />
    <About />
  </div>
</template>

<script>
import Header from "../components/Header";
import About from "../components/About";

export default {
  components: { About, Header },
};
</script>
