import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage {
  constructor(private router: Router) {}

  addUsuarios() {
    this.router.navigate(['add-usuarios']);
  }
}
