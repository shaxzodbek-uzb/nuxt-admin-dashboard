<template>
  <fieldset class="col-span-6">
    <legend class="text-base font-medium text-gray-900">{{ label }}</legend>
    <div class="mt-4 space-y-4">
      <div v-for="item in items" :key="item.id" class="flex items-start">
        <div class="flex items-center h-5">
          <input
            id="checkbox-group"
            v-model="qiymat"
            :value="item.id"
            name="checkbox-group"
            type="checkbox"
            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div class="ml-3 text-sm">
          <label for="checkbox-group" class="font-medium text-gray-700">{{ item.name }}</label>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Input'
    },
    value: {
      type: Array,
      default: () => []
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      qiymat: []
    }
  },
  watch: {
    qiymat(newValue) {
      this.$emit('input', newValue)
    },
    value(newValue) {
      this.qiymat = newValue
    }
  }
}
</script>

<style>
</style>