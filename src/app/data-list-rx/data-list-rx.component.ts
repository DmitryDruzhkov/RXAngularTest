import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ForModule } from '@rx-angular/template/for';
import { Observable } from 'rxjs';
import { DataListItemComponent } from '../data-list-item/data-list-item.component';
import { NumbersService } from '../services/numbers.service';

@Component({
  selector: 'app-data-list-rx',
  standalone: true,
  imports: [
    CommonModule,
    ForModule,
    DataListItemComponent,
  ],
  templateUrl: './data-list-rx.component.html',
  styleUrls: ['./data-list-rx.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataListRxComponent {
  public data$: Observable<number[]> = inject(NumbersService).getData();

  public ngDoCheck(): void {
    console.log(`ngDoCheck app-data-list`)
  }

  public trackByFn(idx: number, item: number): number {
    return item;
  }
}
