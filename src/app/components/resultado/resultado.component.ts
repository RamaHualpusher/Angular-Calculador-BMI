import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {

  constructor(private route:ActivatedRoute) { }

  bmi = 0;
  resultado = '';
  interpretacion = '';
  ngOnInit(): void {
    this.bmi = Number(this.route.snapshot.paramMap.get('valor'));
    this.interpretacionBMI();
  }

  //Interpretación del BMI
  interpretacionBMI(){
    if(this.bmi < 18.5){
      this.resultado = 'Peso bajo';
      this.interpretacion ='Tienes un peso corporal inferior al normal. Te recomendamos que consultes con tu médico.';
    }else if(this.bmi >= 18.5 && this.bmi < 25){
      this.resultado = 'Peso normal';
      this.interpretacion ='Tienes un peso corporal normal. ¡Mantén así!';
    }else if(this.bmi >= 25 && this.bmi < 30){
      this.resultado = 'Sobrepeso';
      this.interpretacion ='Tienes un peso corporal superior al normal. Te recomendamos que consultes con tu médico.';
    }else if(this.bmi >= 30 && this.bmi < 35){
      this.resultado = 'Obesidad grado 1';
      this.interpretacion ='Tienes un peso corporal superior al normal. Te recomendamos que consultes con tu médico.';
    }else if(this.bmi >= 35 && this.bmi < 40){
      this.resultado = 'Obesidad grado 2';
      this.interpretacion ='Tienes un peso corporal superior al normal. Te recomendamos que consultes con tu médico.';
    }else{
      this.resultado = 'Obesidad grado 3';
      this.interpretacion ='Tienes un peso corporal superior al normal. Te recomendamos que consultes con tu médico.';
    }
  }
    


}
