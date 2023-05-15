import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  inicio: string = '';
  fin: string = '';
  imagen: string = '';



  constructor(private educacionS: EducacionService, private router: Router,private activatedRouter: ActivatedRoute,
    ) { }

  ngOnInit(): void {

  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.descripcionE,this.inicio,this.fin,this.imagen);
    this.educacionS.save(educacion).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }


}
