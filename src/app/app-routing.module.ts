import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVideoComponent } from './add-video/add-video.component';
import { ListVideosComponent } from './list-videos/list-video.component';

const routes: Routes = [
  { path: 'add-video', component: AddVideoComponent },
  { path: 'list-videos', component: ListVideosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
