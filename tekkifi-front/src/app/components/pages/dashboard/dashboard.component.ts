import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    update = false;
    subscription: Subscription;
    status: boolean;

  constructor(protected authenticationService: AuthenticationService) { }

  ngOnInit(): void {
      this.subscription = this.authenticationService.currentStatus.subscribe(message => this.status = message);
  }
  receiveMessage($event) {
        this.update = $event;
        if (this.update){
            document.getElementById('partenaireList').classList.remove('set12');
            document.getElementById('partenaireList').classList.add('set6');
        }
  }
}
