import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ForModule } from '@rx-angular/template/for';
import { Observable } from 'rxjs';
import { LayerComponent } from './layer/layer.component';
import { StructureService } from './services/structure.service';
import { Layer } from './shared/interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LayerComponent,
    ForModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  
  public layers$: Observable<Layer[]> = inject(StructureService).getData();

  public ngDoCheck(): void {
    console.log(`ngDoCheck app-root`)
  }

  public trackByFn(idx: number, item: Layer): number {
    return item.id;
  }
}
