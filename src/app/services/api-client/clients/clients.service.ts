import { Injectable } from '@angular/core';
import { IClientsService } from './iclients.service';
import { Observable } from 'rxjs';
import { SaveClientRequest, SaveClientResponse, UpdateClientResquest, UpdateClientResponse, ListClientResponse, DetailsClientResponse } from './client.models';
import { HttpClient } from '@angular/common/http';
import { envionment } from '../../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ClientsService implements IClientsService {
  private readonly basePath = envionment.apiUrl; //ou 1080

  constructor(private http: HttpClient) { }
  save(request: SaveClientRequest): Observable<SaveClientResponse> {
    return this.http.post<SaveClientResponse>(`${this.basePath}clients`, request);
  }
  update(id: number, request: UpdateClientResquest): Observable<UpdateClientResponse> {
    return this.http.put<UpdateClientResponse>(`${this.basePath}clients/${id}`, request);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.basePath}clients/${id}`);
  }
  list(): Observable<ListClientResponse[]> {
    return this.http.get<ListClientResponse[]>(`${this.basePath}clients`);
  }
  findByID(id: number): Observable<DetailsClientResponse> {
    return this.http.get<DetailsClientResponse>(`${this.basePath}clients/${id}`);
  }
}
