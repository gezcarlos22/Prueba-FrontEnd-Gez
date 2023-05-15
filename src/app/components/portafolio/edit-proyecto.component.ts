import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service.service';


@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyecto :Proyecto = null;


  constructor(
    private sProye: ProyectoService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sProye.detail(id).subscribe(data => {
        this.proyecto=data;

      },err =>{
        alert("Error al cargar datos");
        this.router.navigate(['']);
      }
      )
  }
  
  onUpdate():void{
    this.sProye.edit(this.proyecto).subscribe(data => {
      alert("Proyecto modificado.");
      this.router.navigate(['']);
    }
    )
  }

}
