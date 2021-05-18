export interface ITypePiece {
  id?: number;
  nom?: string;
}

export class TypePiece implements ITypePiece {
  constructor(public id?: number, public nom?: string) {}
}
