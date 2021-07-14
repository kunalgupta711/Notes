import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../shared/notes.model';
import { NotesService } from '../shared/notes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  note!: Note;
  noteId!: number;
  new=true;
  constructor(private notesService: NotesService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.note = new Note();
      if (params.id && params.id !="new") {
        this.note = this.notesService.get(params.id);
        this.noteId=params.id;
        this.new = false;
      } else {
        this.new = true;
      }
    })
    
  }
  onSubmit(form: NgForm){
    // this.notesService.add(form.value);
    // this.router.navigateByUrl('/'); 
    if(this.new){
      this.notesService.add(form.value);
    this.router.navigateByUrl('/');
    }else{
      this.notesService.update(this.noteId, form.value.title, form.value.body);
      this.router.navigateByUrl('/');
    }
    
  }
  cancel(){
    this.router.navigateByUrl('/');
  }
}
