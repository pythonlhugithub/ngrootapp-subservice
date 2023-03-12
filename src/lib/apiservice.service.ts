import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customerModel';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(public httpclient:HttpClient) { }

  readonly _baseUrl = "https://localhost:7129/api/"
  formdata:Customer =new Customer();
  custlist: Customer[] = [];

getcustomer()
{
  return this.httpclient.get(this._baseUrl+"customers");
}
postcustomer(){
  return this.httpclient.post(this._baseUrl+"customers", this.formdata);
}

}
