import { TestBed } from '@angular/core/testing';

import { ToolbarGeneratorService } from './toolbar-generator.service';

describe('ToolbarServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToolbarServiceService = TestBed.get(ToolbarServiceService);
    expect(service).toBeTruthy();
  });
});
