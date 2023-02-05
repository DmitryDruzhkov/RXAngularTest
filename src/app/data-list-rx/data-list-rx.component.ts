import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { NumbersService } from '../services/numbers.service';

@Component({
  selector: 'app-data-list-rx',
  templateUrl: './data-list-rx.component.html',
  styleUrls: ['./data-list-rx.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataListRxComponent {
  public data$: Observable<number[]> = inject(NumbersService).getData();

  public ngDoCheck(): void {
    console.log(`app-data-list`)
  }

  public trackByFn(idx: number, item: number): number {
    return item;
  }
}
