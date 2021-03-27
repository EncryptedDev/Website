<template>
  <div class="py-20 px-20 dark:bg-black dark:text-textHeaderDark">
    <Nav />
    <Header />
    <Projects />
  </div>
</template>

<script>
import Header from "../components/Header";
import Projects from "../components/Projects";
import Nav from "../components//Navbar";

export default {
  components: { Header, Projects, Nav },
};
</script>
