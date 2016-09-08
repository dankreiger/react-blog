import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows a navbar', () => {
    expect(component.find('nav')).to.exist;
  });

  it('has a container', () => {
    expect(component.find('.container')).to.exist;
  });
});
