
const settings = {
    pageTitle: 'Kurslar',
    routes: {
        index: '/courses',
        create: '/courses/create',
        update: '/courses/update/'
    },
    apis: {
        list: '/lms/courses'
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
    ]
}
export default settings