import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Layer } from '../shared/interfaces';

@Component({
  selector: 'app-layer',
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
