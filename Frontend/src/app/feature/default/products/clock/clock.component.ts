import { NgStyle } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { interval, Observable, repeat, take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-clock',
  imports: [NgStyle, MatButtonModule, MatIconModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss',
})
export class ClockComponent {
  secondDegree: number = 0;
  totalMinute: number = 0;
  minuteDegree: number = 0;
  totalHour: number = 0;
  hourDegree: number = 0;
  timeSpeed: number = 1000;
  isFirstTick: boolean = true;
  destroyRef = inject(DestroyRef);
  myObservable: Observable<number>;

  constructor() {
    this.myObservable = interval(this.timeSpeed);
  }

  ngOnInit() {
    this.myObservable
      .pipe(take(60), repeat(), takeUntilDestroyed(this.destroyRef))
      .subscribe((value: number) => {
        this.setSecond(value);
      });
  }

  /**
   * @func to handle second
   * @param {number} sec
   * @returns {void}
   */
  setSecond(sec: number): void {
    this.secondDegree = sec * 6;
    if (sec === 0) {
      if (!this.isFirstTick) {
        this.setMinute(sec);
      } else {
        this.isFirstTick = false;
      }
    }
  }

  /**
   * @func to handle minute
   * @param {number} sec
   * @returns {void}
   */
  setMinute(sec: number): void {
    if (this.totalMinute === 59) {
      this.totalHour += 1;
      this.totalMinute = 0;
      this.minuteDegree = 0;
    } else {
      this.totalMinute += 1;
      this.minuteDegree = this.totalMinute * 6;
    }
    this.setHour();
  }

  /**
   * @func to handle hours
   * @returns {void}
   */
  setHour(): void {
    if (this.totalHour === 12) {
      this.totalHour = 0;
      this.hourDegree = 0;
    } else {
      this.hourDegree = this.totalHour * 30 + this.totalMinute / 2;
    }
  }
}
