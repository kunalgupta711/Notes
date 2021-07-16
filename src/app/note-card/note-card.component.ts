import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input,EventEmitter, AfterViewInit, Output } from '@angular/core';


@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements AfterViewInit {
  @Input() title!: string;
  @Input() body!: string;
  @Input() link!:string;
  @Input() dateCreated!: Date;
  @Input() dateUpdated!: Date;

  @Output('delete') deleteEvent: EventEmitter<void>= new EventEmitter<void>();

  @ViewChild('truncator') truncator!: ElementRef<HTMLElement> 
  @ViewChild('bodyText') bodyText!: ElementRef<HTMLElement> ;
  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    let style= window.getComputedStyle(this.bodyText.nativeElement,null);
    let viewableHeight = parseInt(style.getPropertyValue("height"),10);
    if(this.bodyText.nativeElement.scrollHeight >viewableHeight)
    {
      this.renderer.setStyle(this.truncator.nativeElement, 'display','block');

    }else{
      this.renderer.setStyle(this.truncator.nativeElement, 'display','none');
    }

  }
  onXButtonClick(){
    this.deleteEvent.emit();
  }

}
