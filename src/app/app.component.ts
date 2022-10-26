import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .whiteColor{
      color: #fff;
    }
  `]
})
export class AppComponent {
  isClicked = false;
  buttonlabel = 'Display Details';
  counter = 0;
  clicks = [];

  revealSecret(){
    this.counter ++;
    this.clicks.push(this.counter);

    if(this.isClicked === false){
      this.isClicked = true;
      this.buttonlabel = 'Hide Details';
    }
    else{
      this.isClicked = false;
      this.buttonlabel = 'Display Details';
    }
  }

  getBackgroundColor(click){
    return click >= 5 ? 'blue' : 'transparent';
  }
}
