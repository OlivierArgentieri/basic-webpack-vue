<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to test-wp-2"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
//import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import HelloWorld from 'first/HelloWorld' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
