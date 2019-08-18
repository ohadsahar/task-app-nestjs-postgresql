import { NgModule } from '@angular/core';
import { MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule],
  exports: [MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule]
})
export class AngularMaterialModule {

}
