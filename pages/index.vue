<template>
  <div class="container">
    <currentstate></currentstate>
    <states></states>
  </div>
</template>

<script>
import States from '@/components/states'
import Currentstate from '@/components/currentstate'

export default {
  components: {
    States,
    Currentstate,
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS  */
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
