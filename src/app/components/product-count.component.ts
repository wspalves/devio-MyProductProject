import { Component, Input, OnInit } from "@angular/core";
import { Product } from "../products/products";

@Component({
  selector: "product-count",
  template: `
    <div>
      <h3>Produtos</h3>
      <div>
        Produtos Ativos: {{ countActive() }} no total de
        {{ products?.length }} produtos <br /><br />
      </div>
    </div>
  `,
})
export class ProductCountComponent implements OnInit {
  @Input()
  products?: Product[];

  countActive(): number {
    if (!this.products) return 0;

    return this.products.filter((product: Product) => product.active).length;
  }

  ngOnInit(): void {}
}
