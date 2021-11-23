<template>
  <List :settings="settings" />
</template>
<script>
export default {
  computed: {
    settings() {
      return require('@/resource/' + this.$route.params.resource).default
    }
  }
}
</script>
