
import {Injectable} from '@angular/core';
import { HEROIS } from './hreois-lista';
import { Heroi } from './heroi';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable ()
export class HeroisProvider {

    constructor (){}

    getHerois(): Observable<Heroi[]> {
        return of (HEROIS);
    }
    getHeroisComTimeout(): Promise<Observable<Heroi[]>>{
        return this.getTimeout().then( () =>{
            return of (HEROIS);
        });
    }

    getTimeout(): Promise<void> {
        return new Promise( (resolve) => {
            setTimeout( () => {
                resolve();
            }, 5000);
        });
    }
}