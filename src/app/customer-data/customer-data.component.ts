import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-customer-data',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterOutlet, RouterLink],
  templateUrl: './customer-data.component.html',
  styleUrl: './customer-data.component.css'
})
export class CustomerDataComponent implements OnInit{
  // @ts-ignore
  public formCustomerData: FormGroup; 
  data: any;
  constructor(private formBuilder: FormBuilder, private apiService: ApiService){
  
  }


  ngOnInit(): void {
    this.formCustomerData = this.formBuilder.group({
      firstName: [''],
      middleName: [''],
      lastName: [''],
      secondLastName: [''],
      phone: [''],
      address: [''],
      city: [''],
    });
    this.loadAPI();
  }

  async loadAPI(): Promise<any>{
    const response = this.apiService.data;
    console.log(response);
    this.formCustomerData.patchValue(response);
  }

}
