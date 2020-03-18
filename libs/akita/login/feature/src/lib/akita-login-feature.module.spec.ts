import { async, TestBed } from '@angular/core/testing';
import { AkitaLoginFeatureModule } from './akita-login-feature.module';

describe('AkitaLoginFeatureModule', () => {
  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [AkitaLoginFeatureModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AkitaLoginFeatureModule).toBeDefined();
  });
});
