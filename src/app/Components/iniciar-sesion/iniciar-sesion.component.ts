import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Administrador } from 'src/app/models/admin.module';
import { cliente } from 'src/app/models/cliente.model';
import { AdminsService } from 'src/app/servicios/admins.service';
import { ClienteService } from 'src/app/servicios/clientes.service';
import Swal from 'sweetalert2';


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
        Swal.fire('Bienvenido','Has iniciado sesión exitosamente!','success')
        localStorage.setItem('user', usu.nombre);
        this.Cliente = new cliente();
        this._clienteService.actual=usu;
        this.router.navigateByUrl('./home');
        this.encontrado=true;
      }
    }

    for(let adm of this._adminsService.administradores){
      if(adm.nombre==nombre && adm.contra==contra){
        Swal.fire('Bienvenido señor@ '+ nombre,'Has iniciado sesión exitosamente como administrador@','success')
        localStorage.setItem('user', adm.nombre);
        this.Admin = new Administrador();
        this._adminsService.admin=adm;
        this.router.navigateByUrl('./home');
        this.encontrado=true;
      }
    }

    if(!this.encontrado){
      Swal.fire({  
        icon: 'error',  
        title: 'Oops...',  
        text: 'Something went wrong!',  
      }) 
    }
  }

  cancelar(){
    this.router.navigateByUrl('');
    localStorage.clear();
  }

  registrar(Cliente:cliente){

    for(let cli of this._clienteService.vertedero){
      if(cli.nombre==Cliente.nombre){
        Swal.fire({  
          icon: 'error',  
          title: 'Oops...',  
          text: 'Ese ya existe!',  
        }) 
      }else{
        this._clienteService.agregar(this.Cliente);
        localStorage.setItem('user', this.Cliente.nombre);
        this.Cliente = new cliente();
        this._clienteService.actual=cli;
        this.router.navigateByUrl('./home');
      }
    }
  }

}
