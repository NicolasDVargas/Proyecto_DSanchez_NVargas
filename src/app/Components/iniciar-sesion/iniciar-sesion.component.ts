import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cliente } from 'src/app/models/persona/persona.model';
import { ClienteService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {


  public Cliente: cliente = new cliente();
  public encontrado:boolean = false;
  constructor(public _clienteService: ClienteService,public router:Router) { }

  ngOnInit(): void {
  }

  buscar(nombre:string,contra:string){
    for(let usu of this._clienteService.vertedero){
      if(usu.nombre==nombre && usu.contra==contra){
        this.router.navigateByUrl('./home');
        localStorage.setItem(usu.nombre, usu.email);
        this.Cliente = new cliente();
        this.encontrado=true;
      }
    }
    if(!this.encontrado){
      alert("Usuario o contraseña invalido intente de nuevo");
    }
  }

  cancelar(){
    this.router.navigateByUrl('');
    localStorage.clear();
  }

}
