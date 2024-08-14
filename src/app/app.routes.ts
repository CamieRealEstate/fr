import { Route } from '@angular/router';

import { AboutComponent, HomeComponent, LayoutComponent, RegionsComponent } from '../lib';

export const appRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'listing',
        component: LayoutComponent,
    },
    {
        path: 'listing/:id',
        component: LayoutComponent,
    },
    {
        path: 'regions',
        component: RegionsComponent,
    },
];
