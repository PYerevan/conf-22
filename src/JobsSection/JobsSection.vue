<template>
  <div id="Jobs" class="bg-green pb-30 pt-20">
    <div class="container relative z-10 mx-auto px-8 md:p-0">
      <div class="mb-16 text-center">
        <h3 class="text-5xl font-extrabold text-white">Jobs</h3>
      </div>

      <div class="grid gap-x-24 gap-y-12 md:grid-cols-3">
        <BaseBlock v-for="(job, index) in jobsItems" :key="index">
          <a
            :href="job.url"
            target="_blank"
            class="block w-full"
            :class="job.className"
          >
            <div class="min-h-[106px] px-4 py-2">
              <h5 class="text-2xl">{{ job.title }}</h5>
              <h6 class="opacity-70">{{ job.company }}</h6>
            </div>
          </a>
        </BaseBlock>
      </div>
    </div>
  </div>
</template>

<script setup>
  import BaseBlock from '../_components/BaseBlock/BaseBlock.vue'

  const jobs = [
    {
      title: 'Senior Python Developer',
      company: 'Testco',
      url: 'http://test.com',
    },
    {
      title: 'Senior Python Developer',
      company: 'Testco',
      url: 'http://test.com',
    },
    {
      title: 'Senior Python Developer',
      company: 'Testco',
      url: 'http://test.com',
    },
    {
      title: 'Senior Python Developer',
      company: 'Testco',
      url: 'http://test.com',
    },
    {
      title: 'Senior Python Developer',
      company: 'Testco',
      url: 'http://test.com',
    },
    {
      title: 'Senior Python Developer',
      company: 'Testco',
      url: 'http://test.com',
    },
    {
      title: 'Senior Python Developer',
      company: 'Testco',
      url: 'http://test.com',
    },
    {
      title: 'Mid-leve tester',
      company: 'Somcorp',
      url: 'http://test.com',
    },
  ]

  const classnames = ['bg-purple', 'bg-red', 'bg-yellow text-gray', 'bg-blue']

  const jobsItems = jobs.map((item, index) => {
    return {
      ...item,
      className: classnames[index % classnames.length],
    }
  })
</script>

<style lang="scss" scoped></style>
