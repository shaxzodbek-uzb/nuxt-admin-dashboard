<template>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="flex items-center">
      <div class="flex-shrink-0 h-10 w-10">
        <ProfileAvatar :src-prop="row.image" />
      </div>
      <div class="ml-4">
        <div class="text-sm font-medium text-gray-900">{{ row.full_name }}</div>
        <div class="text-sm text-gray-500">{{ row.email }}</div>
      </div>
    </div>
  </td>
</template>

<script>
export default {
  props: {
    value: {
      type: null,
      default: ''
    },
    row: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
</style>