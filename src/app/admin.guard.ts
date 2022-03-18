import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { cliente } from './models/cliente.model';
import { ClienteService } from './servicios/clientes.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  public _clienteService: ClienteService;
  public encontrado:boolean;

  canActivate(){
    var usuario = localStorage.getItem('usuario');

    if(usuario==null){
      alert("Debe registrarse para tener acceso a esta parte de la tienda")
      return false;
    }else{
      for(let usu of this._clienteService.vertedero){
        if(usu.nombre==usuario){
          alert("usted no tiene permiso de entrar a esto");
          return false;          
        }
      }
    }      
      return true;
    }
}