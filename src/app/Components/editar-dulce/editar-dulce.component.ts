import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dulce } from 'src/app/models/candy.model';
import { InventarioService } from 'src/app/servicios/inventario.service';

@Component({
  selector: 'app-editar-dulce',
  templateUrl: './editar-dulce.component.html',
  styleUrls: ['./editar-dulce.component.css']
})
export class EditarDulceComponent implements OnInit {

  public dulce:Dulce = new Dulce;
  constructor(public _inventService:InventarioService, public router:Router) { }

  ngOnInit(): void {
  }

  Editar(){
    this._inventService.editar(this.dulce);
    this._inventService.buscar=this.dulce;
    this.router.navigateByUrl('./inventario')
  }

  cancelar(){
    this.router.navigateByUrl('./inventario');
    localStorage.clear();
  }

}
