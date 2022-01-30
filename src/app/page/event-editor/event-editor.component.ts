import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/model/event';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {

  event: Event = new Event;

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) {
      this.activatedRoute.params.subscribe(
        params =>
          this.eventService.get(params['id']).forEach(event => this.event = event)
      );}

  ngOnInit(): void {
  }

  onUpdate(form: NgForm){
    const event = form.value;
    this.eventService.update(event).subscribe(
      event => this.router.navigate(['/','events']),
      err => console.error(err))

  }

}
