import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ClockComponent } from './clock/clock.component';
import { ProductsComponent } from './products.component';
import { ChatComponent } from './chat/chat.component';

export default [
  {
    path: 'all',
    component: ProductsComponent,
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
  {
    path: 'to-do',
    component: ToDoComponent,
  },
  {
    path: 'clock',
    component: ClockComponent,
  },
  {
    path: 'chat-app',
    component: ChatComponent,
  },
] as Routes;
