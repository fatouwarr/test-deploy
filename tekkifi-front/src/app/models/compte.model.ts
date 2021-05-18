export interface ICompte {
  id?: number;
  prenom?: string;
  nom?: string;
  email?: string;
  motdepasse?: string;
}

export class Compte implements ICompte {
  constructor(public id?: number, public prenom?: string, public nom?: string, public email?: string, public motdepasse?: string) {}
}
