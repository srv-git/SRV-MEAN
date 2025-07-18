import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

const staticConfig = {
  positionClass: 'toast-bottom-center',
  preventDuplicates: true,
};

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  constructor(readonly toastr: ToastrService) {}

  showError(messageTitle: string, messageDescription?: string, config?: any) {
    this.toastr.error(messageTitle, messageDescription, {
      ...staticConfig,
      ...config,
    });
  }

  showSuccess(messageTitle: string, messageDescription?: string, config?: any) {
    this.toastr.success(messageTitle, messageDescription, {
      ...staticConfig,
      ...config,
    });
  }

  showInfo(messageTitle: string, messageDescription?: string, config?: any) {
    this.toastr.info(messageTitle, messageDescription, {
      ...staticConfig,
      ...config,
    });
  }

  showWarning(messageTitle: string, messageDescription?: string, config?: any) {
    this.toastr.warning(messageTitle, messageDescription, {
      ...staticConfig,
      ...config,
    });
  }
}
