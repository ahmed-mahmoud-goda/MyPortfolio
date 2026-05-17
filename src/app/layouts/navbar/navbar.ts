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
    { label: 'Education', path:'/education'},
    { label: 'Skills',path:'/skills'},
    { label: 'Projects',path:'/projects'},
    { label: 'Certificates', path:'/certificates'}
  ];

  open = signal(false);

  toggle() {
    this.open.set(!this.open());
  }

  close() {
    this.open.set(false);
  }
}
