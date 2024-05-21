import { Component, OnInit } from '@angular/core';
import { AdvisorService } from '../advisor.service';
import { Advisor } from '../advisor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advisor-create',
  templateUrl: './advisor-create.component.html',
  styleUrls: ['./advisor-create.component.css']
})
export class AdvisorCreateComponent implements OnInit {
  advisor: Advisor = { id: 0, name: '', sin: '', healthStatus: 'Green' };

  constructor(private advisorService: AdvisorService, private router: Router) { }

  ngOnInit(): void {
  }

  createAdvisor(): void {
    this.advisorService.createAdvisor(this.advisor).subscribe(() => {
      this.router.navigate(['/advisors']);
    });
  }
}
