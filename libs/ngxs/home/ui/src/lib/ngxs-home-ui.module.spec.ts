import { async, TestBed } from '@angular/core/testing';
import { NgxsHomeUiModule } from './ngxs-home-ui.module';

describe('NgxsHomeUiModule', () => {
  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxsHomeUiModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgxsHomeUiModule).toBeDefined();
  });
});
