import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioGuard implements CanActivate {
  canActivate(){

    var usuario = localStorage.getItem('usuario');
    if(usuario==null){
      return false;
    }
    return true;
  }

  canDeactivate(){
    var usuario = localStorage.getItem('usuario');
    if(usuario==null){
      return false;
    }
    return true;
  }
}
