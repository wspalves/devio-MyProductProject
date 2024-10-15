import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [FooterComponent, HomeComponent, MenuComponent, NotFoundComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, HomeComponent, MenuComponent],
  providers: [],
})
export class NavigationModule {}
