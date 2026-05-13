import { Component } from '@angular/core';
import { Certificate } from '../../core/interfaces/certificate';

@Component({
  selector: 'app-certificates',
  imports: [],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css',
})
export class Certificates {
  certificates: Certificate[] = [
    {
      title: 'Full-Stack Web Developer',
      issuer: 'Route Academy',
      description: 'Full-Stack Web Development program at Route Academy covering both frontend and backend development. On the frontend, I worked with HTML, CSS, JavaScript, TypeScript, Bootstrap, Tailwind CSS, and Angular. On the backend, I learned C#, OOP, ASP.NET Core, MVC, SignalR, and SQL Server. The course focused on building real-world web applications and understanding how frontend and backend work together.',
      image: 'certificates/Route-Certificate.jpeg'
    },
    {
      title: 'Data Science',
      issuer: 'ALX',
      description: 'Data Science program at ALX covering data analysis and core machine learning concepts. I worked with SQL, Excel, and Microsoft Power BI for data cleaning, analysis, and visualization. I also learned Python with libraries like Pandas and NumPy, along with regression techniques and basic supervised and unsupervised machine learning. The program also included an introduction to NLP concepts and AWS fundamentals.',
      image: 'certificates/ALX-Certificate.jpeg'
    },
    {
      title: 'Mobile App Developer',
      issuer: 'Ministry of Communications and Information Technology',
      description: 'Mobile App Development program under the Ministry of Communications and Information Technology. The training covered Android development using Java and Kotlin, along with cross-platform development using Flutter. The focus was on building mobile applications with proper UI design, state handling, and working with real-world app structures.',
      image: 'certificates/Egypt-Pioneers-Certificate.jpeg'
    },
    {
      title: 'English',
      issuer: 'Ministry of Communications and Information Technology',
      description: 'English language program under the Ministry of Communications and Information Technology focused on improving communication skills, grammar, listening, and professional English used in work environments.',
      image: 'certificates/Egypt-Pioneers-English-Certificate.jpeg'
    },
    {
      title: 'English Proficiency',
      issuer: 'EF SET',
      description: 'EF SET English proficiency certification that assessed reading and listening skills in English, measuring overall language level based on international standards.',
      image: 'certificates/EFSET-Certificate.jpg'
    }
  ];

  selectedCertificate?: Certificate;

  openCertificate(certificate: any) {
    this.selectedCertificate = certificate;
  }

  closeCertificate() {
    this.selectedCertificate = undefined;
  }
}
