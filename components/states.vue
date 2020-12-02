<template>
  <div class="">
    <h1>
      states component
      <span class="bg-pink-300 m-1 p-1 rounded">{{ name }}</span>
    </h1>
    <div class="m-3 p-3 bg-gray-300">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        @click="changeState({ name: 'start', token: '1234' })"
      >
        start
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        @click="changeState({ name: 'walking', token: '1234' })"
      >
        walking
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        @click="changeState({ name: 'running', token: '56789' })"
      >
        running
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        @click="changeState({ name: 'stop', token: '1234' })"
      >
        stop
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'States',
  data() {
    return {
      estado: '',
    }
  },

  computed: mapState(['name', 'token']),

  methods: {
    ...mapMutations({
      changeState: 'updateState',
    }),
  },
}
</script>
