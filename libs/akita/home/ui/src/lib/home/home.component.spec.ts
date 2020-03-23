import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkitaHomeComponent } from './home.component';

describe('HomeComponent', () => {
    let component: AkitaHomeComponent;
    let fixture: ComponentFixture<AkitaHomeComponent>;

    beforeEach(async(async () => {
        await TestBed.configureTestingModule({
            declarations: [AkitaHomeComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AkitaHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
