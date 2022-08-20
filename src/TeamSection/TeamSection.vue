<template>
  <div id="Team" class="bg-red min-h-screen">
    <div class="pb-30 container relative z-10 mx-auto pt-20">
      <div class="mb-16 text-center">
        <h3 class="text-5xl font-extrabold text-white">Team</h3>
      </div>

      <div class="grid gap-x-4 gap-y-20 md:grid-cols-3">
        <div
          v-for="speaker in speakers"
          :key="speaker.id"
          class="flex flex-row justify-center"
        >
          <BasePerson :person="speaker" :variation="speaker.variation" />
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

  const speakers = [
    {
      name: 'Karen Javadyan',
      imgUrl: `https://media-exp1.licdn.com/dms/image/C4D03AQFRNIokUooMFw/profile-displayphoto-shrink_800_800/0/1549578808238?e=1665619200&v=beta&t=POUHY-TuQF0_KCPan99iF2y0ng9P5r242rAZty_a30I`,
      position: 'Software Engineer',
      positionAt: 'Snowflake',
    },
    {
      name: 'Astghik Petrosyan',
      imgUrl:
        'https://media-exp1.licdn.com/dms/image/C4D03AQHuy84tN5mlog/profile-displayphoto-shrink_800_800/0/1568727068224?e=1665619200&v=beta&t=PZRvlQhvrv0b8aqJVxGUEjWm9xLx7gHv9A_oqPTipHA',
      position: 'Technical Recruiter',
      positionAt: 'Meettal',
    },
    {
      name: 'Ruben Manukyan',
      imgUrl:
        'https://media-exp1.licdn.com/dms/image/C4E03AQH4hACoemUWAw/profile-displayphoto-shrink_800_800/0/1539756972285?e=1665619200&v=beta&t=3gPuyStf3aNZAyRcqPYxcL0KUYLRbEKu7-RyafWKb5Y',
      position: 'Co-Founder/CTO',
      positionAt: 'VXSoft LLC',
    },
  ]
    .concat(speakersLorem)
    .map((item, index) => {
      const rowNum = Math.floor(index / 3)
      const variation = (rowNum + index) % 3

      return {
        id: index,
        variation,
        ...item,
      }
    })
</script>

<style lang="scss" scoped></style>
