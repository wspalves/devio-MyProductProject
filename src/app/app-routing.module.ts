import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./navigator/home/home.component";
import { ContactComponent } from "./institutional/contact/contact.component";
import { AboutComponent } from "./institutional/about/about.component";
import { DatabindingComponent } from "./demos/databinding/databinding.component";
import { ListProductComponent } from "./products/list-product/list-product.component";
import { RegisterComponent } from "./register/register.component";
import { NgModule } from "@angular/core";
import { NotFoundComponent } from "./navigator/not-found/not-found.component";

const rootRouterConfig: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent },
  { path: "feature-binding", component: DatabindingComponent },
  {
    path: "products",
    loadChildren: () =>
      import("./products/product.module").then((m) => m.ProductModule),
  },
  { path: "products/:id", component: ListProductComponent },
  { path: "register", component: RegisterComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
