import { HomeModule } from './home.module';

describe('LandingModule', () => {
  let landingModule: HomeModule;

  beforeEach(() => {
    landingModule = new HomeModule();
  });

  it('should create an instance', () => {
    expect(landingModule).toBeTruthy();
  });
});
