import { Component } from '@angular/core';
import { Skill } from '../../core/interfaces/skill';
@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills: Skill[] = [
    {
      title: 'Languages',
      items: 'C#, JavaScript, TypeScript, Python, SQL'
    },
    {
      title: 'Backend Development',
      items: 'ASP.NET Core, Node.js, REST APIs, JWT Auth, Entity Framework Core, LINQ, Clean Architecture, Onion Architecture, Error Handling'
    },
    {
      title: 'Frontend Development',
      items: 'Angular, ReactJS, HTML, CSS, Tailwind CSS, Bootstrap'
    },
    {
      title: 'Databases & Caching',
      items: 'SQL Server, MongoDB, Redis'
    },
    {
      title: 'Real-Time & Performance',
      items: 'SignalR, Socket.io, Background Services, Caching Strategies, Query Optimization'
    },
    {
      title: 'Tools & DevOps',
      items: 'Git, GitHub, Visual Studio, VS Code, Postman, Docker, Docker Compose'
    },
    {
      title: 'Cloud & AWS',
      items: 'EC2, Elastic Beanstalk, ECS, ECR, S3'
    }
  ];
}
