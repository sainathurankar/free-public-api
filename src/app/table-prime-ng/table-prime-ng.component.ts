import { Component, OnInit, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { Customer, Representative } from '../customers';
import { CustomersService } from '../customers.service';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ApiDetail } from '../ApiDetail';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-table-prime-ng',
  templateUrl: './table-prime-ng.component.html',
  styleUrls: ['./table-prime-ng.component.css'],
})
export class TablePrimeNgComponent implements OnInit {
  customers: Customer[] = [];
  dataSource: ApiDetail[] = [];
  dataLoaded: boolean = false;
  fakeDataSource: any = ['', '', '', '', '', '', '', '', '', '', ''];

  first = 0;

  rows = 10;

  constructor(
    private customerService: CustomersService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService.getApiDetails().subscribe((api) => {
      this.dataSource = api.entries;
      this.dataLoaded = true;
    });
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.dataSource
      ? this.first === this.dataSource.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.dataSource ? this.first === 0 : true;
  }
  clear(table: Table) {
    table.clear();
  }
  filter(dt1:any,event:any){
    dt1.filterGlobal(event.target.value, 'contains');
  }
}
