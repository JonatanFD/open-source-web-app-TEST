import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    MatSidenavModule,
    RouterLinkActive,
    RouterLink,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "open-source-web-app-TEST";

  routes = [
    {
      path: "/home",
      label: "Home",
      icon: "home",
    },
    {
      path: "/templates",
      label: "Templates",
      icon: "app_registration",
    },
    {
      path: "/favorites",
      label: "Favorites",
      icon: "favorite",
    },
    {
      path: "/explore",
      label: "Explore",
      icon: "explore",
    },
    {
      path: "/projects",
      label: "Projects",
      icon: "folder",
    },
    {
      path: "/design-lab",
      label: "Design Lab",
      icon: "brush",
    },
  ];
}
