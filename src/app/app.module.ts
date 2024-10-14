import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
registerLocaleData(localePt);

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./navigator/menu/menu.component";
import { HomeComponent } from "./navigator/home/home.component";
import { FooterComponent } from "./navigator/footer/footer.component";
import { AboutComponent } from "./institutional/about/about.component";
import { ContactComponent } from "./institutional/contact/contact.component";
import { RouterModule } from "@angular/router";
import { rootRouterConfig } from "./app.routes";
import { DatabindingComponent } from "./demos/databinding/databinding.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductService } from "./products/products.service";
import { ListProductComponent } from "./products/list-product/list-product.component";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { RegisterFormGroupComponent } from "./register/register-form-group.component";
import { RegisterComponent } from "./register/register.component";
import { NgxBrazil } from "ngx-brazil";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    DatabindingComponent,
    ListProductComponent,
    RegisterFormGroupComponent,
    RegisterComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBrazil,

    [RouterModule.forRoot(rootRouterConfig, { useHash: false })],
  ],

  providers: [ProductService, provideHttpClient(withInterceptorsFromDi())],

  bootstrap: [AppComponent],
})
export class AppModule {}
