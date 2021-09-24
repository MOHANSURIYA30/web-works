import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { Subject} from 'rxjs';
import { environment } from "src/environments/environment";


const BACKEND_URL = environment.apiUrl;

@Injectable({ providedIn:'root'})

export class AppService{

    constructor(private http:HttpClient ){}

    postData = async(obj:any)=>new Promise<any>((resolve,reject)=>{
        const data = obj;
        this.http.post(BACKEND_URL,data, {responseType: 'text'})
        .subscribe(
            response=>{                
                resolve(response);
            },
            error=>{                
               reject(error) ;
            }
        );


    });


    postLog = async(obj:any)=>new Promise<any>((resolve,reject)=>{
        const data = {log:obj};
        this.http.post(BACKEND_URL+"/log",data, {responseType: 'text'})
        .subscribe(
            response=>{                
                resolve(response);
            },
            error=>{                
               reject(error) ;
            }
        );


    });

    postError = async(obj:any)=>new Promise<any>((resolve,reject)=>{
        const data = {error:obj}
        this.http.post(BACKEND_URL+"/error",data, {responseType: 'text'})
        .subscribe(
            response=>{                
                resolve(response);
            },
            error=>{                
               reject(error) ;
            }
        );


    });


    

}