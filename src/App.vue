<script>
export default {
  data() {
    return {
      url: '',
    }
  },
  methods: {
    
  },
  created() {
    this.$router.push('/')
  },
}
</script>

<template>
  <div class="cont-app">
    <div class="nav">
      <div class="col col-1">
      <h1>Screen Tester</h1>
      </div>
    </div>
  </div>
  <router-view/>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  body{
    background: #181818;
    color: white;
  }
  .cont-app{
    padding: 20px 0;
    .nav{
      position: fixed;
      top: 0;
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
      padding: 0 40px;
      padding-bottom: 20px;
      background: #181818;
      .col{
        margin-top: 20px;
      }
    }
  }
}
</style>
