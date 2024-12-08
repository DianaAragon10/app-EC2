import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-prueba-pipe',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './prueba-pipe.component.html',
  styleUrl: './prueba-pipe.component.css'
})
export class PruebaPipeComponent {

}
