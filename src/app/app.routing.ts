import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { IniciarSesionComponent } from "./components/iniciar-sesion/iniciar-sesion.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { InventarioComponent } from "./components/inventario/inventario.component";
import { RegistrarseComponent } from "./components/registrarse/registrarse.component";



const routes = [
    {
        path: '',component: InicioComponent
    },
    {path: './home',component: HomeComponent},
    {path: './iniciar',component: IniciarSesionComponent},
    {path:'./registro',component: RegistrarseComponent},
    {path:'./inventario',component: InventarioComponent},
    {path: './**',component: InicioComponent}
];

@NgModule(
    {
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ]
    })
export class AppRoutingModule {}   