import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  mastery: number;
}

@Component({
  selector: 'app-skills-tab-pane',
  templateUrl: './skills-tab-pane.component.html',
})
export class SkillsTabPaneComponent implements OnInit {
  javascriptSkills: Skill[] = [
    { name: 'Typescript', mastery: 75 },
    { name: 'Javascript', mastery: 75 },
    { name: 'NestJS', mastery: 75 },
    { name: 'NodeJS', mastery: 75 },
    { name: 'Angular', mastery: 75 },
    { name: 'React', mastery: 75 },
    { name: 'Redux', mastery: 45 },
    { name: 'TypeORM', mastery: 75 },
    { name: 'Ant Design', mastery: 85 },
  ];

  dotnetSkills: Skill[] = [
    { name: '.NET Core', mastery: 50 },
    { name: '.NET 5', mastery: 30 },
    { name: 'Entity Framework Core', mastery: 40 },
    { name: 'Automapper', mastery: 40 },
    { name: 'Blazor', mastery: 50 },
    { name: 'Fluent Validation', mastery: 30 },
  ];

  generalSkills: Skill[] = [
    { name: 'OpenAPI Specification', mastery: 60 },
    { name: 'Domain-driven design', mastery: 50 },
    { name: 'Problem-solving', mastery: 70 },
    { name: 'Research', mastery: 70 },
    { name: 'Autonomy', mastery: 70 },
  ];

  constructor() {}

  ngOnInit() {}
}
