import {AfterViewInit, Component, Input, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { User as UserModel } from '../../models/user.model';
import { Card as CardModel} from '../../models/card.model';
@Component({
  selector: 'app-table',
  imports: [CommonModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatGridListModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: [DatePipe]
})
export class TableComponent implements AfterViewInit {

  _data: UserModel[] | CardModel[] = [];
  @Input() set data(val: UserModel[] | CardModel[] ){
    if(this._data !== val){
      this._data = val;
      this.dataSource.data = val;
    }
  }
  @Input() showColumn!: string[];
  @Input() tableTitle!: string;
  @Input() tableDescription!: string;
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(readonly datePipe: DatePipe){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  /**
   * To apply filter
   * @param event {Event}
   * @returns {void}
   */
  applyFilter(event: Event): void {
    console.log('dd',event)
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /**
   * To format table fields values
   * @param element {any}
   * @param column {string}
   * @param i {number}
   * @returns {number | string | Date | null}
   */
  formatValueBasedOnColumn(element: any, column: string, i: number): number | string | Date | null {
    if(column === '_id'){
      return i + 1;
    } else if(column === 'createdAt' || column === 'updatedAt'){
      return this.formatDate(element[column]);
    }
    return element[column]; 
  }

  /**
   * To format table column header names
   * @param column {string}
   * @returns {string}
   */
  formatColumnName(column: string): string {
      const pipe = new TitleCasePipe();
    if(column === '_id'){
      return '#';
    } else if((column === 'createdAt' || column === 'updatedAt') && column){
        const matches = column.match(/([A-Z]?[^A-Z]*)/g);
        if (matches) {
          return pipe.transform(matches.slice(0, -1).join(' '));
        }
        return pipe.transform(column); 
    }
    return pipe.transform(column);
  }

  /**
   * To get 'MMM, yyyy' format of the date
   * @param date {Date | String}
   * @returns {string | null}
   */
  formatDate(date: Date | string): string | null {
    return this.datePipe.transform(date, 'MMM dd, yyyy');
  }

}