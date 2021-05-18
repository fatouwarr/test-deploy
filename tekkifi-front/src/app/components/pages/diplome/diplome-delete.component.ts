import {Component, OnDestroy, OnInit} from '@angular/core';
import {IDiplome} from '../../../models/diplome.model';
import {DiplomeService} from '../../../services/diplome.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-diplome-delete',
  templateUrl: './diplome-delete.component.html',
  styleUrls: ['./diplome-delete.component.scss']
})
export class DiplomeDeleteComponent{

    diplome: IDiplome;

//     constructor(protected diplomeService: DiplomeService, public activeModal: NgbActiveModal) {}
//
    clear() {
        // this.activeModal.dismiss('cancel');
    }
//
    confirmDelete(id: number) {
//         this.diplomeService.delete(id).subscribe(response => {
//             // this.eventManager.broadcast({
//             //     name: 'diplomeListModification',
//             //     content: 'Deleted an diplome'
//             // });
//             this.activeModal.dismiss(true);
//         });
    }
// }
//
// @Component({
//     selector: 'app-diplome-delete-popup',
//     template: ''
// })
// export class DiplomeDeletePopupComponent implements OnInit, OnDestroy {
//     protected ngbModalRef: NgbModalRef;
//
//     constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}
//
//     ngOnInit() {
//         this.activatedRoute.data.subscribe(({ diplome }) => {
//             setTimeout(() => {
//                 this.ngbModalRef = this.modalService.open(DiplomeDeleteComponent Component, { size: 'lg', backdrop: 'static' });
//                 this.ngbModalRef.componentInstance.diplome = diplome;
//                 this.ngbModalRef.result.then(
//                     result => {
//                         this.router.navigate(['/diplome', { outlets: { popup: null } }]);
//                         this.ngbModalRef = null;
//                     },
//                     reason => {
//                         this.router.navigate(['/diplome', { outlets: { popup: null } }]);
//                         this.ngbModalRef = null;
//                     }
//                 );
//             }, 0);
//         });
//     }
//
//     ngOnDestroy() {
//         this.ngbModalRef = null;
//     }
}
