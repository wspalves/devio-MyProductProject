import { RouterModule, Routes } from "@angular/router";
import { ProductDashboardComponent } from "./product-dashboard/product-dashboard.component";
import { NgModule } from "@angular/core";

import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
registerLocaleData(localePt);

const productRouterConfig: Routes = [
  { path: "", component: ProductDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(productRouterConfig)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
