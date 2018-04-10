import { Component, Input} from '@angular/core';
import { Heroi } from '../../heroi';

@Component ({
    selector: 'heroi-detalhe-component',
    templateUrl: 'heroi-detalhe.component.html'
})
export class HeroiDetalheComponent {
    @Input() heroi: Heroi;

    constructor(){}
}