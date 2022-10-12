import { Component, OnInit } from '@angular/core';
import {BodiesService} from '../../services/bodies.service';
import {Body} from '../../body';

@Component({
  selector: 'app-bodies',
  templateUrl: './bodies.component.html',
  styleUrls: ['./bodies.component.css']
})
export class BodiesComponent implements OnInit {
  bodies: Body[] = [];
  loaded: boolean = false;

  constructor(private bodiesService: BodiesService) { }

  ngOnInit(): void {
    this.bodiesService.getBodies().subscribe({
      next: (bodies) => {
        if(bodies) {this.bodies = bodies.bodies;}
        this.loaded = true;
      },
      error: (error) => {
        this.loaded = true;
      }
    });
    
  }

}
