<template>
  <section
    id="Intro"
    class="relative flex min-h-screen flex-col items-center justify-center border-b-[30px] border-solid border-[#f9ad1b] bg-[#252d3a] py-20 px-10 text-white"
  >
    <div class="IntroBg"></div>
    <div
      class="IntroContainer container relative mx-auto flex flex-col items-center justify-center"
    >
      <div class="IntroContent">
        <img src="./IntroLogo.svg" alt="PyCon Armenia" class="IntroLogo" />
        <!-- <p>November 5-6, AUA, Yerevan</p> -->
      </div>
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

  .IntroContent {
    padding: 10vmax;
    background: #252e3a;
    box-shadow: 0px 0px 60px rgba(32, 166, 193, 0.25);
    border-radius: 30px;
  }

  .IntroLogo {
    width: 30vmax;
  }
</style>
