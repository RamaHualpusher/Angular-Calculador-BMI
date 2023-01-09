import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
edad =25;
peso =60;
altura =170;
sexoMasculino = true;

constructor(private router:Router) { }
cambiarAltura(event:Event){
  this.altura = Number((event.target as HTMLInputElement).value);
}
//Calcular BMI teniendo en cuenta edad, peso, altura y sexo
calcularBMI(){
  let bmi = this.peso / Math.pow(this.altura/100,2);
  this.router.navigate(['/resultado', bmi.toFixed(1)]);
}

















}
