
import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Heroi } from '../../app/heroi';

@Component({
    selector:'heroi-detalhe-page',
    templateUrl:'heroi-detalhe.page.html'
})
export class HeroiDetalhePage {

    heroi: Heroi;

    constructor(
        public navParams: NavParams
    ){
        this.heroi = navParams.get("heroiclicado");
        console.log(this.heroi);
    }
}