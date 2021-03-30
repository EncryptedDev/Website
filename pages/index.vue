<template>
  <div class="backgroundDark text-white">
    <Header />
    <About />
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";

export default {
  components: { About, Header, Footer },
};
</script>
