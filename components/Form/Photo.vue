<template>
  <div class="col-span-6 sm:col-span-3">
    <input v-show="false" ref="input-file" type="file" @input="handleFile" />
    <label class="block text-sm font-medium text-gray-700">Photo</label>
    <div class="mt-1 flex items-center">
      <span
        class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100"
        :style="{ backgroundImage: `url(${imageSrc})`, backgroundPosition: 'center', backgroundSize: 'cover'}"
      ></span>
      <button
        type="button"
        class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="openFileWindow"
      >Change</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: null,
      default: ''
    }
  },
  computed: {
    imageSrc() {
      if (this.value == null || this.value === '') {
        return 'images/user-profile.svg'
      }
      if (this.value instanceof Object) return URL.createObjectURL(this.value)
      return 'http://api.patron-erp.test/storage/' + this.value
    }
  },
  methods: {
    handleFile(e) {
      this.$emit('input', e.target.files[0])
    },
    openFileWindow() {
      this.$refs['input-file'].click()
    }
  }
}
</script>

<style>
</style>