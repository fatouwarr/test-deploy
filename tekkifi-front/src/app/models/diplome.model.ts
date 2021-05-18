export interface IDiplome {
  id?: number;
  nom?: string;
  niveau?: number;
}

export class Diplome implements IDiplome {
  constructor(public id?: number, public nom?: string, public niveau?: number) {}
}
