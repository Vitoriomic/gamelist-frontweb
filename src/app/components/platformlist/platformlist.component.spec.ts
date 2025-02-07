import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformlistComponent } from './platformlist.component';

describe('PlatformlistComponent', () => {
  let component: PlatformlistComponent;
  let fixture: ComponentFixture<PlatformlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
