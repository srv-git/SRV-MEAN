import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { map, Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MONTHS_NAMES, TODO_DATA } from '../../../../utils/globalConstants';
import { MatTabsModule } from '@angular/material/tabs';
import { ToasterService } from '../../../../core/services/toaster.service';
interface ToDoItem {
  title: string;
  description: string;
  date: string;
  isCompleted?: boolean;
}
@Component({
  selector: 'app-to-do',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatCheckboxModule,
    AsyncPipe,
    MatTabsModule,
  ],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss',
})
export class ToDoComponent implements OnInit {
  monthNames: string[] = MONTHS_NAMES;
  currentDate!: string;
  filteredTaskItems$!: Observable<ToDoItem[]>;
  taskItems$: Observable<ToDoItem[]> = of(TODO_DATA);
  filterType: string = '';

  constructor(private readonly toaster: ToasterService) {}

  ngOnInit() {
    this.handleTaskFilter(this.filterType);
  }

  handleTaskFilter(type: string): void {
    this.filterType = type;
    switch (type) {
      case 'completed': {
        this.filteredTaskItems$ = this.taskItems$.pipe(
          map((items) => items.filter((item: ToDoItem) => item.isCompleted))
        );
        break;
      }
      case 'pending': {
        this.filteredTaskItems$ = this.taskItems$.pipe(
          map((items) => items.filter((item: ToDoItem) => !item.isCompleted))
        );
        break;
      }
      default: {
        this.filteredTaskItems$ = this.taskItems$;
        break;
      }
    }
  }

  handleAddTask(): void {
    this.toaster.showInfo('Coming soon!');
  }

  handleDeleteTask(): void {
    this.toaster.showInfo('Coming soon!');
  }

  handleEditTask(): void {
    this.toaster.showInfo('Coming soon!');
  }
}
