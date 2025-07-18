import { Component } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-angular',
  imports: [CdkAccordionModule, MatIconModule, CommonModule],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.scss',
  animations: [
    trigger('bodyExpansion', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('300ms ease', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease', style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class AngularComponent {
  items = [
    {
      title: '1. Angular Fundamentals',
      description: [
        'Angular CLI and Project Structure',
        'Modules, Components, and Templates',
        'Data Binding (Interpolation, Property, Event, Two-way)',
        'Directives (Structural and Attribute)',
        'Pipes (Built-in and Custom)',
      ],
    },
    {
      title: '2. TypeScript Essentials',
      description: [
        'Interfaces, Classes, and Types',
        'Decorators',
        'Generics and Advanced TypeScript Features',
      ],
    },
    {
      title: '3. Component Interaction',
      description: [
        'Input and Output Decorators',
        'ViewChild and ContentChild',
        'Services and Dependency Injection',
      ],
    },
    {
      title: '4. Routing and Navigation',
      description: [
        'Angular Router Basics',
        'Route Guards (CanActivate, CanDeactivate)',
        'Lazy Loading Modules',
        'Route Resolvers',
      ],
    },
    {
      title: '5. Forms',
      description: [
        'Template-driven Forms',
        'Reactive Forms',
        'Form Validation (Synchronous and Asynchronous)',
        'Custom Validators',
      ],
    },
    {
      title: '6. HTTP and APIs',
      description: [
        'HttpClient Module',
        'Making API Requests (GET, POST, PUT, DELETE)',
        'Interceptors',
        'Error Handling',
      ],
    },
    {
      title: '7. State Management',
      description: [
        'RxJS Observables and Operators',
        'Services for State Management',
        'Introduction to NgRx (if required)',
      ],
    },
    {
      title: '8. Change Detection and Performance',
      description: [
        'Change Detection Strategies',
        'OnPush Strategy',
        'TrackBy in ngFor',
        'Lazy Loading and Preloading Strategies',
      ],
    },
    {
      title: '9. Testing',
      description: [
        'Unit Testing Components and Services (Jasmine, Karma)',
        'End-to-End Testing (Protractor, Cypress)',
      ],
    },
    {
      title: '10. Styling and Theming',
      description: [
        'Angular Material and CDK',
        'Custom Themes',
        'Responsive Design',
      ],
    },
    {
      title: '11. Advanced Angular 20 Features',
      description: [
        'Standalone Components and APIs',
        'Signals and Reactivity Model (New in Angular 16+)',
        'Improved Hydration and Server-Side Rendering (SSR)',
        'Enhanced Dependency Injection Features',
        'Zone.js Optionality and Fine-tuned Change Detection',
      ],
    },
    {
      title: '12. Best Practices and Tooling',
      description: [
        'Code Organization and Folder Structure',
        'Linting and Formatting',
        'Performance Optimization',
        'Security Best Practices',
      ],
    },
    {
      title: '13. Migration and Upgrading',
      description: [
        'Upgrading from Previous Angular Versions',
        'Handling Deprecated APIs',
      ],
    },
  ];
  expandedIndex = 0;
}
