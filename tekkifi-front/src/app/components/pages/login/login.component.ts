import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';
import {LocalStorageService} from 'ngx-webstorage';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    authenticationError: boolean;
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    username = '';
    password = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private localStorage: LocalStorageService,
    ) {
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.loginForm.controls;
    }

    ngOnInit() {
        console.log('init login--------------------------');
        // this.loginForm = new FormGroup({
        //     this.username= new FormControl(''),
        //     this.password= new FormControl(''),
        // });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    onSubmit() {
        console.log('on submit************************');
        console.log(this.username);
        console.log(this.password);
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.username, this.password)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }

    login() {
        console.log('login ts*****************************'+this.username+'ettttttttttttttt'+this.password);
        this.authenticationService.login(this.username, this.password).subscribe(response => {
                console.log(this.username);
                console.log(this.password);
                this.authenticationError = false;
                console.log('success authent');
                console.log(response);
                this.router.navigate(['']);
            },
            error => {
                console.log(this.username);
                console.log(this.password);
                console.log(error);
                this.authenticationError = true;
                console.log('éerorrr conexion');
            }
        );
    }
}
