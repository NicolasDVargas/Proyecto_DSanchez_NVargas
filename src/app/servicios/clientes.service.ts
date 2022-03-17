import { Injectable } from '@angular/core';
import { cliente } from '../models/cliente.model';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public vertedero: cliente[] = [];
  constructor() { }

  public agregar(Usuario : cliente){
    this.vertedero.push(Usuario)
    alert("Se ha registrado correctamente");
  }

  public obtener(){
    return this.vertedero;
  }
}
