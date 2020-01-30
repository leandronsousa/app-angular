import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { tap, switchMap } from 'rxjs/operators';
import { timer } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class MessageComponent implements OnInit {

  message: string;

  visibility = 'hidden';

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.messageEmitter.pipe(
      tap(
        msg => {
          this.message = msg;
          this.visibility = 'visible';
        }
      ),
      switchMap(
        msg => timer(5000)
      )
    ).subscribe(
      timer => this.visibility = 'hidden'
    );
  }

}
