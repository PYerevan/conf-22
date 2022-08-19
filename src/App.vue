<template>
  <div class="AppWrapper relative overflow-hidden">
    <IntroSection />
    <SpeakersSection />
    <FooterSection />
    <div
      class="container absolute inset-0 z-0 mx-auto bg-contain bg-repeat-y"
      style="background-image: url('/parallax-bg.svg')"
    ></div>
  </div>
</template>
<script setup>
  import IntroSection from './IntroSection/IntroSection.vue'
  import SpeakersSection from './SpeakersSection/SpeakersSection.vue'
  import FooterSection from './FooterSection/FooterSection.vue'
</script>

<style scoped></style>
