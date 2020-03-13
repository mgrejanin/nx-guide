import { async, TestBed } from '@angular/core/testing';
import { AkitaLoginDataAccessModule } from './akita-login-data-access.module';

describe('AkitaLoginDataAccessModule', () => {
    beforeEach(async(async () => {
        await TestBed.configureTestingModule({
            imports: [AkitaLoginDataAccessModule],
        }).compileComponents();
    }));

    it('should create', () => {
        expect(AkitaLoginDataAccessModule).toBeDefined();
    });
});
