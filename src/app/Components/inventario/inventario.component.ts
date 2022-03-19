import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Dulce } from 'src/app/models/candy.model';
import { InventarioService } from 'src/app/servicios/inventario.service';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  public nombreEleg:string;
  @Output() dulce: EventEmitter<Dulce>= new EventEmitter<Dulce>();


  constructor(public _inventarioService: InventarioService, public route:Router) { }

  ngOnInit(): void {
  }

  detalles(dulce:Dulce){
    this._inventarioService.buscar=dulce;
    this.route.navigateByUrl("./DetalleDulce");
  }
  agregarNuevo(){
    this.route.navigateByUrl("./nuevoDulce");
  }

}
