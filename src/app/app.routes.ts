import { Routes } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';

export const routes: Routes = [
    {path: 'customer-form', component: CustomerFormComponent},
    {path: 'customer-data', component: CustomerDataComponent},
    {path: '', redirectTo: '/customer-form', pathMatch: 'full'}
];
