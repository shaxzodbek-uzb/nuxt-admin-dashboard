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
        <h1
          class="text-3xl font-bold text-gray-900"
        >Foydalanuvchini tahrirlash: {{ $route.params.id }}</h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
          <!-- This example requires Tailwind CSS v2.0+ -->
          <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg p-2">
                  Email:
                  <input v-model="user.email" type="email" class="border" />
                  <br />
                  <br />Full name:
                  <input v-model="user.full_name" type="text" class="border" />
                  <br />
                  <button class="border bg-blue-200 rounded-md" @click="updateUserData">Save</button>
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
      user: {
        id: this.$route.params.id,
        full_name: '',
        email: ''
      }
    }
  },
  mounted() {
    this.getUserData()
  },
  methods: {
    getUserData() {
      this.$axios.get('/user/users/' + this.$route.params.id).then((res) => {
        this.user = res.data.item
      })
    },
    updateUserData() {
      const data = { ...this.user, _method: 'PUT' }
      this.$axios
        .put('/user/users/' + this.$route.params.id, data)
        .then((res) => {
          this.$router.push('/')
        })
    }
  }
}
</script>

<style>
</style>