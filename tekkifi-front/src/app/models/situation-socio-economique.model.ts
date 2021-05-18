export interface ISituationSocioEconomique {
  id?: number;
  nom?: string;
}

export class SituationSocioEconomique implements ISituationSocioEconomique {
  constructor(public id?: number, public nom?: string) {}
}
