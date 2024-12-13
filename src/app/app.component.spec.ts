import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'

describe('AppComponent', (): void => {
    let fixture: ComponentFixture<AppComponent>
    let app: AppComponent

    beforeEach((): void => {
        TestBed.configureTestingModule({
            imports: [AppComponent]
        })

        fixture = TestBed.createComponent(AppComponent)
        app = fixture.componentInstance
    })

    it('should create the app', (): void => {
        expect(app).toBeTruthy()
    })
})
