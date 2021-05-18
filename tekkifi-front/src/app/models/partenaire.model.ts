export interface IPartenaire {
  id?: number;
  nom?: string;
  email?: string;
  telephone?: string;
  typePartenaire?: string;
  presentation?: string;
  adresse?: string;
  conditionAccompagnement?: string;
  presentationAccompagnement?: string;
  typeAccompagnement?: string;
}

export class Partenaire implements IPartenaire {
  constructor(
    public id?: number,
    public nom?: string,
    public email?: string,
    public telephone?: string,
    public typePartenaire?: string,
    public presentation?: string,
    public adresse?: string,
    public conditionAccompagnement?: string,
    public presentationAccompagnement?: string,
    public typeAccompagnement?: string
  ) {}
}
