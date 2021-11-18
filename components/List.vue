<template>
  <div class="min-h-full">
    <Navigation />
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">{{ settings.pageTitle }}</h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <nuxt-link :to="settings.routes.create">Create</nuxt-link>
        <div class="px-4 py-6 sm:px-0">
          <!-- This example requires Tailwind CSS v2.0+ -->
          <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th
                          v-for="(header, idx) in settings.headers"
                          :key="idx"
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >{{ header.title }}</th>
                        <th scope="col" class="relative px-6 py-3">
                          <span class="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr v-for="item in items" :key="item.id">
                        <component
                          :is="header.component"
                          v-for="(header, idx) in settings.headers"
                          :key="idx"
                          v-model="item[header.property]"
                          :row="item"
                        />
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <nuxt-link
                            :to="settings.routes.update+item.id"
                            class="text-indigo-600 hover:text-indigo-900"
                          >Update</nuxt-link>
                        </td>
                      </tr>
                      <!-- More people... -->
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colspan="6" class="text-center">
                          <Pagination v-model="pagination" @paginate="paginate($event)" />
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>
<script>
export default {
  props: {
    settings: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      items: [],
      pagination: {
        perPage: 1,
        lastPage: 1,
        currentPage: 1,
        to: 1
      }
    }
  },
  watch: {
    pagination: {
      deep: true,
      handler() {
        this.loadItems()
      }
    }
  },
  mounted() {
    this.loadItems()
  },
  methods: {
    loadItems() {
      this.$axios
        .$get(this.settings.apis.list, {
          params: {
            limit: this.pagination.perPage,
            page: this.pagination.currentPage
          }
        })
        .then((res) => {
          this.items = res.items.data
          this.pagination.lastPage = res.items.last_page
          this.pagination.currentPage = res.items.current_page
          this.pagination.to = res.items.to
        })
    },
    paginate(page) {
      this.pagination.currentPage = page
    }
  }
}
</script>