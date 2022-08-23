<template>

  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>

  <h1>Hello there!!</h1>
  <button @click="goToDayBook" class="btn btn-primary">primary</button>
  <button @click="goToDayBook" class="btn btn-secondary">secondary</button>
  <button @click="goToDayBook" class="btn btn-success">success</button>

</template>

<script>

export default {
  methods:{
    goToDayBook()
    {
      this.$router.push({  name: 'no-entry' })
    }
  }

}

</script>
