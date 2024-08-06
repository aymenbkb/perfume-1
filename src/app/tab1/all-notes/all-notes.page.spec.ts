import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllNotesPage } from './all-notes.page';

describe('AllNotesPage', () => {
  let component: AllNotesPage;
  let fixture: ComponentFixture<AllNotesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
