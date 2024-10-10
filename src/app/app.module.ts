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
import { FormsModule } from "@angular/forms";
import { ProductService } from "./products/products.service";
import { ListProductComponent } from "./products/list-product/list-product.component";
import {
  HttpBackend,
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";

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
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })],
  ],

  providers: [ProductService, provideHttpClient(withInterceptorsFromDi())],

  bootstrap: [AppComponent],
})
export class AppModule {}
