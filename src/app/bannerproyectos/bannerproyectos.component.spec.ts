import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerproyectosComponent } from './bannerproyectos.component';

describe('BannerproyectosComponent', () => {
  let component: BannerproyectosComponent;
  let fixture: ComponentFixture<BannerproyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerproyectosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
