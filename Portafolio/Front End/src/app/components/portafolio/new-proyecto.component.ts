import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';

import { ProyectoService } from 'src/app/service/proyecto.service.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})

export class NewProyectoComponent implements OnInit {
  proyecto:string = '';
  inicio:string = '';
  fin:string = '';
  descripcion:string = '';
  imagen:string = '';
  url:string = '';
  personaid:number;
  constructor(private sproye:ProyectoService, private router: Router) {}

  ngOnInit(): void {
  }


  onCreate(): void{
      const proy = new Proyecto (this.proyecto, this.inicio, this.fin, this.descripcion, this.imagen, this.url, this.personaid)
      this.sproye.save(proy).subscribe(data=>{
        alert("Proyecto añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
