import { Component, OnInit } from '@angular/core';
import {DiplomeService} from '../../../services/diplome.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Diplome, IDiplome} from '../../../models/diplome.model';
import {Observable} from 'rxjs';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-diplome-update',
  templateUrl: './diplome-update.component.html',
  styleUrls: ['./diplome-update.component.scss']
})
export class DiplomeUpdateComponent implements OnInit {
    isSaving: boolean;

    editForm = this.fb.group({
        id: [],
        nom: [],
        niveau: []
    });

    constructor(protected diplomeService: DiplomeService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ diplome }) => {
            this.updateForm(diplome);
        });
    }

    updateForm(diplome: IDiplome) {
        // this.editForm.patchValue({
        //     // id: diplome.id,
        //     nom: diplome.nom,
        //     niveau: diplome.niveau
        // });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        const diplome = this.createFromForm();
        if (diplome.id !== undefined) {
            this.subscribeToSaveResponse(this.diplomeService.update(diplome));
        } else {
            console.log('create with /////////////////////////////');
            console.log(diplome.nom);
            console.log(diplome.niveau);
            this.subscribeToSaveResponse(this.diplomeService.create(diplome.nom, diplome.niveau));
        }
    }

    private createFromForm(): IDiplome {
        return {
            ...new Diplome(),
            id: undefined,
            nom: this.editForm.get(['nom']).value,
            niveau: this.editForm.get(['niveau']).value
        };
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IDiplome>>) {
        result.subscribe(responseok => this.onSaveSuccess(responseok), responseko => this.onSaveError(responseko));
    }

    protected onSaveSuccess(response: any) {
        console.log(response);
        this.isSaving = false;
        // this.previousState();
    }

    protected onSaveError(response: any) {
        console.log('erorrrrrrrrrr');
        console.log(response);
        this.isSaving = false;
    }
}
