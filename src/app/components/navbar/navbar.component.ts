import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent {
  showMenu = false;
  faBars = faBars;

  constructor(public authService: AuthService) {}

  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }

  logout() {
    this.authService.logout();
  }

}
