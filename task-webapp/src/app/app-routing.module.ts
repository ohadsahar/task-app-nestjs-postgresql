
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './core/components/tasks/tasks.component';
import { AuthGuard } from './core/components/auth/auth.guard';


const routes: Routes = [{ path: 'task', component: TaskComponent, canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
