<template>
  <List :settings="settings" />
</template>
<script>
export default {
  data() {
    return {
      settings: {
        pageTitle: 'Mahsulotlar',
        routes: {
          create: '/products/create',
          update: '/products/update/'
        },
        apis: {
          list: '/wms/products'
        },
        headers: [
          {
            title: 'ID',
            component: 'ListText',
            property: 'id'
          },
          {
            title: 'Name',
            component: 'ListText',
            property: 'name'
          },
          {
            title: 'Price',
            component: 'ListText',
            property: 'price'
          },
          {
            title: 'Description',
            component: 'ListText',
            property: 'description'
          },
          {
            title: 'Category',
            component: 'ListCategory',
            property: 'category'
          }
        ]
      }
    }
  }
}
</script>
