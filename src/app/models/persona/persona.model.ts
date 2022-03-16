import { DefaultValueAccessor } from "@angular/forms";

export interface IPersona{
  nombre: string;
  contra: string;
  email: string;

}

export class Admin implements IPersona{

  nombre: string;
  contra: string;
  email: string;

  constructor (){}
}

export class cliente implements IPersona{

  nombre:string;
  contra:string;
  email:string;

  constructor (){}
}
