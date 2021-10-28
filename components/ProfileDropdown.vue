<template>
  <!-- Profile dropdown -->
  <div class="ml-3 relative">
    <div>
      <button
        id="user-menu-button"
        type="button"
        class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        aria-expanded="false"
        aria-haspopup="true"
        @click="showMenu"
      >
        <span class="sr-only">Open user menu</span>
        <img
          class="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt
        />
      </button>
    </div>

    <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
    -->
    <div
      v-show="isMenuShow"
      class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabindex="-1"
    >
      <!-- Active: "bg-gray-100", Not Active: "" -->
      <a
        id="user-menu-item-0"
        href="#"
        class="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabindex="-1"
      >Your Profile</a>

      <a
        id="user-menu-item-1"
        href="#"
        class="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabindex="-1"
      >Settings</a>

      <a
        id="user-menu-item-2"
        href="#"
        class="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabindex="-1"
      >Sign out</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuShow: false
    }
  },
  methods: {
    showMenu() {
      this.isMenuShow = !this.isMenuShow
    }
  }
}
</script>

<style>
</style>