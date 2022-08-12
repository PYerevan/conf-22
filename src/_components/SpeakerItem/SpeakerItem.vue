<template>
  <div class="relative">
    <div class="SpeakerCard h-72 w-56">
      <div
        class="SpeakerImg w-full bg-cover pb-[100%]"
        :style="{
          backgroundImage: `url('https://i.pravatar.cc/300?u=${rand}')`,
        }"
      ></div>
      <div
        class="SpeakerInfo px-4 py-2"
        :style="{
          backgroundColor: speakerInfoBackgroundColor,
        }"
      >
        <h3 class="text-lg font-semibold">{{ name }}</h3>
        <p class="text-sm">
          {{ position }} <br />
          @{{ positionAt }}
        </p>
      </div>
    </div>
    <div class="SpeakerCardBg h-72 w-56"></div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'

  const rand = Math.random()

  const props = defineProps({
    variation: {
      type: Number,
      default: () => 1,
    },
    name: {
      type: String,
      default: () => '',
    },
    position: {
      type: String,
      default: () => '',
    },
    positionAt: {
      type: String,
      default: () => '',
    },
  })

  const speakerInfoBackgroundColorVariations = {
    0: '#d50e50',
    1: '#20A6C1',
    2: '#93268F',
  }

  const speakerInfoBackgroundColor = computed(
    () => speakerInfoBackgroundColorVariations[props.variation],
  )
</script>

<style lang="scss" scoped>
  .SpeakerCard {
    background-color: #fff;
    border: 7px solid #252e3a;
    position: relative;
    z-index: 1;
  }

  .SpeakerImg {
    @apply bg-slate-100;
  }

  .SpeakerInfo {
    position: absolute;
    border-top: 7px solid #252e3a;
    width: 100%;
    left: 0;
    bottom: 0;
    background-color: #d50e50;
    z-index: 0;
    min-height: 80px;
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
