<template>
  <div class="m-auto">
    <Nav />
    <Projects />
  </div>
</template>

<script>
import Nav from "../components/Navbar";
import Projects from "../components/Projects";

export default {
  components: { Nav, Projects },
};
</script>
