import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DataListItemComponent } from '../data-list-item/data-list-item.component';
import { NumbersService } from '../services/numbers.service';
import { Layer } from '../shared/interfaces';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [
    CommonModule,
    DataListItemComponent,
  ],
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataListComponent {
  @Input() layer!: Layer;

  public data$: Observable<number[]> = inject(NumbersService).getData();

  public ngDoCheck(): void {
    console.log(`ngDoCheck app-data-list ${this.layer.layer}`)
  }

  public trackByFn(item: number): number {
    return item;
  }
}
