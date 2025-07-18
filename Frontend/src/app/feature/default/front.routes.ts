import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { ProductsComponent } from './products/products.component';
import { DefaultLayoutComponent } from '../../layout/default-layout/default-layout.component';

export default [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'expertise', component: ExpertiseComponent },
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products.routes').then((m) => m.default),
      },
    ],
  },
] as Routes;
