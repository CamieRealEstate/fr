import { Route } from '@angular/router';

import { AboutComponent, DetailComponent, HomeComponent, LayoutComponent } from '../lib';

export const appRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'listing/detail',
        component: DetailComponent,
        pathMatch: 'full'
    },
    {
        path: 'listing',
        component: LayoutComponent,
        pathMatch: 'full'
    },
];
