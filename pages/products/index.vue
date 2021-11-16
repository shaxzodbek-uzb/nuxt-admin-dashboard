<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <!--
  This example requires updating your template:

  ```
  <html class="h-full bg-gray-100">
  <body class="h-full">
  ```
  -->
  <div class="min-h-full">
    <Navigation />

    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">Maxsulotlar</h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <nuxt-link to="/products/create">Create</nuxt-link>
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
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >ID</th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >Name</th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >Price</th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >Description</th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >Category</th>
                        <th scope="col" class="relative px-6 py-3">
                          <span class="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr v-for="item in items" :key="item.id">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item.id }}</td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                        >{{ item.name }}</td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                        >{{ item.price }}</td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                        >{{ item.description}}</td>

                        <td class="px-6 py-4 whitespace-nowrap">
                          <span
                            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                          >Telefonlar</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <nuxt-link
                            :to="`/products/update/${item.id}`"
                            class="text-indigo-600 hover:text-indigo-900"
                          >Update</nuxt-link>
                        </td>
                      </tr>

                      <!-- More people... -->
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colspan="6" class="text-center">
                          <!-- <div class="flex flex-row">
                            <select v-model="pagination.perPage">
                              <option value="1">1</option>
                              <option value="10">10</option>
                              <option value="15">15</option>
                            </select>
                            <div class="flex flex-row">
                              <div
                                v-for="idx in pagination.lastPage"
                                :key="idx"
                                class="border rounded-md w-8 h-8"
                                :class="{'bg-gray-200': idx == pagination.currentPage, 'bg-green-400': idx != pagination.currentPage}"
                                @click="pagination.currentPage = idx"
                              >{{ idx }}</div>
                            </div>
                          </div>-->
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
        this.loadProducts()
      }
    }
  },
  mounted() {
    this.loadProducts()
  },
  methods: {
    loadProducts() {
      this.$axios
        .$get('/wms/products', {
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

<style>
</style>