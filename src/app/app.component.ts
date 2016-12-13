import { Component, OnInit, EventEmitter, Input, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { TvShow } from './model/tvshow.model';
import { TvShowService } from './service/tvshow.service';
import { EmitterService } from './service/emitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tv Series Catalog';
  shows: TvShow[];

  constructor(private tvshowService: TvShowService) { }

  private show = new TvShow('',0,'','',0,'','');

  loadTvShows() {
    this.tvshowService.getTvShows()
      .subscribe(show => {
        this.shows = show;
      },
      err => {
        console.log('this is an error', err);
      })
  }

  submitNew() {
    let newOperation:Observable<TvShow[]>;

    newOperation = this.tvshowService.addTvShow(this.show)

    newOperation.subscribe(shows => {
      // Emit list event
      EmitterService.get(this.title).emit(shows);
      console.log('done...', shows)
      // Empty model
      this.show = new TvShow('',0,'','',0,'','');
    }, err => {
      console.log('Err...', err);
    })
    console.log('hit this', this.show);
  }

  OnChanges() { }

  ngOnInit() {
    this.loadTvShows();
  }
}
