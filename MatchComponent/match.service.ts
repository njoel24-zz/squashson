import { Injectable } from 'angular2/core';
import { Matches } from './mock-matches';
import {Observable} from "rxjs/Observable";
import {Subscriber} from "rxjs";

@Injectable()
export class MatchService {

    observableData: Observable<any>;

    getMatches() {
        return Promise.resolve(Matches);
    }

    setObservable(winner: number){
        this.observableData = new Observable((observer:Subscriber<number>)=>{
        observer.next(winner);
        console.log("this observable is being subscribed to");
    });
  }

    setObservable2(value: string){
        this.observableData = new Observable((observer:Subscriber<string>)=>{
        observer.next(value);
        console.log("this observable is being subscribed to");
    });
  }
}
