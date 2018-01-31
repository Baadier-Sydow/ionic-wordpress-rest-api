import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WordpressProvider } from './../../providers/wordpress/wordpress';

@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  post: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public wordpress: WordpressProvider) {
    this.post = this.navParams.get("post");
  }

}
