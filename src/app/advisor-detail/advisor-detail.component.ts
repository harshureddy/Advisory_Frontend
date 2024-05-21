import { Component, OnInit, Input } from '@angular/core';
import { Advisor } from '../advisor';

@Component({
  selector: 'app-advisor-detail',
  templateUrl: './advisor-detail.component.html',
  styleUrls: ['./advisor-detail.component.css']
})
export class AdvisorDetailComponent implements OnInit {
  @Input() advisor: Advisor | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
