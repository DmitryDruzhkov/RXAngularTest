import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ForModule } from '@rx-angular/template/for';
import { CounterComponent } from '../counter/counter.component';
import { DataListRxComponent } from '../data-list-rx/data-list-rx.component';
import { NotifyDirective } from '../directives/notify.directive';
import { Layer } from '../shared/interfaces';

@Component({
  selector: 'app-layer',
  standalone: true,
  imports: [
    CommonModule,
    ForModule,
    MatButtonModule,
    MatCardModule,
    DataListRxComponent,
    CounterComponent,
    NotifyDirective,
  ],
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayerComponent {
  @Input() layer!: Layer;

  public ngDoCheck(): void {
    console.log(`ngDoCheck ${this.layer?.layer}`);
  }
}
