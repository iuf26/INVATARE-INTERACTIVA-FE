import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public authFormGroup!: FormGroup;

  constructor( private authService: AuthService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.initFormGroup();
  }

  authSubmit() {
    if (this.authFormGroup.valid) {
      this.authService.login(this.authFormGroup.value).subscribe({
        next: result => {
        
          if (result.email) {
            localStorage.setItem("email", result.email);
            this.router.navigate(["/home"]);
          
        }
      
      },
        error: error => {
          debugger
          if (error.status === 404) {
            this.toastrService.error('Credențiale incorecte. Vă rugăm să verificați informațiile de autentificare.', 'Eroare');
          } else {
            this.toastrService.error('A apărut o eroare în timpul autentificării. Vă rugăm să încercați din nou mai târziu.', 'Eroare');
          }
        }
      })
    }
  }


  private initFormGroup() {
    this.authFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

}
