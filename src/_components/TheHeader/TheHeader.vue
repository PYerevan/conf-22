<template>
  <header
    class="fixed top-0 z-20 h-20 w-full p-4 transition-colors"
    :class="bgClass"
  >
    <div class="container mx-auto flex flex-row items-center justify-between">
      <img src="/icon.svg" alt="PyCon Icon" />
      <a href="#" class="NavItem mr-2.5 block lg:hidden">
        <BaseBlock :thickness="4" class="-top-1">
          <div class="bg-red py-2 px-4">Request an invite</div>
        </BaseBlock>
      </a>
      <nav class="hidden items-center space-x-8 sm:flex-row lg:flex">
        <a href="#About" class="NavItem"> About </a>
        <a href="#Schedule" class="NavItem"> Schedule </a>
        <a href="#Speakers" class="NavItem"> Speakers </a>
        <a href="#Sponsors" class="NavItem"> Sponsors </a>
        <a href="#Team" class="NavItem"> Team </a>
        <a href="#Location" class="NavItem"> Location </a>
        <a href="#Jobs" class="NavItem"> Jobs </a>
        <a href="#FAQ" class="NavItem"> FAQ </a>
        <a href="#" class="NavItem">
          <BaseBlock :thickness="4" class="-top-1">
            <div class="bg-red py-2 px-4">Request an invite</div>
          </BaseBlock>
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
  import { computed } from 'vue'
  import { useWindowScroll } from '@vueuse/core'
  import BaseBlock from '../BaseBlock/BaseBlock.vue'

  const { y } = useWindowScroll()

  const bgClass = computed(() => {
    return y.value < 30 ? 'bg-transparent' : 'bg-[#2D394A]'
  })
</script>

<style scoped>
  .NavItem {
    @apply text-sm font-bold;
  }
</style>
