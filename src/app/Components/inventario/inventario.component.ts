import { Component, OnInit } from '@angular/core';
import { InventarioService } from 'src/app/servicios/inventario.service';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  constructor(public _inventarioService: InventarioService) { }

  ngOnInit(): void {
  }

}
