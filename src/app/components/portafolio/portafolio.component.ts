import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  proyectos : Proyecto[]=[];
  isLogged = false;
  constructor(private tokenService: TokenService, private sproye:ProyectoService) { }

  
  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarProyecto():void{
    this.sproye.lista().subscribe(data => {
      this.proyectos=data
    });    
  }

  

  delete(id?: number){
    if(id != undefined){
      this.sproye.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }  
}