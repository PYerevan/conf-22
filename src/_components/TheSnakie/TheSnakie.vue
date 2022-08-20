<template>
  <div class="absolute inset-0">
    <div class="absolute inset-x-0 inset-y-1">
      <div
        class="absolute"
        :style="{
          left: `${startPosition}px`,
        }"
      >
        <div
          v-for="index in fractionCount"
          :key="index"
          class="bg-red absolute"
          :style="{
            width: `${fractionSize - 1}px`,
            height: `${fractionSize - 1}px`,
            left: `${index * fractionSize}px`,
          }"
        >
          <div
            v-if="index === fractionCount"
            class="absolute inset-[1.1px] bg-white"
            style="border: 1px solid #600"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue'

  const startPosition = ref(0)
  const tickDuration = 200

  const fractionSize = 7
  const fractionCount = ref(7)

  setInterval(() => {
    fractionCount.value++

    setTimeout(() => {
      startPosition.value += fractionSize

      setTimeout(() => {
        startPosition.value += fractionSize
        fractionCount.value--
      }, tickDuration / 5)
    }, tickDuration / 2)

    // setTimeout(() => {
    //   fractionCount.value--
    // }, 400)
  }, tickDuration)
</script>

<style lang="scss" scoped></style>
