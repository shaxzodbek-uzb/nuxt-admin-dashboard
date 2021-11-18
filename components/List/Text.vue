<template>
  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ value }}</td>
</template>

<script>
export default {
  props: {
    value: {
      type: null,
      default: ''
    }
  }
}
</script>

<style>
</style>