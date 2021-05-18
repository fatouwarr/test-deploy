import { Component, OnInit } from '@angular/core';
import {PartenaireService} from '../../../../services/partenaire.service';
import {IPartenaire, Partenaire} from '../../../../models/partenaire.model';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-partenaire-update',
  templateUrl: './partenaire-update.component.html',
  styleUrls: ['./partenaire-update.component.scss']
})
export class PartenaireUpdateComponent implements OnInit {

    isSaving: boolean;

    editForm = this.fb.group({
        nom: [],
        email: [],
        telephone: [],
        typePartenaire: [],
        presentation: [],
        adresse: [],
        conditionAccompagnement: [],
        presentationAccompagnement: [],
        typeAccompagnement: []
    });

    constructor(protected partenaireService: PartenaireService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({  partenaire }) => {
            // this.updateForm( partenaire);
        });
    }

    updateForm( partenaire: IPartenaire) {
        this.editForm.patchValue({
            nom:  partenaire.nom,
            email:  partenaire.email,
            telephone:  partenaire.telephone,
            typePartenaire:  partenaire.typePartenaire,
            presentation:  partenaire.presentation,
            adresse:  partenaire.adresse,
            conditionAccompagnement:  partenaire.conditionAccompagnement,
            presentationAccompagnement:  partenaire.presentationAccompagnement,
            typeAccompagnement:  partenaire.typeAccompagnement
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        const  partenaire = this.createFromForm();
        if ( partenaire.id !== undefined) {
            this.subscribeToSaveResponse(this.partenaireService.update( partenaire));
        } else {
            this.subscribeToSaveResponse(this.partenaireService.create( partenaire));
        }
    }

    private createFromForm(): IPartenaire {
        return {
            ...new  Partenaire(),
            id: this.editForm.get(['id']).value,
            nom: this.editForm.get(['nom']).value,
            email: this.editForm.get(['email']).value,
            telephone: this.editForm.get(['telephone']).value,
            typePartenaire: this.editForm.get(['typePartenaire']).value,
            presentation: this.editForm.get(['presentation']).value,
            adresse: this.editForm.get(['adresse']).value,
            conditionAccompagnement: this.editForm.get(['conditionAccompagnement']).value,
            presentationAccompagnement: this.editForm.get(['presentationAccompagnement']).value,
            typeAccompagnement: this.editForm.get(['typeAccompagnement']).value
        };
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IPartenaire>>) {
        result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
