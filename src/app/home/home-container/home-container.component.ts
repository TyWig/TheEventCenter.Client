import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {
  imageUrlsArray: IImage[] = [];

  constructor(
  ) {
    this.createImageUrls();
  }

  ngOnInit() {
  }

  private createImageUrls() {
    const urls = ['../../../assets/images/background.jpg', '../../../assets/images/1.jpg', '../../../assets/images/2.jpg'];
    urls.forEach(url => {
      let image: IImage = {
        url: url
      }
      this.imageUrlsArray.push(image);
    })
  }

}
