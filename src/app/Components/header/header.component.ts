import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  show:boolean= false;

  constructor(public router: Router,public _clienteService:ClienteService) {
    var nomUsuario = localStorage.getItem('user');
    if(nomUsuario!=null){
      for(let cli of this._clienteService.vertedero){
        if(cli.nombre==nomUsuario){
          this.show=false;
          break;
        }
      }
      this.show=true;
    }else{
      this.show=false;
    }   
   }

  ngOnInit(): void {
  }
  home(){
    this.router.navigateByUrl('./home')
  }
  inventario(){
  this.router.navigateByUrl('./inventario')
  }
  cerrarSesion(){
    localStorage.clear();
    this.router.navigateByUrl('');
  }

 

}
