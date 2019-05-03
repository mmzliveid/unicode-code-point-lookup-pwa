// tslint:disable: no-floating-promises

import { async, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TextFieldModule } from '@angular/cdk/text-field';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NoopZgUniRuleLoaderModule, ZawgyiDetectorModule } from '@myanmartools/ng-zawgyi-detector';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                NoopAnimationsModule,
                CommonModule,

                TextFieldModule,
                FlexLayoutModule,
                MatButtonModule,
                MatButtonToggleModule,
                MatCardModule,
                MatIconModule,
                MatInputModule,
                MatToolbarModule,

                ZawgyiDetectorModule,
                NoopZgUniRuleLoaderModule
            ],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should render title in a h1 tag', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement as HTMLElement;
        const ele = compiled.querySelector('h1');
        expect(ele && ele.textContent).toContain('Unicode Code Points Lookup - Myanmar Tools');
    });
});
