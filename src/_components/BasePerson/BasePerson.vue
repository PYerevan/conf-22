<template>
  <div class="relative">
    <div class="PersonCard h-72 w-56">
      <div
        class="PersonImg w-full bg-cover pb-[100%]"
        :style="{
          backgroundImage: `url(${person.imgUrl})`,
        }"
      ></div>
      <div
        class="PersonInfo px-4 py-2"
        :style="{
          backgroundColor: personInfoBackgroundColor,
        }"
      >
        <h3 class="text-lg font-semibold">{{ person.name }}</h3>
        <p class="text-sm">
          {{ person.position }} <br />
          @{{ person.positionAt }}
        </p>
      </div>
    </div>
    <div class="PersonCardBg h-72 w-56"></div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    variation: {
      type: Number,
      default: () => 1,
    },
    person: {
      type: Object,
      default: () => {},
    },
    // name: {
    //   type: String,
    //   default: () => '',
    // },
    // imgUrl: {
    //   type: String,
    //   default: () => '',
    // },
    // position: {
    //   type: String,
    //   default: () => '',
    // },
    // positionAt: {
    //   type: String,
    //   default: () => '',
    // },
  })

  const personInfoBackgroundColorVariations = {
    0: '#d50e50',
    1: '#20A6C1',
    2: '#93268F',
  }

  const personInfoBackgroundColor = computed(
    () => personInfoBackgroundColorVariations[props.variation],
  )
</script>

<style lang="scss" scoped>
  .PersonCard {
    background-color: #fff;
    border: 7px solid #252e3a;
    position: relative;
    z-index: 1;
  }

  .PersonImg {
    @apply bg-slate-100;
  }

  .PersonInfo {
    position: absolute;
    border-top: 7px solid #252e3a;
    width: 100%;
    left: 0;
    bottom: 0;
    background-color: #d50e50;
    z-index: 0;
    min-height: 80px;
  }

  .PersonCardBg {
    border: 7px solid #252e3a;
    background: #fff;
    position: absolute;
    left: 20px;
    top: 20px;
    background-image: url('/stripes.svg');
    z-index: 0;
  }
</style>
