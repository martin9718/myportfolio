import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {

  certifications: {}[];
  constructor() { 
    this.certifications = [
      {
        name: 'Programming Foundations with JavaScript, HTML and CSS',
        link: 'https://www.coursera.org/account/accomplishments/certificate/58X82FBLJLX7',
        image: 'assets/img/duke-university.png'
      },
      {
        name: 'JavaScript Moderno:Guía para dominar el lenguaje',
        link: 'https://www.udemy.com/certificate/UC-1579bf00-e06d-41f3-af01-487f8ef37146/',
        image: 'assets/img/javascript-moderno.png'
      },
      {
        name: 'Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS',
        link: 'https://www.udemy.com/certificate/UC-a4e90cf2-ab88-4457-abdb-79c34c0468b1/',
        image: 'assets/img/master-javascript.png'
      },
      {
        name: 'Node: De cero a experto',
        link: 'https://www.udemy.com/certificate/UC-0ccba226-f6b5-4b0e-86b6-65be418438bf/',
        image: 'assets/img/node-js.png'
      },
      {
        name: 'Master en CSS: Responsive, SASS, Flexbox, Grid y Bootstrap 4',
        link: 'https://www.udemy.com/certificate/UC-090cbe21-9843-4969-91fd-580e4a4c6737/',
        image: 'assets/img/master-css.png'
      },
      {
        name: 'Programación para principiantes - primeros pasos',
        link: 'https://www.udemy.com/certificate/UC-6d451f9b-71d6-4d89-bddc-7e3626b18a87/',
        image: 'assets/img/programacion-principiantes.png'
      },
      {
        name: 'Univeridad Java: De Cero a Master',
        link: 'https://www.udemy.com/certificate/UC-dff60e8a-6c1e-49f4-af53-0d00d5d024bf/',
        image: 'assets/img/univeridad-java.png'
      },
      {
        name: 'Java Programming: Solving Problems with Software',
        link: 'https://www.coursera.org/account/accomplishments/certificate/ZU4GVJS25ET8',
        image: 'assets/img/duke-university.png'
      }
    ]
  }

  ngOnInit(): void {
  }

}
