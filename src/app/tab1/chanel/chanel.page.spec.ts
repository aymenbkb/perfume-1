import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChanelPage } from './chanel.page';

describe('ChanelPage', () => {
  let component: ChanelPage;
  let fixture: ComponentFixture<ChanelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChanelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
