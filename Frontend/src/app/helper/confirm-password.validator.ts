import { FormGroup, ValidationErrors } from '@angular/forms';

export function checkPasswords(controlName: string, matchingControlName: string) {
  return (group: FormGroup): ValidationErrors | null => {
    const control = group.get(controlName);
    const matchingControl = group.get(matchingControlName);
    if (!control || !matchingControl) {
      return null;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ notSame: true });
      return { notSame: true };
    } else {
      // Clear the error if passwords match
      if (matchingControl.hasError('notSame')) {
        matchingControl.setErrors(null);
      }
      return null;
    }
  };
}

