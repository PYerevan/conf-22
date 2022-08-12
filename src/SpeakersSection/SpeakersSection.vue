<template>
  <div id="Speakers" class="min-h-screen bg-[#f9ad1b] pt-8 pb-20">
    <div class="container mx-auto">
      <div class="mb-16 text-center">
        <h3 class="font-heading text-5xl font-bold text-[#912396]">Speakers</h3>
      </div>

      <div class="grid gap-x-4 gap-y-20 md:grid-cols-3">
        <div
          v-for="speaker in speakers"
          :key="speaker.id"
          class="flex flex-row justify-center"
        >
          <SpeakerItem :variation="speaker.variation" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import SpeakerItem from '../_components/SpeakerItem/SpeakerItem.vue'

  const speakers = new Array(12).fill(null).map((item, index) => {
    const rowNum = Math.floor(index / 3)

    return {
      id: index,
      variation: (rowNum + index) % 3,
    }
  })
</script>

<style lang="scss" scoped></style>
