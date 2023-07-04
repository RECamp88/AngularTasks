import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: {name:string, description: string, price:number}[] = [
    {name: "Rice", description: "Grain, 5lbs", price: 4.99 },
    {name: "Apple", description: "Fruit, per lb", price: 1.99 },
    {name: "Peas", description: "Frozen Vegetable, each", price: 1.49 },
    {name: "Whole Wheat Bread", description: "Bread, per loaf", price: 3.49 },
    {name: "Chicken Noodle Soup", description: "Canned Goods, per can", price: 2.59 },
    {name: "Cabbage", description: "Vegetable, per lb", price: .49 },
    {name: "Center Cut Pork Chops", description: "Meat, per lb", price: 10.79 },
    {name: "Ground Beef", description: "Meat, per lb", price: 8.49 },
    {name: "Peppermint Ice Cream", description: "Dessert, 1/2 gallon", price: 4.99 },
    {name: "Paper Towels", description: "Home Goods, 4 per package", price: 6.49 },
  ]
}
