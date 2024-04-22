import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterOutlet, RouterLink],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent implements OnInit {

  // @ts-ignore
  public formCustomer: FormGroup; 
  title = 'Consulta-clientes';
  data: any = {};
  documentTypes : string[];
  found: boolean;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router){
    this.documentTypes = [
      "Cédula de ciudadanía",
      "Pasaporte"
    ];
    this.found = false;
  }

  ngOnInit(): void {
    this.formCustomer =  this.formBuilder.group({
      documentType: ['',
        Validators.required
      ],
      documentNumber:  ['', 
        [
          Validators.required, 
          Validators.minLength(8),
          Validators.maxLength(11)
        ]
      ]
    });
  }

 
  async search(): Promise<any> {
    let docType: string;
    let docNumber: string;
    docType =  this.validateType(this.formCustomer.controls['documentType'].value);
    docNumber = this.formCustomer.controls['documentNumber'].value
    console.log(this.formCustomer.controls['documentType'].value);
    console.log(docType, docNumber);

    this.data = await this.apiService.getUserf(docType, docNumber);

    if (this.data!=null)
      this.found =true;
    console.log(this.data);
    this.router.navigate(['/', 'customer-data']);
  }

  validateType(type: string): string {
    if (type == 'Cédula de ciudadanía')
    return 'C';
    else
    return 'P';
  }

  validatenumberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
