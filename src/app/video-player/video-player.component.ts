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
  @Input() videoLinks: Array<string>;//= ["https://www.youtube.com/embed/_qHYdkM_Mi0","https://www.youtube.com/embed/obkrMiyDrbs","https://www.youtube.com/embed/s_paZpQvca0","https://www.youtube.com/embed/bDnA_coA168"];

  constructor() {}

  ngOnInit(): void {}
}




