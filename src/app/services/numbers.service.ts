import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { dataSource } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  /* private data$: BehaviorSubject<number[]> = new BehaviorSubject(dataSource); */
  private data: WritableSignal<number[]> = signal(dataSource);
  private maxValue: number = 100;

  /* public getData(): Observable<number[]> {
    return this.data$;
  } */

  public getData(): Signal<number[]> {
    return this.data;
  }

  /* public pushData(): void {
    const newValue: number = Math.floor(Math.random() * this.maxValue);
    const currentValue: number[] = this.data$.getValue();
    currentValue.push(newValue)
    this.data$.next(currentValue);
  } */

  public pushData(): void {
    const newValue: number = Math.floor(Math.random() * this.maxValue);
    const currentValue: number[] = this.data();
    currentValue.push(newValue)
    this.data.set(currentValue);
  } 

  /* public popData(): void {
    const currentValue: number[] = this.data$.getValue();
    currentValue.pop();
    this.data$.next(currentValue);
  } */

  public popData(): void {
    const currentValue: number[] = this.data();
    currentValue.pop();
    this.data.set(currentValue);
  } 

}
