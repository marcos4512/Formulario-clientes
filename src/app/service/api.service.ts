import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }
  data :any;


  /**
   * Consumo de la API REST en Springboot que expone información de usuarios (servidor local)
   * @param documentType Tipo de documento ('P' ó 'C')
   * @param documentNumber Número de documento
   * @returns 
   */
  getUserf = async (documentType: string, documentNumber: string) => {
    let urlApi = 'http://127.0.0.1:8090/adapter-api/cliente/'+documentType+'/'+documentNumber;
    const res = await fetch(urlApi);
    const datos = await res.json();
    this.data = datos;
    console.log(datos);
    return datos;
  };
  
}
