export class Materiel {
  id:number;
  type:string;
  marque:string;
  code_barre:string;
  qtn:number;
  date_affectation:Date;

  constructor() {
    this.id=0;
    this.type='Ordinateur';
    this.marque='HP'
    this.code_barre='';
    this.qtn=5;
    this.date_affectation=new Date();
   }
}
