import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messageEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  showSuccessMessage(msg: string) {
    this.messageEmitter.emit(msg);
  }

}
