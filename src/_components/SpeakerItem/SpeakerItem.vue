<template>
  <div class="relative">
    <div class="SpeakerCardBg h-60 w-56"></div>
    <div class="SpeakerCard h-60 w-56"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .SpeakerCard {
    background-color: #fff;
    border: 7px solid #252e3a;
    position: relative;
    z-index: 1;
  }

  .SpeakerCardBg {
    border: 7px solid #252e3a;
    background: #fff;
    position: absolute;
    left: 20px;
    top: 20px;
    background-image: url('./stripes.svg');
    z-index: 0;
  }
</style>
