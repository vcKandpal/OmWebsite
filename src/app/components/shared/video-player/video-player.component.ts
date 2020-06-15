import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
})
export class VideoPlayerComponent implements OnInit {
  safeSrc: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/ueVAIuU2KQk'
    );
  }

  ngOnInit(): void {}

  // $(function () {
  //   // Auto play modal video
  //   $(".video").click(function () {
  //     var theModal = $(this).data("target"),
  //       videoSRC = $(this).attr("data-video"),
  //       videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
  //     $(theModal + ' iframe').attr('src', videoSRCauto);
  //     $(theModal + ' button.close').click(function () {
  //       $(theModal + ' iframe').attr('src', videoSRC);
  //     });
  //   });
  // });
}
