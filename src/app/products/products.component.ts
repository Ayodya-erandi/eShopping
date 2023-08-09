import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products = [
  
    {id:1, name:'Minimalists Analog Watch', price: '109', color:'Black', available:'Availble', image:'assets/products/Minimalists Analog Watch.jpg'},
    {id:2, name:'Hisense Ultra HD Smart TV', price: '3339', color:'Black', available:'Availble', image:'assets/products/Hisense Ultra HD Smart TV.jpg'},
    {id:3, name:'APPLE iPhone 12', price: '1855', color:'Black', available:'Not Availble', image:'assets/products/APPLE iPhone 12.jpg'},
    {id:4, name:'LG Fully Automatic Washing Machine', price: '1765', color:'White', available:'Availble', image:'assets/products/LG Fully Automatic Washing Machine.jpg'},
    {id:5, name:'LG Refrigerator with Door Cooling', price: '2815', color:'White', available:'Not Availble', image:'assets/products/LG Refrigerator with Door Cooling.jpg'},
    {id:6, name:'Dell Inspiron one 27 Ryzen 7', price: '2145', color:'White', available:'Availble', image:'assets/products/Dell Inspiron one 27 Ryzen 7.jpg'},

  ];

}
