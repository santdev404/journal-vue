export default {

    name: 'daybook',
    component: () => import(/* webpackChunkName: "about" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/daybook/views/NoEntrySelected'),

        },
        {
            path: ':id', // route /daybook/:id -> /daybook/1
            name: 'entry',
            component: () => import(/* webpackChunkName: "daybook-no-entry" */  '@/modules/daybook/views/EntryView'),
            props: ( route ) =>{
                return {
                    id: route.params.id
                }
            }
        }
    ]

}