import Login from './views/login.svelte'
import Layout from './views/layout.svelte'
import Elections from './views/elections.svelte'
import Results from './views/election/results.svelte';
import VotingPlaces from './views/election/votingPlaces.svelte';
import Stakeholders from './views/election/stakeholders.svelte';

const routes = [
    {
        name: '/',
        redirectTo: 'election/jM95Y7aZAkG6b92kE75s',
        component: Layout
    },
    { name: 'login', component: Login, layout: Layout },
    {
        name: 'election/:electionId/', component: Elections, layout: Layout,
        nestedRoutes: [
            { name: 'results', component: Results },
            { name: 'votingplaces', component: VotingPlaces },
            { name: 'stakeholders', component: Stakeholders }
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