import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  pages = [
    { label: 'Home',path:'/'},
    { label: 'Projects',path:'/projects'},
    { label: 'Skills',path:'/skills'},
  ];

  open = signal(false);

  toggle() {
    this.open.set(!this.open());
  }

  close() {
    this.open.set(false);
  }
}
