import { Component, OnInit } from '@angular/core';
import { AdvisorService } from '../advisor.service';
import { Advisor } from '../advisor';

@Component({
  selector: 'app-advisor-list',
  templateUrl: './advisor-list.component.html',
  styleUrls: ['./advisor-list.component.css']
})
export class AdvisorListComponent implements OnInit {
  advisors: Advisor[] = [];

  constructor(private advisorService: AdvisorService) { }

  ngOnInit(): void {
    this.loadAdvisors();
  }
  
  loadAdvisors(): void {
    this.advisorService.getAdvisors().subscribe(data => {
      this.advisors = data;
    });
  }

  deleteAdvisor(id: number): void {
    this.advisorService.deleteAdvisor(id).subscribe(() => {
      this.loadAdvisors();
    });
  }
}
