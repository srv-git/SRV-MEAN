import { Component } from '@angular/core';
import { ToasterService } from '../../../../core/services/toaster.service';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  currentNumber: string = '';
  constructor(private readonly toaster: ToasterService) {}
  /**
   * @func to show the selected key value
   * @param {string} key
   * @returns {void}
   */
  getNumber(key: string): void {
    console.log(key);
    if (this.currentNumber === '0') {
      this.currentNumber = key;
    } else {
      this.currentNumber += key;
    }
  }

  /**
   * @func to reset the calculator value
   * @returns {void}
   */
  clear(): void {
    console.log('clear');
    this.currentNumber = '0';
  }

  /**
   * @func to remove the last value
   * @returns {void}
   */
  backSpace(): void {
    if (
      this.currentNumber &&
      this.currentNumber.length > 0 &&
      Number(this.currentNumber) !== 0
    ) {
      this.currentNumber = this.currentNumber?.slice(0, -1) || '0';
    } else {
      this.clear();
    }
  }

  /**
   * @func to perform the operation based on selection
   * @param {string} operation
   * @returns {void}
   */
  getOperation(operation: string): void {
    console.log(operation);
    this.toaster.showInfo('Coming soon!');
  }

  /**
   * @func to add a decimal
   * @returns {void}
   */
  getDecimal(): void {
    console.log('getDecimal');
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }
}
