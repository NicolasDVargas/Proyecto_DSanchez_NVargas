import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cliente } from 'src/app/models/persona/persona.model';
import { ClienteService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  public Cliente: cliente = new cliente();
  constructor(public _clienteService: ClienteService, public router:Router) { }

  ngOnInit(): void {
  }

  listo(){
    this._clienteService.agregar(this.Cliente);
    localStorage.setItem(this.Cliente.nombre, this.Cliente.email);
    this.Cliente = new cliente();
    this.router.navigateByUrl('./home');
  }

  cancelar(){
    this.router.navigateByUrl('');
    localStorage.clear();
  }
}
