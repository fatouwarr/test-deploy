export interface IMetier {
  id?: number;
  nom?: string;
}

export class Metier implements IMetier {
  constructor(public id?: number, public nom?: string) {}
}
