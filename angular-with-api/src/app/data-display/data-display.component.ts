import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.css'
})
export class DataDisplayComponent implements OnInit {

  httpClient = inject(HttpClient);
  urlImg = '';

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.httpClient.get('https://dog.ceo/api/breeds/image/random').subscribe((data:any) =>{
      this.urlImg = data.message;
    });
  }
}
