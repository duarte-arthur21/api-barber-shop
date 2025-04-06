export interface SaveClientRequest {
    name: string;
    email: string;
    phone: string;
}

export interface UpdateClientResquest {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export interface SaveClientResponse {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export interface UpdateClientResponse {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export interface ListClientResponse {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export interface DetailsClientResponse {
    id: number;
    name: string;
    email: string;
    phone: string;
}