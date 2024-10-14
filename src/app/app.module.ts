import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./institutional/about/about.component";
import { ContactComponent } from "./institutional/contact/contact.component";
import { DatabindingComponent } from "./demos/databinding/databinding.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductService } from "./products/products.service";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { RegisterFormGroupComponent } from "./register/register-form-group.component";
import { RegisterComponent } from "./register/register.component";
import { NgxBrazil } from "ngx-brazil";
import { NavigationModule } from "./navigator/navigation.module";
import { ProductModule } from "./products/product.module";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    DatabindingComponent,    
    RegisterFormGroupComponent,
    RegisterComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NavigationModule,
    ReactiveFormsModule,
    NgxBrazil,
    AppRoutingModule,
    ProductModule,
  ],

  providers: [ProductService, provideHttpClient(withInterceptorsFromDi())],

  bootstrap: [AppComponent],
})
export class AppModule {}
