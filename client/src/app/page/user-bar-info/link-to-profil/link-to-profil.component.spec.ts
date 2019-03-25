import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkToProfilComponent } from './link-to-profil.component';

describe('LinkToProfilComponent', () => {
  let component: LinkToProfilComponent;
  let fixture: ComponentFixture<LinkToProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkToProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkToProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
