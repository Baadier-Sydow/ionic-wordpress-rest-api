import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WordpressProvider } from './../../providers/wordpress/wordpress';
import { CategoryListPage } from './../../pages/category-list/category-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categories: any;

  constructor(public navCtrl: NavController, public wordpress: WordpressProvider) {

  }

  ionViewDidLoad(){
   this.wordpress.retrieveCategories().subscribe(results => {
     this.categories = results;
   });
  }

  loadCategory(id: number){
    this.navCtrl.push(CategoryListPage, {
      categoryId: id
    });
  }

}
