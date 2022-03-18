import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Administrador } from 'src/app/models/admin.module';
import { cliente } from 'src/app/models/cliente.model';
import { AdminsService } from 'src/app/servicios/admins.service';
import { ClienteService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {


  public Cliente: cliente = new cliente();
  public Admin:Administrador= new Administrador(); 
  public encontrado:boolean = false;
  constructor(public _clienteService: ClienteService,public router:Router, public _adminsService:AdminsService) { }

  ngOnInit(): void {
  }

  buscar(nombre:string,contra:string){
    for(let usu of this._clienteService.vertedero){
      if(usu.nombre==nombre && usu.contra==contra){
        this.router.navigateByUrl('./home');
        localStorage.setItem(usu.nombre, usu.contra);
        this.Cliente = new cliente();
        this.encontrado=true;
      }
    }

    for(let adm of this._adminsService.administradores){
      if(adm.nombre==nombre && adm.contra==contra){
        this.router.navigateByUrl('./home');
        localStorage.setItem(adm.nombre, adm.contra);
        this.Admin = new Administrador();
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
