import { Observable } from "rxjs";
import {ListClientResponse, SaveClientRequest, SaveClientResponse, UpdateClientResquest, UpdateClientResponse, DetailsClientResponse } from "./client.models";

export interface IClientsService {
    save(resquest: SaveClientRequest): Observable<SaveClientResponse>

    update(id: number, request: UpdateClientResquest): Observable<UpdateClientResponse>

    delete(id: number): Observable<void>

    list(): Observable<ListClientResponse[]>

    findByID(id: number): Observable<DetailsClientResponse>
}