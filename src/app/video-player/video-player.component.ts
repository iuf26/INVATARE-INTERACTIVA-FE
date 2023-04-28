import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})

export class VideoPlayerComponent implements OnInit {
  videoLinks: string = "https://www.youtube.com/embed/_qHYdkM_Mi0";

  constructor() {}

  ngOnInit(): void {}
}




