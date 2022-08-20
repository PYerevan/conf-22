<template>
  <div class="BaseBlock relative flex">
    <div
      class="BaseBlockFront relative z-10 flex flex-1"
      :class="blockBgClassname"
    >
      <slot>Hello World</slot>
    </div>
    <div
      class="BaseBlockBg absolute inset-0 z-0 translate-x-2.5 translate-y-2.5 bg-white"
    ></div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'

  const rand = Math.random()

  const props = defineProps({
    bgColorClassname: {
      type: String,
      default: () => '',
    },
  })
</script>

<style lang="scss" scoped>
  .BaseBlockFront,
  .BaseBlockBg {
    border: 7px solid #252e3a;
  }

  .BaseBlockBg {
    background-image: url('/stripes.svg');
  }
</style>
