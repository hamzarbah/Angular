import { Component } from '@angular/core';
import { Video } from '../video.service';
import { VideoService } from '../videos.service';

@Component({
  selector: 'app-create-video',
  templateUrl: './create-video.component.html',
  styleUrls: ['./create-video.component.css']
})
export class CreateVideoComponent {
  video: Video = new Video();

  constructor(private VideoService: VideoService) { }

  onSubmit() {
    this.VideoService.createVideo(this.video).subscribe(
      video => {
        console.log('La nouvelle vidéo a été créée :', video);
        this.video = new Video();
      },
      error => console.error(error)
    );
  }
}
