export interface ITypeAccompagnement {
  id?: number;
  nom?: string;
}

export class TypeAccompagnement implements ITypeAccompagnement {
  constructor(public id?: number, public nom?: string) {}
}
