import { Injectable } from "@angular/core";
import { HttpClient  } from "@angular/common/http";

import { environment } from "src/environments/environment";

const BACKEND_URL = environment.apiUrl;

@Injectable({ providedIn: "root" })

 export class AppService{
     users:any;

     constructor(private http: HttpClient) { }

     read = async(queryObj?: any) => new Promise<any>((resolve, rejects) => {
        this.http.get<any>(BACKEND_URL +(queryObj ? queryObj : ''))
        .subscribe(
          response => {
            resolve(response);
          },
          error => {
            rejects(error);
          }
        );
      })   


      create = async(obj:any) => new Promise<any>((resolve, rejects) => {
        const data: any = obj;
        console.log(data);
        
        this.http.post<any>(BACKEND_URL, data)
          .subscribe(
            response => {
              resolve(response);
            },
            error => {
              rejects(error);
            }
          );
      })  


      update = async (id: string, obj: any) => new Promise<any>((resolve, rejects) => {
        const data:any= obj;
        this.http.put<any>(BACKEND_URL +'/'+ id, data)
          .subscribe(
            response => {
              resolve(response);
            },
            error => {
              rejects(error);
            }
          );
      })


      delete = async (id: string) => new Promise<any>((resolve, rejects) => {
        this.http.delete<any>(BACKEND_URL + "/" + id)
          .subscribe(
            response => {
              resolve(response);
            },
            error => {
              rejects(error);
            }
          );
      })


 }