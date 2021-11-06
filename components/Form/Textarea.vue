<template>
  <div class="col-span-6 sm:col-span-3">
    <label for="about" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <div class="mt-1">
      <textarea
        id="about"
        name="about"
        rows="3"
        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
        :value="value"
        @input="$emit('input', $event.target.value)"
      ></textarea>
    </div>
    <p class="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
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
    }
  }
}
</script>

<style>
</style>