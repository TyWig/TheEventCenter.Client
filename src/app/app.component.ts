import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userState$: Observable<any> = of({
    name: 'Tyler Wigington'
  });
  today = new Date();
  title = 'app';
}
