import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  url: string;
  msg: string;
  errorMsg: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
      this.route
        .data
        .subscribe(params => {
          this.url = params['url'];
          this.invokeUrl();
        });
  }

  invokeUrl() {
    this.msg = null;
    this.errorMsg = null;
    this.http.get<Message>(this.url).subscribe(
      response => this.msg = response.what,
      error => this.errorMsg = error.message);
  }
}

class Message {
  what:string
}
