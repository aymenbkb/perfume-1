import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  @ViewChild('scrollWrapper', { static: true }) scrollWrapper!: ElementRef;
  progressValue: number = 0;
  private scrollInterval: any;
  private totalWidth: number = 0;
  private itemWidth: number = 0;
  private pageIndex: number = 0;
  private pagesCount: number = 0;
  private scrollStep: number = 1;
  private scrollDelay: number = 3000;
  private manualScroll: boolean = false;
  private lastScrollTime: number = 0;
  private manualScrollDelay: number = 5000;

  pages = [
    {
      title: "Vous cherchez un parfum ?",
      image: "assets/home/1-removebg-preview.png",
      description: "Partagez qui vous êtes, ce que vous aimez ou les goûts de la personne à qui vous souhaitez offrir un parfum"
    },
    {
      title: "Une sélection d'experts",
      image: "assets/home/2-removebg-preview.png",
      description: "Découvrez les parfums qui vous conviennent le mieux parmi plusieurs milliers et sélectionnez ceux que vous souhaitez tester en magasin."
    },
    {
      title: "Où que tu sois",
      image: "assets/home/3-removebg-preview.png",
      description: "Des grandes chaînes aux petits détaillants de niche, choisissez votre détaillant de parfums à proximité et trouvez la perle rare !"
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
    this.startAutoScroll();
  }

  updateDimensions() {
    const wrapper = this.scrollWrapper.nativeElement as HTMLElement;
    this.itemWidth = wrapper.clientWidth;
    this.pagesCount = this.pages.length;
    this.totalWidth = this.itemWidth * this.pagesCount;
    this.updateProgress();
  }

  updateProgress() {
    const wrapper = this.scrollWrapper.nativeElement as HTMLElement;
    const scrollLeft = wrapper.scrollLeft;
    const itemWidth = this.itemWidth;

    const currentIndex = Math.round(scrollLeft / itemWidth);
    this.pageIndex = currentIndex;

    this.progressValue = (currentIndex + 1) / this.pagesCount;
  }

  startAutoScroll() {
    this.scrollInterval = setInterval(() => {
      if (this.manualScroll && Date.now() - this.lastScrollTime < this.manualScrollDelay) {
        return;
      }
      this.manualScroll = false;

      const wrapper = this.scrollWrapper.nativeElement as HTMLElement;
      const maxScrollLeft = this.totalWidth - wrapper.clientWidth;

      this.pageIndex = (this.pageIndex + this.scrollStep) % this.pagesCount;
      const targetScrollLeft = this.pageIndex * this.itemWidth;

      wrapper.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      });

      this.updateProgress();

      if (this.pageIndex === this.pagesCount - 1) {
        setTimeout(() => {
          this.router.navigate(['/filter']);
        }, this.scrollDelay);
      }
    }, this.scrollDelay);
  }

  onScroll() {
    this.updateProgress();
    this.manualScroll = true;
    this.lastScrollTime = Date.now();
  }

  ngOnDestroy() {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }
}
