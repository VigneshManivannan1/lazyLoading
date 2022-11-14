import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  customerList: Array<any> = [
    {"id":100,"name":"test","city":"Chennai","country":"India"}
  ]

}
