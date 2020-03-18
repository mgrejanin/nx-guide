import { async, TestBed } from '@angular/core/testing';
import { NgxsLoginDataAccessModule } from './ngxs-login-data-access.module';

describe('NgxsLoginDataAccessModule', () => {
    beforeEach(async(async () => {
        await TestBed.configureTestingModule({
            imports: [NgxsLoginDataAccessModule],
        }).compileComponents();
    }));

    it('should create', () => {
        expect(NgxsLoginDataAccessModule).toBeDefined();
    });
});
