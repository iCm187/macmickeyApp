import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAddressesComponent } from './client-addresses.component';

describe('ClientAddressesComponent', () => {
  let component: ClientAddressesComponent;
  let fixture: ComponentFixture<ClientAddressesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientAddressesComponent]
    });
    fixture = TestBed.createComponent(ClientAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
