import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TambahorderanPage } from './tambahorderan.page';

describe('TambahorderanPage', () => {
  let component: TambahorderanPage;
  let fixture: ComponentFixture<TambahorderanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TambahorderanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
