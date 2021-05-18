import {Component, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';
import {IPartenaire} from '../../../models/partenaire.model';
import {Subscription} from 'rxjs';
import {EventManager} from '@angular/platform-browser';
import {HttpHeaders, HttpResponse} from '@angular/common/http';
import {PartenaireService} from "../../../services/partenaire.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.scss']
})
export class PartenaireComponent implements OnInit , OnDestroy{

    partenaire: IPartenaire[] = [];
    currentAccount: any;
    eventSubscriber: Subscription;
    @Output() clickEvent = new EventEmitter<boolean>();

    constructor(
        protected partenaireService: PartenaireService,
        protected eventManager: EventManager,
        protected router: Router
        // protected accountService: AccountService
    ) {
    }

    loadAll() {
        this.partenaireService
            .query({
            })
            .subscribe((res: HttpResponse<IPartenaire[]>) => this.paginatePartenaire2S(res.body, res.headers));
    }

    reset() {
        this.partenaire = [];
        this.loadAll();
    }

    loadPage(page) {
        this.loadAll();
    }

    ngOnInit() {
        // this.loadAll();
        // this.accountService.identity().subscribe(account => {
        //     this.currentAccount = account;
        // });
        // this.registerChangeInPartenaire2S();
    }

    ngOnDestroy() {
        // this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IPartenaire) {
        return item.id;
    }

    registerChangeInPartenaire2S() {
        // this.eventSubscriber = this.eventManager.subscribe('partenaire2ListModification', response => this.reset());
    }

    sort() {
    }

    protected paginatePartenaire2S(data: IPartenaire[], headers: HttpHeaders) {
        // this.links = this.parseLinks.parse(headers.get('link'));
        // this.totalItems = parseInt(headers.get('X-Total-Count'), 10);
        // for (let i = 0; i < data.length; i++) {
        //     this.partenaire2S.push(data[i]);
        // }
    }
ajouter(){
        this.clickEvent.emit(true);
        // this.router.navigate(['/partenaire/new']);
}
}
