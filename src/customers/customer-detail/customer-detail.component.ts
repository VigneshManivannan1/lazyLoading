import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customerRecord: any;
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      var id = params['id'];
      this.getCustomer(id);
    });
  }

  getCustomer(id: any) {
    this.customerRecord = this.customerList.filter((x) => x.id == id)[0];
  }

  customerList: Array<any> = [
    { id: 100, name: 'test', city: 'Chennai', country: 'India' },
  ];

}
