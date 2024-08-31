import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
//Clase Usuario
import { Usuario } from './clases/usuario';
//Componentes
import { BienvenidoComponent } from "./componentes/bienvenido/bienvenido.component";
import { LoginComponent } from "./componentes/login/login.component";
import { ErrorComponent } from "./componentes/error/error.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, BienvenidoComponent,LoginComponent,ErrorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicio_clase01';

  public usuario=new Usuario("Franco","123");

  public edadUno:number=0;
  public edadDos:number=0;
  public suma:number=0;
  public promedio:number=0;

  private SumarEdades():void
  {
    this.suma=this.edadUno+this.edadDos;
  }
  private CalcularPromedio():void
  {
    this.SumarEdades();
    this.promedio=(this.suma/2);
  }
  public Calcular():void
  {
    this.CalcularPromedio();
  }
  public Limpiar():void
  {
    this.edadUno=0;
    this.edadDos=0;
    this.suma=0;
    this.promedio=0;
  }
  ngOnInit()
  {
    console.log("Datos de la clase usuario:\n"+this.usuario.ToJson());
    //alert("Datos de la clase usuario:\n"+this.usuario.ToJson());
  }
}
