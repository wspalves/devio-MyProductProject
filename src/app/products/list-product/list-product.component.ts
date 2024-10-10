import { Component, OnInit } from "@angular/core";
import { Product } from "../products";
import { ProductService } from "../products.service";

@Component({
  selector: "app-list-product",
  templateUrl: "./list-product.component.html",
  styles: ``,
})
export class ListProductComponent implements OnInit {
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
}
