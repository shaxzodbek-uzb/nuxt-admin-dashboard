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
                <div class="mt-5 md:mt-0 md:col-span-2">
                  <div class="shadow overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                      <div class="grid grid-cols-6 gap-6">
                        <FormPhoto v-model="user.image" />
                        <FormInput v-model="user.full_name" label="Full name" />
                        <FormInput v-model="user.email" label="Email" type="email" />
                        <FormInput v-model="user.address" label="Address" />
                        <FormTextarea v-model="user.description" label="Description" />
                        <FormInput v-model="user.birth_date" label="Birth date" type="date" />
                        <FormSelect
                          v-model="user.gender"
                          label="Gender"
                          :items="[{value: 'male', title: 'Male'},{value: 'female', title: 'Female'}]"
                        />
                        <FormSelect
                          v-model="user.status"
                          label="Status"
                          :items="[{value: 'active', title: 'Active'},{value: 'disactive', title: 'Disactive'}]"
                        />
                        <FormInput v-model="user.phone" label="Phone" />
                        <FormInput v-model="user.phone_additional" label="Phone additional" />
                        <FormCheckboxGroup v-model="user.roles" label="Roles" :items="roles" />
                      </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        @click="updateUserData"
                      >Save</button>
                    </div>
                  </div>
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
        full_name: null,
        email: null,
        address: null,
        description: null,
        birth_date: null,
        gender: null,
        status: null,
        image: null,
        phone: null,
        phone_additional: null,
        roles: []
      },
      roles: []
    }
  },
  mounted() {
    this.getUserData()
    this.loadRoles()
  },
  methods: {
    getUserData() {
      this.$axios.get('/user/users/' + this.$route.params.id).then((res) => {
        this.user = res.data.item
      })
    },
    updateUserData() {
      const formData = new FormData()
      formData.append('_method', 'PUT')
      for (const key in this.user) {
        if (this.user[key] != null) {
          if (typeof this.user[key] === 'object' && key !== 'image') {
            for (const k in this.user[key]) {
              formData.append(`${key}[${k}]`, this.user[key][k])
            }
          } else {
            formData.append(key, this.user[key])
          }
        }
      }
      this.$axios
        .post('/user/users/' + this.$route.params.id, formData)
        .then((res) => {
          this.$router.push('/')
        })
    },
    loadRoles() {
      this.$axios.get('/user/roles').then((res) => {
        this.roles = res.data.items.data
      })
    }
  }
}
</script>

<style>
</style>