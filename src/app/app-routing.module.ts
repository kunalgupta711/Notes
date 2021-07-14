import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NoteslistComponent} from './noteslist/noteslist.component';
import {MainlayoutComponent} from './mainlayout/mainlayout.component';
import {NotesComponent} from './notes/notes.component';

const routes: Routes = [
  {path:'',component: MainlayoutComponent, children:[
    {path:'',component: NoteslistComponent},
    {path:':id',component:NotesComponent},
    {path:'new',component:NotesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
