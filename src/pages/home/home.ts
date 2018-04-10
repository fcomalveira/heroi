
import { Component } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';
import { Heroi } from '../../app/heroi';
// import { HEROIS } from '../../app/hreois-lista';
import { HeroiDetalhePage } from '../heroi-detalhe/heroi-detalhe.page';
import { HeroisProvider } from '../../app/heroi.provider';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
 
})


export class HomePage {

herois: Heroi[];
texto: string;
heroiSelecionado: Heroi;

  constructor(
    public navCtrl: NavController,
    public heroisProvider: HeroisProvider,
    public loadingCtrl: LoadingController

  ) {
    //assim se adiciona um comentário - comentário de linha
    /* comentário de bloco-
    pode conter mais de uma linha*/
    /*heroisProvider
    .getHerois()
    .subscribe((herois: Heroi[]) => {
      this.herois = herois;
    });*/
    let loading: Loading = loadingCtrl.create({
      content: "por favor AGUARDE..."
    });
    loading.present();
    heroisProvider
    .getHeroisComTimeout()
    .then( (observable: Observable<Heroi[]>) => {
      observable.subscribe( (herois:Heroi[]) => {
        this.herois =herois;
        loading.dismiss();
      });
    })
  }
 
selecionarHeroi(heroi: Heroi): void {
  //console.log("heroi Selecionado: ", heroi);
  this.heroiSelecionado = heroi;
  this.navCtrl.push(HeroiDetalhePage, {
    heroiclicado: heroi
  });
}
  mostraArray(): void {
    console.log("Meu array alterado", this.herois );
  }

}
