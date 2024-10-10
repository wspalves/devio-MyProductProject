import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./products";
import { Observable } from "rxjs";

@Injectable()
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  protected urlServiceV1: string = "http://localhost:3000/";

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.urlServiceV1 + "produtos");
  }
}
