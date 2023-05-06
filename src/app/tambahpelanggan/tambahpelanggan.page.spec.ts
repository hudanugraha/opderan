import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TambahpelangganPage } from './tambahpelanggan.page';

describe('TambahpelangganPage', () => {
  let component: TambahpelangganPage;
  let fixture: ComponentFixture<TambahpelangganPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TambahpelangganPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
