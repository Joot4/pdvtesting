import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-usuarios',
  templateUrl: './add-usuarios.page.html',
  styleUrls: ['./add-usuarios.page.scss'],
})
export class AddUsuariosPage implements OnInit {
  constructor(private router: Router) {}
  id: boolean = false;
  nome: string = '';
  email: string = '';
  usuario: string = '';
  senha: string = '';
  nivel: string = '';

  ngOnInit() {}

  backToUser() {
    this.router.navigate(['usuarios']);
  }

  cadastrar() {}

  editar() {}
}
