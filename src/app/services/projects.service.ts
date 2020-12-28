import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {

    


    constructor(private _http: HttpClient){

    }

    getQuery( query: string ){
        const url = `https://portfolio-backend1.herokuapp.com/${ query }`;

        return this._http.get(url);
    }

   getProjects(){
    
        return this.getQuery('projects')
                .pipe(map(data => data['projects']));
    }

    
}