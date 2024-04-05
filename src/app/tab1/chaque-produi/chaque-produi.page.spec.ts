import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChaqueProduiPage } from './chaque-produi.page';

describe('ChaqueProduiPage', () => {
  let component: ChaqueProduiPage;
  let fixture: ComponentFixture<ChaqueProduiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChaqueProduiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
