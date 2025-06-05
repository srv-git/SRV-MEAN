import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { ToasterService } from '../services/toaster.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const toaster = inject(ToasterService);
  return next(req).pipe(
    catchError((err) => {
      if (err.status === 401) {
        // Handle 401 Unauthorized
        toaster.showError('Session expired!')
        router.navigate(['/login']);
      } else if (err.status === 403) {
        // You can redirect or show a forbidden message
        toaster.showError('forbidden!');
        // router.navigate(['/forbidden']);
      } else if (err.status === 404) {
        // You can redirect or show a not found message
        toaster.showError('Page not found!');
        // router.navigate(['/forbidden']);
      } else if (err.status === 500) {
        // Handle 500 Internal Server Error or other errors
        toaster.showError('500 - Internal Server Error!')
        // router.navigate(['/forbidden']);
      } else if(err.status !== 400){
        // Optionally handle other status codes or show a generic error
        toaster.showError('An unexpected error occurred.');
      }
      return throwError(() => err);
    })
  );
};