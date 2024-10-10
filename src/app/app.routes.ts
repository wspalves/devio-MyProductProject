import { Routes } from "@angular/router";
import { HomeComponent } from "./navigator/home/home.component";
import { ContactComponent } from "./institutional/contact/contact.component";
import { AboutComponent } from "./institutional/about/about.component";
import { DatabindingComponent } from "./demos/databinding/databinding.component";
import { ListProductComponent } from "./products/list-product/list-product.component";

export const rootRouterConfig: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent },
  { path: "feature-binding", component: DatabindingComponent },
  { path: "products", component: ListProductComponent },
  { path: "products/:id", component: ListProductComponent },
];
