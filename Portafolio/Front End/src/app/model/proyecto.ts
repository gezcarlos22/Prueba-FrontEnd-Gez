export class Proyecto {
    id!:number;
    proyecto:string;
    inicio:string;
    fin:string;
    descripcion:string;
    imagen:string;
    url:string;

    constructor(proyecto:string, inicio: string, fin: string, descripcion:string, imagen:string, url:string,) {
        this.proyecto = proyecto;
        this.inicio = inicio;
        this.fin = fin;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.url = url;
    }
}