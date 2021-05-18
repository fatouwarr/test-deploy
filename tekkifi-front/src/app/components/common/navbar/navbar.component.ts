import {Component, ElementRef, OnInit, Output, ViewChild, EventEmitter, OnDestroy} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
    @Output() messageEvent = new EventEmitter<string>();
    subscription: Subscription;
    status: boolean;

    constructor(private authenticationService: AuthenticationService, private router: Router) {
    }

    ngOnInit(): void {
        this.subscription = this.authenticationService.currentStatus.subscribe(message => this.status = message);
        // this.subscription = this.authenticationService.currentMessage.subscribe(message => this.isAuthenticated = message);
    }

    goTo(location: string): void {
        window.location.hash = location;
    }
    connexion(){
        this.router.navigate(['/login']);
    }
    deconnexion(){
        // this.authenticationService.setAuthenticated(false);
        this.authenticationService.changeStatus(false);
        this.router.navigate(['/']);
    }
    getIfAuthenticated(){
        // return this.authenticationService.getAuthenticated();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
