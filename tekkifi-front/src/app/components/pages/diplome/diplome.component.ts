import {Component, OnDestroy, OnInit} from '@angular/core';
import {IDiplome} from '../../../models/diplome.model';
import {Subscription} from 'rxjs';
import {DiplomeService} from '../../../services/diplome.service';
import {AccountService} from '../../../services/account.service';

@Component({
  selector: 'app-diplome',
  templateUrl: './diplome.component.html',
  styleUrls: ['./diplome.component.scss']
})
export class DiplomeComponent implements OnInit, OnDestroy {

    diplomes: IDiplome[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected diplomeService: DiplomeService,
        protected accountService: AccountService
    ) {}

    loadAll() {
        // this.diplomeService
        //     .query()
        //     .pipe(
        //         filter((res: HttpResponse<IDiplome[]>) => res.ok),
        //         map((res: HttpResponse<IDiplome[]>) => res.body)
        //     )
        //     .subscribe((res: IDiplome[]) => {
        //         this.diplomes = res;
        //     });
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().subscribe(account => {
            this.currentAccount = account;
        });
        this.registerChangeInDiplomes();
    }

    ngOnDestroy() {
        // this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IDiplome) {
        return item.id;
    }

    registerChangeInDiplomes() {
        // this.eventSubscriber = this.eventManager.subscribe('diplomeListModification', response => this.loadAll());
    }

}
