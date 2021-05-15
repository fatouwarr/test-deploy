import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    isAuthenticated = false;

    @ViewChild('fourth') fourth: ElementRef;

    constructor() {
    }

    ngOnInit(): void {
    }

    goTo(location: string): void {
        window.location.hash = location;
    }

    public scrollToFourth() {
        this.fourth.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });

    }
}
