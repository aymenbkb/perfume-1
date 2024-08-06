import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChaqueNotePage } from './chaque-note.page';

describe('ChaqueNotePage', () => {
  let component: ChaqueNotePage;
  let fixture: ComponentFixture<ChaqueNotePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChaqueNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
