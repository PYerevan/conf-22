<template>
  <section
    id="Intro"
    class="bg-gray relative z-10 flex min-h-[calc(100vh-30px)] flex-col items-center justify-center py-20 px-10 text-white"
  >
    <div class="IntroBg inset-[2%] md:inset-[10%]"></div>
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
