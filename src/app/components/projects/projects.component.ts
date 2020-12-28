import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
public projects: {}[];
public url:string;

  constructor(private _projectService:ProjectsService) {
    this.url = 'https://portfolio-backend1.herokuapp.com/image/';
   }

  ngOnInit(): void {
   this.getProjects();
  }

 getProjects(){
    this._projectService.getProjects().subscribe(
      data => {
        if(data){
          this.projects = data;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
