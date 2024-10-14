import { NgModule } from "@angular/core";
import { ProductDashboardComponent } from "./product-dashboard/product-dashboard.component";
import { CommonModule } from "@angular/common";
import { ProductRoutingModule } from "./product.route";
import { ListProductComponent } from "./list-product/list-product.component";
import { ProductCardDetail } from "../components/product-card-detail.component";
import { ProductCount } from "../components/product-count.component";

@NgModule({
  declarations: [
    ListProductComponent,
    ProductDashboardComponent,
    ProductCardDetail,
    ProductCount,
  ],
  imports: [CommonModule, ProductRoutingModule],
  exports: [ProductDashboardComponent],
  providers: [],
})
export class ProductModule {}
