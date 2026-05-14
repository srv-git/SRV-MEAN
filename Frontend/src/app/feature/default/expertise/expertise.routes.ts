import { Routes } from '@angular/router';
import { FullCalendarComponent } from './full-calendar/full-calendar.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MapComponent } from './map/map.component';
import { ComplexFormComponent } from './complex-form/complex-form.component';
import { ExpertiseComponent } from './expertise.component';

export default [
  {
    path: 'all',
    component: ExpertiseComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'data-table',
    component: DataTableComponent,
  },
  {
    path: 'full-calendar',
    component: FullCalendarComponent,
  },
  {
    path: 'complex-form',
    component: ComplexFormComponent,
  },
] as Routes;
