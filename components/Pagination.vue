<template>
  <ul class="flex list-reset border border-grey rounded w-auto font-sans">
    <li v-if="value.currentPage > 1">
      <a
        class="block hover:text-green-400 hover:bg-blue text-blue border-r border-grey px-3 py-2"
        href="#"
        @click.prevent="change(value.currentPage -1)"
      >Previous</a>
    </li>
    <li v-for="page in pages" :key="page">
      <a
        :class="[page == value.currentPage ? 'text-green-400 bg-blue border-r border-blue':'hover:text-green-400 hover:bg-blue text-blue border-r border-grey', 'block px-3 py-2']"
        href="#"
        @click.stop="change(page)"
      >{{ page }}</a>
    </li>
    <li v-if="value.currentPage < value.lastPage">
      <a
        class="block hover:text-green-400 hover:bg-blue text-blue px-3 py-2"
        href="#"
        @click.prevent="change(value.currentPage + 1)"
      >Next</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    },
    offset: {
      type: Number,
      default: 2
    }
  },
  computed: {
    pages() {
      if (!this.value.to) {
        return null
      }
      let from = this.value.currentPage - this.offset
      if (from < 1) {
        from = 1
      }
      let to = from + this.offset * 2
      if (to >= this.value.lastPage) {
        to = this.value.lastPage
      }
      const pages = []
      for (let page = from; page <= to; page++) {
        pages.push(page)
      }
      return pages
    }
  },
  methods: {
    change(page) {
      this.$emit('paginate', page)
    }
  }
}
</script>