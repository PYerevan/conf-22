<template>
  <header
    class="fixed top-0 z-20 flex h-16 w-full items-center py-2 px-4 transition-colors lg:h-20 lg:p-4"
    :class="bgClass"
  >
    <div class="container mx-auto flex flex-row items-center justify-between">
      <img src="/icon.svg" alt="PyCon Icon" />
      <nav
        :class="[
          bgClass,
          isOpen ? 'max-h-[calc(100vh_-_64px)]' : 'max-h-0',
          'lg:max-h-max',
        ]"
        class="absolute inset-x-0 top-full flex w-full flex-col items-center space-y-2 overflow-y-auto overflow-x-hidden transition-all lg:static lg:flex lg:h-max lg:w-auto lg:flex-row lg:space-x-2 lg:space-y-0"
      >
        <a href="#About" class="NavItem" @click="handleMenuClose"> About </a>
        <!-- <a href="#Schedule" class="NavItem" @click="handleMenuClose">
          Schedule
        </a> -->
        <!-- <a href="#Speakers" class="NavItem" @click="handleMenuClose">
          Speakers
        </a> -->
        <!-- <a href="#Sponsors" class="NavItem" @click="handleMenuClose">
          Sponsors
        </a> -->
        <a href="#Team" class="NavItem" @click="handleMenuClose"> Team </a>
        <a href="#Location" class="NavItem" @click="handleMenuClose">
          Location
        </a>
        <!-- <a href="#Jobs" class="NavItem" @click="handleMenuClose"> Jobs </a> -->
        <a href="#FAQ" class="NavItem" @click="handleMenuClose"> FAQ </a>
        <a
          href="https://forms.gle/Q1aKaLR2GGSn4uxcA"
          target="_blank"
          class="NavItem NavItemAction !mb-8 lg:!mb-0"
          @click="handleMenuClose"
        >
          <BaseBlock :thickness="4" class="-top-1">
            <div class="bg-red py-2 px-4">Become a speaker</div>
          </BaseBlock>
        </a>
      </nav>
      <button
        href="#"
        class="inline-block p-2 lg:hidden"
        @click="handleMenuToggle"
      >
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <svg
          v-if="isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup>
  import { computed, ref } from 'vue'
  import { useWindowScroll } from '@vueuse/core'
  import BaseBlock from '../BaseBlock/BaseBlock.vue'

  const { y } = useWindowScroll()

  const bgClass = computed(() => {
    return y.value > 30 || isOpen.value ? 'bg-[#2D394A]' : 'bg-transparent'
  })

  const isOpen = ref(false)

  const handleMenuToggle = () => {
    isOpen.value = !isOpen.value
  }

  const handleMenuClose = () => {
    isOpen.value = false
  }
</script>

<style scoped>
  .NavItem {
    @apply block px-4 py-2 text-sm font-bold;
  }

  .NavItem:not(.NavItemAction) {
    @apply text-gray-300 hover:text-white transition-colors;
  }
</style>
