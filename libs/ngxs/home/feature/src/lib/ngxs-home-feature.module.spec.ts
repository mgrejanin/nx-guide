import { async, TestBed } from '@angular/core/testing';
import { NgxsHomeFeatureModule } from './ngxs-home-feature.module';

describe('NgxsHomeFeatureModule', () => {
    beforeEach(async(async () => {
        await TestBed.configureTestingModule({
            imports: [NgxsHomeFeatureModule],
        }).compileComponents();
    }));

    it('should create', () => {
        expect(NgxsHomeFeatureModule).toBeDefined();
    });
});
