import { Component, OnInit } from "@angular/core";
import { ProductService } from "../products.service";
import { Product } from "../products";

@Component({
  selector: "app-product-dashboard",
  templateUrl: "./product-dashboard.component.html",
  styles: ``,
})
export class ProductDashboardComponent implements OnInit {
  constructor(private productService: ProductService) {}

  public products!: Product[];

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (error) => console.log("Error: " + error),
    });
  }

  changeStatus(event: Product) {
    event.active = !event.active;
  }
}
