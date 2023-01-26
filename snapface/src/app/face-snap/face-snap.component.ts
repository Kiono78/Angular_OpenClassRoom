import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent { 
  surname!: string;
  name!: string;
  buttonTitle!: string;
  nbLike!: number;

  ngOnInit()
  {
    this.surname = "Dupont";
    this.name = "Jean-jacques";
    this.buttonTitle = "Like";
    this.nbLike = 0;
  }

  Like()
  {
    if (this.buttonTitle ===  "Like")
    {
      this.nbLike++;
      this.buttonTitle = "Unlike";
    }
    else { this.nbLike--; this.buttonTitle = "Like"}
  }
}
