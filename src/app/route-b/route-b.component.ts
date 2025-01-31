import { Component } from '@angular/core';
import { TableModule } from 'primeng/table'; // ✅ Import PrimeNG Table
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-route-b',
  standalone: true,
  imports: [CommonModule, TableModule], // ✅ Import TableModule Here
  templateUrl: './route-b.component.html',
  styleUrls: ['./route-b.component.css'],
})
export class RouteBComponent {
  cols: any[] = [];
  tableData: any[] = [];

  constructor() {
    this.generateRandomTable(10, 3);
  }

  generateRandomTable(rows: number, cols: number) {
    this.cols = Array.from({ length: cols }, (_, i) => ({
      field: `col${i + 1}`,
      header: this.generateColumnName(i),
    }));

    this.tableData = Array.from({ length: rows }, () => {
      return this.cols.reduce((acc: any, col, index: number) => {
        acc[col.field] =
          index === 1 ? 'Random Text' : Math.floor(Math.random() * 100);
        return acc;
      }, {});
    });
  }

  generateColumnName(index: number): string {
    return String.fromCharCode(65 + index); // A, B, C...
  }
}
