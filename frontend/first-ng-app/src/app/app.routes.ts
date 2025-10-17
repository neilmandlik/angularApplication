import { Routes } from '@angular/router';
import { Master } from './components/master/master';
import {Employee} from './components/employee/employee';
import { Client } from './components/client/client';
import { ClientProject } from './components/client-project/client-project';
import { Login } from './components/login/login';
import { Layout } from './components/layout/layout';
import { Counter } from './components/counter/counter';
import { Todos } from './components/todos/todos';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login,
    },
    {
        path: 'counter',
        component: Counter
    },
    {
        path: 'todo',
        component: Todos
    },
    {
        path: 'layout',
        component: Layout,
        children: [
            {
                path: '',
                redirectTo: 'master',
                pathMatch: 'full'
            },
            {
                path: 'master',
                component: Master,
            },
            {
                path: 'employee',
                component: Employee,
            },
            {
                path: 'client',
                component: Client,
            },
            {
                path: 'client-project',
                component: ClientProject,
            }
        ]
    },
    
];
