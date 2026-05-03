import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  pages = [
    { label: 'Home'},
    { label: 'Projects'},
    { label: 'Skills'},
  ];

  open = signal(false);

  toggle() {
    this.open.set(!this.open());
  }

  close() {
    this.open.set(false);
  }
}
