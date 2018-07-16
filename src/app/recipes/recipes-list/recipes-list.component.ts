import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('a Test Recipe', 'This is simply a test', 'https://img.taste.com.au/_k6sa3dZ/w720-h480-cfill-q80/taste/2016/11/chicken-and-prosciutto-parmigiana-79468-1.jpeg'),
    new Recipe('a Test Recipe 2', 'This is simply a test 2', 'https://img.taste.com.au/_k6sa3dZ/w720-h480-cfill-q80/taste/2016/11/chicken-and-prosciutto-parmigiana-79468-1.jpeg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
