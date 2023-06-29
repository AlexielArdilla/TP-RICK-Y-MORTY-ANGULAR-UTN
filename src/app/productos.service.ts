import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) {

   }

   getAll(){

    return this.http.get("https://rickandmortyapi.com/api/character");
   }

   getById(id:string){

    return this.http.get("https://rickandmortyapi.com/api/character/"+id);

   }
}
