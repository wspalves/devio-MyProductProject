import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { ProductService } from "../products.service";
import { Product } from "../products";
import { fromEvent, Observable } from "rxjs";
import { ProductCountComponent } from "../../components/product-count.component";
import { ProductCardDetail } from "../../components/product-card-detail.component";

@Component({
  selector: "app-product-dashboard",
  templateUrl: "./product-dashboard.component.html",
  styles: ``,
})
export class ProductDashboardComponent implements OnInit, AfterViewInit {
  @ViewChild(ProductCountComponent, { static: false })
  counter?: ProductCountComponent;
  @ViewChild("test", { static: false }) message?: ElementRef;
  @ViewChildren(ProductCardDetail) buttons?: QueryList<ProductCardDetail>;

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

  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log("objeto do contador", this.counter?.products);
    }, 1000);

    let clickMessage: Observable<any> = fromEvent(
      this.message?.nativeElement,
      "click"
    );

    clickMessage.subscribe(() => {
      alert("Text clicked!");
      return;
    });

    setTimeout(() => {
      this.buttons?.forEach((p) => {
        console.log(p.product);
      });
    }, 1000);
  }

  changeStatus(event: Product) {
    event.active = !event.active;
  }
}
