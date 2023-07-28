import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient) { }

  addTask(data: any) : Observable<any>{
    return this._http.post('http://localhost:9000/save', data);
  }

  updateTask(_id: any,data: any) : Observable<any>{
    return this._http.put(`http://localhost:9000/update`,{_id}, data);
  }

  getTaskList(): Observable<any>{
    return this._http.get('http://localhost:9000/')
  }

  deleteTask(_id: any): Observable<any>{
    return this._http.post(`http://localhost:9000/delete`,{_id})
  }
}
