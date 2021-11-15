import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendQuotationComponent } from './send-quotation.component';

describe('SendQuotationComponent', () => {
  let component: SendQuotationComponent;
  let fixture: ComponentFixture<SendQuotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendQuotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
