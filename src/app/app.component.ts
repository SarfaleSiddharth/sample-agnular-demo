import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "upwork-demo";
  isVisible = true;
  toggleStatus() {
    this.isVisible = !this.isVisible;
  }
}
