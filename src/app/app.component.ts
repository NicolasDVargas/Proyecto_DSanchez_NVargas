import { Component } from '@angular/core';
import { Administrador } from './models/admin.module';
import { Dulce, Tipo } from './models/candy.model';
import { AdminsService } from './servicios/admins.service';
import { InventarioService } from './servicios/inventario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto_DSanchez_NVargas';


  constructor(_adminService:AdminsService, _inventarioService: InventarioService){

    _adminService.agregar("Nicolas","12345");
    var dulce1 : Dulce = new Dulce("Caja de Pocky",Tipo.Importados,50,10000);
    _inventarioService.agregar(dulce1,true);
    var dulce2 : Dulce = new Dulce("Chocolatina jet",Tipo.Chocolate,50,250);
    _inventarioService.agregar(dulce2,true);
    var dulce3: Dulce = new Dulce("Cajita trident",Tipo.Chicles,50,5800);
    _inventarioService.agregar(dulce3,true);
    var dulce: Dulce = new Dulce("Ferrero Rocher x6",Tipo.Bombones,50,10000);
    _inventarioService.agregar(dulce,true);

    localStorage.clear();
  }
  
}
