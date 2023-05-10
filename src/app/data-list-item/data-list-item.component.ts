import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NotifyDirective } from '../directives/notify.directive';
import { Layer } from '../shared/interfaces';

@Component({
  selector: 'app-data-list-item',
  standalone: true,
  imports: [
    CommonModule,
    NotifyDirective,
  ],
  templateUrl: './data-list-item.component.html',
  styleUrls: ['./data-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataListItemComponent {
  @Input() layer!: Layer;
  @Input() item: number = 0;

  /* public ngDoCheck(): void {
    console.log(`ngDoCheck app-data-list-item ${this.layer?.layer} ${this.item}`)
  } */

  public alert() :void {
    console.log(`alert app-data-list-item ${this.layer?.layer}`);
  }
}
