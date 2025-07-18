import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  getCurrentYear(): number {
    let currentDate = new Date();
    return currentDate.getFullYear();
  }
}
