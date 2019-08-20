import { NgModule } from '@angular/core';
import { MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatDialogModule, MatDividerModule} from '@angular/material';

@NgModule({
  imports: [MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatDialogModule, MatDividerModule],
  exports: [MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatDialogModule, MatDividerModule]
})
export class AngularMaterialModule {

}
