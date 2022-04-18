import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/curriculum';
import { CurriculumService } from '../../services/curriculum.service';

@Component({
  selector: 'section.skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Array<Skill> = [];

  constructor(private curriculumService: CurriculumService) {
  }

  ngOnInit() {
    this.curriculumService.getCv().subscribe(cv => {
      this.skills = cv.skills
    })
  }

}
