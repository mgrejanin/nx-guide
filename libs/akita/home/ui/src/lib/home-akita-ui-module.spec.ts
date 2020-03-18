import { async, TestBed } from '@angular/core/testing';
import { AkitaHomeUiModule } from './home-akita-ui-module';

describe('AkitaHomeUiModule', () => {
    beforeEach(async(async () => {
        await TestBed.configureTestingModule({
            imports: [AkitaHomeUiModule],
        }).compileComponents();
    }));

    it('should create', () => {
        expect(AkitaHomeUiModule).toBeDefined();
    });
});
