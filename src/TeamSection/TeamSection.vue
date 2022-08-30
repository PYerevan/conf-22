<template>
  <div id="Team" class="bg-red min-h-screen">
    <div class="pb-30 container relative z-10 mx-auto pt-20">
      <div class="mb-16 text-center">
        <h3 class="text-5xl font-extrabold text-white">Team</h3>
      </div>

      <div class="grid gap-x-4 gap-y-20 md:grid-cols-4">
        <div
          v-for="member in members"
          :key="member.id"
          class="flex flex-row justify-center"
        >
          <BasePerson :person="member" :variation="member.variation" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import BasePerson from '../_components/BasePerson/BasePerson.vue'

  const speakersLorem = new Array(3).fill(null).map((item, index) => {
    return {
      name: 'Davit Tigranyan',
      imgUrl: `https://i.pravatar.cc/300?u=${Math.random()}`,
      position: 'Senior Product Designer',
      positionAt: 'Circa',
    }
  })

  const members = [
    {
      name: 'Karen Javadyan',
      imgUrl: `/team/karen.jpeg`,
      position: 'Software Engineer',
      positionAt: 'Snowflake',
    },
    {
      name: 'Astghik Petrosyan',
      imgUrl: '/team/ach.jpeg',
      position: 'Technical Recruiter',
      positionAt: 'Meettal',
    },
    {
      name: 'Ruben Manukyan',
      imgUrl: '/team/rouben.jpg',
      position: 'Co-Founder/CTO',
      positionAt: 'VXSoft LLC',
    },
    {
      name: 'Grigory Petrov',
      imgUrl: '/team/grigory.jpeg',
      position: 'Head of Technical Marketing',
      positionAt: 'Evrone',
    },
  ].map((item, index) => {
    const rowNum = Math.floor(index / 4)
    const variation = (rowNum + index) % 4

    return {
      id: index,
      variation,
      ...item,
    }
  })
</script>

<style lang="scss" scoped></style>
