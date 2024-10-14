import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Product } from "../products/products";

@Component({
  selector: "product-card-detail",
  templateUrl: "product-card-detail.component.html",
})
export class ProductCardDetail implements OnInit {
  @Input()
  product!: Product;

  @Output()
  status: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}

  sendEvent(): void {
    this.status.emit(this.product);
  }
}
