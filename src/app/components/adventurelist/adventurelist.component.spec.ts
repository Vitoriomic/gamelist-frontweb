import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventurelistComponent } from './adventurelist.component';

describe('AdventurelistComponent', () => {
  let component: AdventurelistComponent;
  let fixture: ComponentFixture<AdventurelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventurelistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdventurelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
