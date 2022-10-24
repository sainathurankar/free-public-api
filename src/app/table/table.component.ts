import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../services/api.service';
import { ApiDetail } from '../ApiDetail';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  dataSource!: MatTableDataSource<ApiDetail>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = [
    'API',
    'Description',
    'Auth',
    'HTTPS',
    'Cors',
    'Link',
    'Category',
  ];

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getApiDetails().subscribe((data) => {
      console.log(data.entries);
      this.dataSource = new MatTableDataSource<ApiDetail>(data.entries);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

