import { Injectable } from '@angular/core';
import { Dulce } from '../models/candy.model';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  public Disponible: Dulce[] = [];
  constructor() { }

  public agregar(articulo : Dulce){
    this.Disponible.push(articulo)
    alert("Se ha registrado correctamente");
  }

  public obtener(){
    return this.Disponible;
  }
}