import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { layers } from '../shared/constants';
import { Layer } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StructureService {

  private data$: BehaviorSubject<Layer[]> = new BehaviorSubject(layers);

  public getData(): Observable<Layer[]> {
    return this.data$;
  }
}
