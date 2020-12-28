import { Routes } from '@angular/router';
import { EducationComponent } from './components/education/education.component';
import { CertificationComponent } from './components/certification/certification.component';
import { AppComponent } from './app.component';


export const ROUTES: Routes = [
    {path: '', component: EducationComponent},
    {path: 'certification', component: CertificationComponent},
    {path: '', pathMatch:'full', redirectTo:''},
    {path: '**', pathMatch:'full', redirectTo:''}
];