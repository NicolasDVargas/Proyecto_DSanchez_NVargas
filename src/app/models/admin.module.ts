import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export class Administrador{

  nombre:string;
  contra:string;

  constructor (nombre:string,contra:string){
    this.nombre=nombre;
    this.contra=contra;
  }
}
