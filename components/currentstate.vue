<template>
  <div>
    <h1>{{ state }}</h1>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Currentstate',
  data() {
    return {}
  },

  computed: mapGetters({
    state: 'index/getState',
  }),

  mounted() {
    // this.getState()
  },

  methods: {
    ...mapMutations({
      changeState: 'index/changeState',
    }),
  },
}
</script>
