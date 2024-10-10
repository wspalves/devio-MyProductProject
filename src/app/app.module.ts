import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./navigator/menu/menu.component";
import { HomeComponent } from "./navigator/home/home.component";
import { FooterComponent } from "./navigator/footer/footer.component";
import { AboutComponent } from "./institutional/about/about.component";
import { ContactComponent } from "./institutional/contact/contact.component";
import { RouterModule } from "@angular/router";
import { rootRouterConfig } from "./app.routes";
import { DatabindingComponent } from './demos/databinding/databinding.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    DatabindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
