import { async, TestBed } from '@angular/core/testing';
import { SharedLoginUiModule } from './shared-login-ui.module';

describe('SharedLoginUiModule', () => {
  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedLoginUiModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedLoginUiModule).toBeDefined();
  });
});
