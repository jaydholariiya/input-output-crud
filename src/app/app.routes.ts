import { Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { UpdateDataComponent } from './update-data/update-data.component';

export const routes: Routes = [{
    path : 'get-data', component : DataComponent},
    {path : 'update-data' , component : UpdateDataComponent}
];
