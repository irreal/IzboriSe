import Login from './views/login.svelte'
import Layout from './views/layout.svelte'
import Elections from './views/elections.svelte'
import Resuls from './views/election/results.svelte';
import VotingPlaces from './views/election/votingPlaces.svelte';

const routes = [
    {
        name: '/',
        redirectTo: 'elections',
        component: Layout
    },
    { name: 'login', component: Login, layout: Layout },
    {
        name: 'elections', component: Elections, layout: Layout,
        nestedRoutes: [
            { name: 'results', component: Results },
            { name: 'votingPlaces', component: VotingPlaces }
        ]
    },
    // {
    //     name: 'admin',
    //     component: AdminLayout,
    //     onlyIf: { guard: userIsAdmin, redirect: '/login' },
    //     nestedRoutes: [
    //         { name: 'index', component: AdminIndex },
    //         {
    //             name: 'employees',
    //             component: '',
    //             nestedRoutes: [
    //                 { name: 'index', component: EmployeesIndex },
    //                 { name: 'show/:id', component: EmployeesShow }
    //             ]
    //         }
    //     ]
    // }
]
export { routes }