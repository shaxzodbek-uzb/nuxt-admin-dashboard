const settings = {
    pageTitle: 'Foydalanuvchilar',
    routes: {
        create: '/users/create',
        update: '/users/update/'
    },
    apis: {
        list: '/user/users'
    },
    headers: [
        {
            title: 'Name',
            component: 'ListProfile',
            property: 'name'
        },
        {
            title: 'Title',
            component: 'ListAddress',
            property: 'title'
        },
        {
            title: 'Status',
            component: 'ListStatus',
            property: 'status'
        },
        {
            title: 'Role',
            component: 'ListText',
            property: 'role'
        }
    ]
}
export default settings