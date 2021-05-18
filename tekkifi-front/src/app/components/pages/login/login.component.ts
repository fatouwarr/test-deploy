import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';
import {LocalStorageService} from 'ngx-webstorage';
import {first} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    authenticationError: boolean;
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    username = '';
    password = '';
    @Output() messageEvent = new EventEmitter<string>();
    subscription: Subscription;
    status: boolean;

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
        this.subscription = this.authenticationService.currentStatus.subscribe(message => this.status = message);
        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.authenticationService.login(this.username, this.password).subscribe(response => {
                this.authenticationError = false;
                this.authenticationService.changeStatus(true);
                // this.authenticationService.setAuthenticated(true);
                this.router.navigate(['/dashboard']);
                // this.subscription = this.authenticationService.currentMessage.subscribe(message => this.isAuthenticated = message);
            },
            error => {
                this.authenticationError = true;
                this.loading = false;
            }
        );
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
