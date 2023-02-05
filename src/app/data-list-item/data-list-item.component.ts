import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-list-item',
  templateUrl: './data-list-item.component.html',
  styleUrls: ['./data-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataListItemComponent {
  @Input() item: number = 0;

  public ngDoCheck(): void {
    console.log(`app-data-list ${this.item}`)
  }
}
