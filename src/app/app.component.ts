import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { StructureService } from './services/structure.service';
import { Layer } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  
  public layers$: Observable<Layer[]> = inject(StructureService).getData();

  public ngDoCheck(): void {
    console.log(`app-root`)
  }

  public trackByFn(idx: number, item: Layer): number {
    return item.id;
  }
}
