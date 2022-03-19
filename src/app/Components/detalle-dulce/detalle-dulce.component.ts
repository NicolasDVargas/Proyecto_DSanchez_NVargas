import { Component, Input, OnInit } from '@angular/core';
import { Dulce } from 'src/app/models/candy.model';
import { InventarioService } from 'src/app/servicios/inventario.service';

@Component({
  selector: 'app-detalle-dulce',
  templateUrl: './detalle-dulce.component.html',
  styleUrls: ['./detalle-dulce.component.css']
})
export class DetalleDulceComponent implements OnInit {

  public dulce:Dulce=new Dulce;
  
  constructor(public _inventService:InventarioService) { 
    this.dulce=_inventService.buscar;
  }

  ngOnInit(): void {
  }

  editar(){

  }

  eliminar(){
    
  }
}
