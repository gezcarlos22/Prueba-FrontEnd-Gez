import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienciaComponent } from './components/experience/experience.component';
import { EducacionComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent} from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experience/new-experiencia.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';
import { NeweducacionComponent } from './components/education/neweducacion.component';
import { EditeducacionComponent } from './components/education/editeducacion.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditAcercadeComponent } from './components/about-me/edit-acercade.component';
import { NewProyectoComponent } from './components/portafolio/new-proyecto.component';
import { EditProyectoComponent } from './components/portafolio/edit-proyecto.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    AboutMeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    PortafolioComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAcercadeComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
