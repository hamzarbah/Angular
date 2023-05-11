import { Component } from '@angular/core';
import { VideoService } from '../videos.service';
import { Video } from '../Video.module';

@Component({
  selector: 'app-list-videos',
  templateUrl: './list-video.component.html',
  styleUrls: ['./list-video.component.css']
})
export class ListVideosComponent {
  videos: Video[] = [];

  ;

  constructor(private videoService: VideoService) { }

  searchVideos(genre: string) {
    this.videoService.getVideos()
      .subscribe(videos => {
        this.videos = videos.filter(video => video.genre === genre);
      });
  }
}
