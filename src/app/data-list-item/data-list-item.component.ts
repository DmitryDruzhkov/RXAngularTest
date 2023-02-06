import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NotifyDirective } from '../directives/notify.directive';

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
  @Input() item: number = 0;

  public ngDoCheck(): void {
    console.log(`ngDoCheck app-data-list ${this.item}`)
  }
}
