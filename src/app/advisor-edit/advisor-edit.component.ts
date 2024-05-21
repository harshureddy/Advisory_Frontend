import { Component, OnInit, Input } from '@angular/core';
import { AdvisorService } from '../advisor.service';
import { Advisor } from '../advisor';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-advisor-edit',
  templateUrl: './advisor-edit.component.html',
  styleUrls: ['./advisor-edit.component.css']
})
export class AdvisorEditComponent implements OnInit {
  advisor: Advisor | undefined;

  constructor(
    private advisorService: AdvisorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.advisorService.getAdvisor(parseInt(id)).subscribe(data => {
        this.advisor = data;
      });
    }
    
  }

  updateAdvisor(): void {
    if(this.advisor){
      this.advisorService.updateAdvisor(this.advisor).subscribe(() => {
        this.router.navigate(['/advisors']);
      });
    }
    
  }
}
