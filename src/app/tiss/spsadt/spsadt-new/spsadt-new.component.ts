import { Component, OnInit } from '@angular/core';
import { SpsadtService } from '../spsadt.service';
import { Spsadt } from '../spsadt.model';

@Component({
  selector: 'app-spsadt-new',
  templateUrl: './spsadt-new.component.html',
  styleUrls: ['./spsadt-new.component.scss']
})
export class SpsadtNewComponent implements OnInit {

  spsadt: Spsadt;

  constructor(private spsadtService: SpsadtService) { }

  ngOnInit() {

  }

}
