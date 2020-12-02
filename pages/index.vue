<template>
  <div class="container">
    <div class="h-48 flex flex-wrap content-start grid grid-rows-3">
      <states />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import States from '@/components/states'

export default {
  components: {
    States,
  },
  methods: {
    ...mapMutations({
      changeState: 'updateState',
    }),
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS  */
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
