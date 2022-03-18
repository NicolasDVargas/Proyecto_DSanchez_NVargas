import { Component, OnInit } from '@angular/core';
import { Administrador } from 'src/app/models/admin.module';
import { Dulce } from 'src/app/models/candy.model';
import { cliente } from 'src/app/models/cliente.model';
import { AdminsService } from 'src/app/servicios/admins.service';
import { ClienteService } from 'src/app/servicios/clientes.service';

import { InventarioService } from 'src/app/servicios/inventario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public inventario: Dulce[] = [];
  public cliente:cliente;
  public admin:Administrador;
  public encontrado: boolean;


  constructor(public _InveService: InventarioService,_clienteService: ClienteService,_adminService: AdminsService) {
    this.inventario=_InveService.Disponible;
    

    var nomUsuario = localStorage.getItem('user');
    for(let cli of _clienteService.vertedero){
      if(cli.nombre==nomUsuario){
        this.cliente = new cliente();
        this.cliente=cli;
        this.encontrado=true;
      }
    }

    if(!this.encontrado){
      for(let adm of _adminService.administradores){
        if(adm.nombre==nomUsuario){
          this.admin = new Administrador();
          this.admin=adm;
          this.encontrado=true;
        }
      }
    }
  }

  ngOnInit(): void {
  }

  agregar(compra:Dulce){
    if(this.cliente){
      this.cliente.agregar(compra);
    }
  }
}
