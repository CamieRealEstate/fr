import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CumminComponent } from './cummin.component';

describe('CumminComponent', () => {
  let component: CumminComponent;
  let fixture: ComponentFixture<CumminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CumminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CumminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
