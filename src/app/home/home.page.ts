import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  anadir()
  {
    this.router.navigate(['/anadir']);
  }

  eliminar()
  {
    this.router.navigate(['/anadir']);
  }

  stock()
  {
    this.router.navigate(['/stock']);
  }
  register() {
    this.router.navigate(['/register']);
  } //end of register
  login() {
    this.router.navigate(['/login']);
  } 
}
