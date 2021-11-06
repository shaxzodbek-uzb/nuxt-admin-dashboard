<template>
  <div class="col-span-6 sm:col-span-3">
    <label for="first-name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <input
      id="first-name"
      name="first-name"
      autocomplete="given-name"
      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      :value="value"
      :type="type"
      @input="$emit('input', $event.target.value)"
    />
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
      type: null,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style>
</style>