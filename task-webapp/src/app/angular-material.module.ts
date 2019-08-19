import { NgModule } from '@angular/core';
import { MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatDialogModule],
  exports: [MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatDialogModule]
})
export class AngularMaterialModule {

}
