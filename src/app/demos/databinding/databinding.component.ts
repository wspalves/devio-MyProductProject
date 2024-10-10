import { Component } from "@angular/core";

@Component({
  selector: "app-databinding",
  templateUrl: "./databinding.component.html",
  styles: ``,
})
export class DatabindingComponent {
  public counterClicks: number = 1;
  public urlImage: string =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png";

  addClick() {
    this.counterClicks++;
  }
}
