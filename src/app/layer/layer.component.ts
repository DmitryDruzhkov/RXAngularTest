import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ForModule } from '@rx-angular/template/for';
import { CounterRxComponent } from '../counter-rx/counter-rx.component';
import { CounterComponent } from '../counter/counter.component';
import { DataListRxComponent } from '../data-list-rx/data-list-rx.component';
import { DataListComponent } from '../data-list/data-list.component';
import { NotifyDirective } from '../directives/notify.directive';
import { Layer } from '../shared/interfaces';

@Component({
  selector: 'app-layer',
  standalone: true,
  imports: [
    CommonModule,
    ForModule,
    MatCardModule,
    DataListComponent,
    DataListRxComponent,
    CounterComponent,
    CounterRxComponent,
    NotifyDirective,
  ],
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayerComponent {
  @Input() layer!: Layer;

  public ngDoCheck(): void {
    console.log(`ngDoCheck app-layer ${this.layer?.layer}`);
  }
}
