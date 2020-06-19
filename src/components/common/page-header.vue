<template>
  <div class="row">
    <div class="col-12">
      <h3 class="text-center">
        {{ title }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
  
}
</script>

<style lang="scss" scoped>
  .row {
    .col-12 {
      h3 {
        font-size: 46px;
        font-weight: 300;
        line-height: 76px;
        color: #001D38;
        position: relative;
        z-index: 0;
        font-family: "Montserrat", sans-serif;
        padding-bottom: 15px;
        margin-bottom: 50px;
      }
    }
  }
</style>