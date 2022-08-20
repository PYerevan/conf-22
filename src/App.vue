<template>
  <div class="AppWrapper relative">
    <TheHeader />
    <IntroSection />
    <SpeakersSection />
    <TeamSection />
    <LocationSection />
    <JobsSection />
    <FooterSection />
    <div class="absolute inset-0 overflow-hidden">
      <div
        id="AppParallaxBackground"
        class="container absolute inset-y-[0] inset-x-0 z-0 mx-auto bg-contain bg-repeat-y"
        :style="{
          transition: '.05s linear',
          transform: `translateY(${bgOffset}px)`,
        }"
        style="background-image: url('/parallax-bg.svg')"
      ></div>
    </div>
  </div>
</template>
<script setup>
  import { onMounted, onUnmounted, ref } from 'vue'
  import TheHeader from './_components/TheHeader/TheHeader.vue'
  import IntroSection from './IntroSection/IntroSection.vue'
  import SpeakersSection from './SpeakersSection/SpeakersSection.vue'
  import TeamSection from './TeamSection/TeamSection.vue'
  import LocationSection from './LocationSection/LocationSection.vue'
  import JobsSection from './JobsSection/JobsSection.vue'
  import FooterSection from './FooterSection/FooterSection.vue'

  // const appBg = document.getElementById('#AppParallaxBackground')
  const bgOffset = ref(0)

  onMounted(() => {
    document.addEventListener('scroll', handleScroll)
  })
  onUnmounted(() => {
    document.removeEventListener('scroll', handleScroll)
  })

  const updateOffset = () => {
    const scrollY = window.scrollY

    bgOffset.value = scrollY / 6
  }

  // const handleScroll = () => requestAnimationFrame(updateOffset)
</script>

<style scoped></style>
