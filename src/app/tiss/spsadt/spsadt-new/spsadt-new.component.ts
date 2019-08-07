import { Component, OnInit } from '@angular/core';
import { SpsadtService } from '../spsadt.service';

@Component({
  selector: 'app-spsadt-new',
  templateUrl: './spsadt-new.component.html',
  styleUrls: ['./spsadt-new.component.scss']
})
export class SpsadtNewComponent implements OnInit {

  constructor(private spsadtService: SpsadtService) { }

  ngOnInit() {

  }

}
