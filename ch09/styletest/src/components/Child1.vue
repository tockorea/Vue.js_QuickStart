<template>
  <div class="main">
    {{ msg }}
    <child11 />
    {{ msg }}
  </div>
</template>

<script>
import child11 from './Child11.vue'

export default {
  name: 'child1',
  components: { child11 },
  data () {
    return {
      msg: 'Child1'
    }
  }
}
</script>

<style scoped>
.main { border: solid 1px black; background-color: yellow; }
.test { padding: 10px; text-decoration: underline; border: solid 1px black; }
</style>
