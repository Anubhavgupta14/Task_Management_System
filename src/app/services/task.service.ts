import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient) { }

  addTask(data: any) : Observable<any>{
    return this._http.post('https://task-management-backend-j679.onrender.com/save', data);
  }

  updateTask(_id: any,data: any) : Observable<any>{
    return this._http.put(`https://task-management-backend-j679.onrender.com/update`,{_id}, data);
  }

  getTaskList(): Observable<any>{
    return this._http.get('https://task-management-backend-j679.onrender.com/')
  }

  deleteTask(_id: any): Observable<any>{
    return this._http.post(`https://task-management-backend-j679.onrender.com/delete`,{_id})
  }
}
