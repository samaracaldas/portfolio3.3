import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const menuList = document.querySelector('.menu-list');

    if (menuList) {
      if (this.isMenuOpen) {
        menuList.classList.add('menu-open');
      } else {
        menuList.classList.remove('menu-open');
      }
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  closeMenuAndNavigateToAnchor(anchor: string) {
    this.isMenuOpen = false; // Fecha o menu
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Role suavemente até a âncora
    }
  }
  
}
