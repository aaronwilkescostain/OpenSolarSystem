import { Component, OnInit, Input } from '@angular/core';
import {Body} from '../../body';
import { faSignature, faFlag } from '@fortawesome/free-solid-svg-icons';

declare var window: any;

@Component({
  selector: 'app-body-item',
  templateUrl: './body-item.component.html',
  styleUrls: ['./body-item.component.css']
})
export class BodyItemComponent implements OnInit {
  @Input() body: Body;
  id: string;
  faName = faSignature;
  faFlag = faFlag;

  constructor() { }

  ngOnInit(): void {
  }
}
