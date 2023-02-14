import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor( private httpClient: HttpClient ) { }

  public getAll(): Observable<any>{
    return this.httpClient.get("https://localhost:7293/api/characters");
  }
}
