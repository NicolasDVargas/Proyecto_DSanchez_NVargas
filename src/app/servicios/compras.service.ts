import { Injectable } from '@angular/core';
import { Dulce } from '../models/candy.model';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  public carrito: Dulce[] = [];
  constructor() { }

  public agregar(articulo : Dulce){
    this.carrito.push(articulo)
    alert("Se ha registrado correctamente");
  }

  public obtener(){
    return this.carrito;
  }

  public generarFactura(){
    
  }
}
