import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  load = false
  nome1 = ""
  nome2 = ""
  url = "http://lucasreno.kinghost.net/love-calculator/"
  resultado = 0
  relacao = ""
  constructor(public http: HttpClient,) {}
  enviarDados(){
    this.http.get<any>(this.url+this.nome1+"/"+ this.nome2).subscribe(
      async (resposta: any) =>{
        this.relacao="";
        this.load = true;
        for(let i=0; i<=resposta; i++){
          this.resultado = i;
          await new Promise(f => setTimeout(f, 50));
        }
        this.load = false;

        if(this.resultado < 20) this.relacao = "Esquece e vai pra outra(o)";
        else if(this.resultado < 40) this.relacao = "Vocês não tem os mesmos gostos";
        else if(this.resultado < 60) this.relacao = "Se deu deu se não deu Fu#*@";
        else if(this.resultado < 80) this.relacao = "Vocês são um casal quase perfeito";
        else if(this.resultado == 100) this.relacao ="Parabéns você achou sua alma gêmea";
         else this.relacao = "Lança seu charme";
      }
    );
  }
}
