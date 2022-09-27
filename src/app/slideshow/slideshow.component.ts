import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['macbook.jpg', 'office.jpg', 'table.jpg'];
  headlines = ['Bring engineering to the next level of experience', 'Born to learn', 'Graditude of the code world'];
  currentImage = 0;
  showImage = true;

ngOnInit(){
  this.updateImage();
}

  updateImage() {
    
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }

}
