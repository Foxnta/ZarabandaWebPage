import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ProjectviewComponent } from './projectview/projectview.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'proyectos', component: ProyectosComponent },
    { path: 'projectview', component: ProjectviewComponent }
];