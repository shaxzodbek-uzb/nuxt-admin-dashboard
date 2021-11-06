<template>
  <div
    class="h-10 w-10 rounded-full"
    :style="{ backgroundImage: `url(${src})`, backgroundPosition: 'center', backgroundSize: 'cover'}"
  ></div>
</template>

<script>
export default {
  props: {
    srcProp: {
      type: String,
      default: null
    }
  },
  computed: {
    src() {
      if (this.srcProp == null) {
        return 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
      }
      return 'http://api.patron-erp.test/storage/' + this.srcProp
    }
  }
}
</script>

<style>
</style>