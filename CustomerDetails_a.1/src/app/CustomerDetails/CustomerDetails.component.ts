import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomerDTO } from 'src/CustomerDTO/CustomerDTO';
import { CustemerServices } from '../CustomerService/Custemer.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-CustomerDetails',
  templateUrl: './CustomerDetails.component.html',
  styleUrls: ['./CustomerDetails.component.css'],
})
export class CustomerDetailsComponent implements OnInit {
  public customerList!: CustomerDTO[];
  constructor(public customerService: CustemerServices) {}
  // @Input() item = '';

  // items = ['item1', 'item2', 'item3', 'item4'];

  // addItem(newItem: string) {
  //   this.items.push(newItem);
  // }

  greet(event: any) {
    alert('hello Swalih' + event);
  }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((data: any[]) => {
      this.customerList = data;
    });
  }
}
