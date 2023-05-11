export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string;
    inicio:string;
    fin:string;
    imagen:string;

    constructor(nombreE: string, descripcionE: string, inicio: string, fin: string, imagen: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.inicio = inicio;
        this.fin = fin;
        this.imagen = imagen;
    }
}
