<template>
  <div class="col-span-6 sm:col-span-3">
    <label for="country" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <select
      id="country"
      name="country"
      autocomplete="country-name"
      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
      <option :value="null">-</option>
      <option v-for="item in items" :key="item.value" :value="item.value">{{ item.title }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Input'
    },
    value: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
</style>