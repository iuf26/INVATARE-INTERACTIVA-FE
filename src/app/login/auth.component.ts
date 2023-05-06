import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public authFormGroup!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.initFormGroup();
  }

  authSubmit() {
    if (this.authFormGroup.valid) {
      this.authService.login(this.authFormGroup.value).subscribe({
        next: result => {
          if (result.succes) {
            localStorage.setItem("user", JSON.stringify(result.getValue()));
            this.router.navigate(["/welcome"]);
          }
        }, error: err => {
          console.error(err)
        }
      }
      )
    }
  }


  private initFormGroup() {
    this.authFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

}
