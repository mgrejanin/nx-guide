import { async, TestBed } from '@angular/core/testing';
import { NgxsLoginFeatureModule } from './ngxs-login-feature.module';

describe('NgxsLoginFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsLoginFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgxsLoginFeatureModule).toBeDefined();
  });
});
