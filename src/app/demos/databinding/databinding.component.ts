import { Component } from "@angular/core";

@Component({
  selector: "app-databinding",
  templateUrl: "./databinding.component.html",
  styles: ``,
})
export class DatabindingComponent {
  public name: string = "";
  public counterClicks: number = 0;

  public urlImage: string =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png";

  addClick() {
    this.counterClicks++;
  }

  resetClicks() {
    this.counterClicks = 0;
  }

  KeyUp(event: any) {
    this.name = event.target.value;
  }
}
