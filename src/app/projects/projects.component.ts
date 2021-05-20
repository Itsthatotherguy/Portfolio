import { Component, OnInit } from '@angular/core';

export interface Project {
  active: boolean;
  name: string;
  repoUrl?: string;
  demoUrl?: string;
  techStack: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      active: false,
      name: 'Blazor Todo App',
      repoUrl:
        'https://portfolio.christiaanvandermerwe.com/projects/blazor-todo-app',
      techStack: [
        'Blazor WebAssembly',
        '.NET Core 5',
        'Entity Framework Core',
        'MSSQL LocalDB',
        'Automapper',
      ],
    },
    {
      active: false,
      name: 'Books Directory - .NET 5 WebAPI',
      repoUrl:
        'https://portfolio.christiaanvandermerwe.com/projects/book-directory-dot-net',
      techStack: [
        '.NET Core 5',
        'Entity Framework Core',
        'Swagger',
        'MSSQL LocalDB',
        'Automapper',
      ],
    },
    {
      active: false,
      name: 'Personal CRM (Frontend)',
      repoUrl: 'https://github.com/Itsthatotherguy/personal-crm-frontend',
      demoUrl:
        'http://personal-crm-cvdm.co.za.s3-website-eu-west-1.amazonaws.com/',
      techStack: [
        'Angular 11',
        'JWTs',
        'LocalStorage',
        'AWS S3',
        'Ng Zorro Ant',
      ],
    },
    {
      active: false,
      name: 'Personal CRM (Backend)',
      repoUrl: 'https://github.com/Itsthatotherguy/personal-crm-backend',
      techStack: [
        'NestJS (NodeJS)',
        'TypeORM',
        'PostgreSQL',
        'PassportJS',
        'JWTs',
        'AWS Elastic Beanstalk',
        'AWS RDS',
      ],
    },
    {
      active: false,
      name: 'Notetaking App (Frontend)',
      repoUrl: 'https://github.com/Itsthatotherguy/notetaking-app-frontend',
      techStack: ['Angular 11', 'Ng Ant Zorro', 'JWT', 'LocalStorage'],
    },
    {
      active: false,
      name: 'Notetaking App (Backend)',
      repoUrl: 'https://github.com/Itsthatotherguy/notetaking-app-backend',
      techStack: [
        'NestJS (NodeJS)',
        'TypeORM',
        'PostgreSQL',
        'PassportJS',
        'JWTs',
      ],
    },
    {
      active: false,
      name: 'Tax Calculator',
      repoUrl: 'https://github.com/Itsthatotherguy/tax-calculator',
      demoUrl: 'https://itsthatotherguy.github.io/tax-calculator/',
      techStack: ['React', 'Ant Design'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
