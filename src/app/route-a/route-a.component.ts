import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-route-a',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './route-a.component.html',
  styleUrls: ['./route-a.component.css'],
})
export class RouteAComponent {
  cols: any[] = [];
  tableData: any[] = [];

  constructor() {
    this.generateDummyData(10, 4); // 10 rows, 4 columns
  }

  generateDummyData(rows: number, cols: number) {
    const firstRow: any = {};
    const rawData: any[] = [];
    let textCount = 0;

    // Generate first row with text and numbers
    for (let i = 0; i < cols; i++) {
      if (i % 2 === 0) {
        firstRow[`col${i + 1}`] = `Text ${i + 1}`; // Text values
        textCount++;
      } else if (i === 1) {
        // text takes the value of "Date"
        firstRow[`col${2}`] = 'Date'; // Date text
      } else {
        firstRow[`col${i + 1}`] = Math.floor(Math.random() * 1000); // Number values
      }
    }

    rawData.push(firstRow);

    // Generate remaining rows with ID, Date, and Numbers
    for (let i = 1; i < rows; i++) {
      const row: any = {};
      for (let j = 0; j < cols; j++) {
        if (j === 0) {
          row[`col${j + 1}`] = `ID-${i + 100}`;
        } else if (j === 1) {
          row[`col${j + 1}`] = new Date(2025, 0, i + 1).toLocaleDateString();
        } else {
          row[`col${j + 1}`] = Math.floor(Math.random() * 1000);
        }
      }
      rawData.push(row);
    }

    // Calculate text percentage in the first row
    const textPercentage = (textCount / cols) * 100;

    // If at least 25% of the first row contains text, use it as headers
    if (textPercentage >= 25) {
      this.cols = Object.keys(firstRow).map((key, index) => ({
        field: key,
        header: firstRow[key], // Use first row values as headers
      }));
      this.tableData = rawData.slice(1); // Remove first row from data
    } else {
      this.cols = Object.keys(firstRow).map((key, index) => ({
        field: key,
        header: this.generateColumnName(index), // Default to A, B, C...
      }));
      this.tableData = rawData;
    }
  }

  generateColumnName(index: number): string {
    return String.fromCharCode(65 + index); // A, B, C, ...
  }
}
