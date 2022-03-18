import { DefaultValueAccessor } from "@angular/forms";
import { Dulce } from "./candy.model";

export class cliente {

  nombre:string;
  contra:string;
  email:string;
  carrito: Dulce[] = [];

  constructor (){}

  public agregar(articulo : Dulce){
    this.carrito.push(articulo)
    alert("Se ha registrado correctamente");
  }

  public obtener(){
    return this.carrito;
  }
}
