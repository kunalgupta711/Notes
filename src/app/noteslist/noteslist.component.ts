import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/notes.model';
import { NotesService } from '../shared/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noteslist',
  templateUrl: './noteslist.component.html',
  styleUrls: ['./noteslist.component.scss']
})
export class NoteslistComponent implements OnInit {

  cardTitle: string="Title 1";
   notes: Note[] = new Array<Note>();
  constructor(private notesService: NotesService, private router: Router) { }

  ngOnInit(): void {
    this.notes=this.notesService.getAll();
  }

  deleteNote(id: number){
    this.notesService.delete(id);
  }
}
