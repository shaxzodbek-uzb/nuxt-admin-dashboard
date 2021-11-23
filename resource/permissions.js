
const settings = {
    pageTitle: 'Ruxsatnomalar',
    routes: {
        index: '/permissions',
        create: '/permissions/create',
        update: '/permissions/update/'
    },
    apis: {
        list: '/user/permissions'
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
    ],
    form: [
        {
            title: 'Name',
            component: 'FormInput',
            property: 'name'
        }
    ]
}
export default settings