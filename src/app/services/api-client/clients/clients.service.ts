import { Injectable } from '@angular/core';
import { IClientsService } from './iclients.service';
import { Observable } from 'rxjs';
import { SaveClientRequest, SaveClientResponse, UpdateClientResquest, UpdateClientResponse, ListClientResponse, DetailsClientResponse } from './client.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService implements IClientsService {

  constructor(private http: HttpClient) { }
  save(resquest: SaveClientRequest): Observable<SaveClientResponse> {
    throw new Error('Method not implemented.');
  }
  update(id: number, request: UpdateClientResquest): Observable<UpdateClientResponse> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
  list(): Observable<ListClientResponse[]> {
    throw new Error('Method not implemented.');
  }
  findByID(id: number): Observable<DetailsClientResponse> {
    throw new Error('Method not implemented.');
  }
}
