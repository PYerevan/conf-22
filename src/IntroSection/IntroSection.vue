<template>
  <section
    id="Intro"
    class="relative flex min-h-screen flex-col items-center justify-center border-b-[30px] border-solid border-[#f9ad1b] bg-[#252d3a] py-20 px-10 text-white"
  >
    <div class="IntroBg"></div>
    <div
      class="IntroContainer container relative mx-auto flex flex-col items-center justify-center"
    >
      <h1 class="font-heading mb-4 text-xl md:text-3xl lg:text-5xl">
        PyCon Armenia
      </h1>
      <p>November 5-6, AUA</p>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
  .IntroBg {
    position: absolute;
    inset: 10%;
    background-image: url('./IntroSectionBackground.svg');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 0;
  }
</style>
