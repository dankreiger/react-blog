import { renderComponent , expect } from '../test_helper';
import Navbar from '../../src/components/navbar';

describe('PostsIndex', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Navbar);
  });


  it("has a brand logo that says 'Blog'", () => {
    expect(component.find('.navbar-brand')).to.contain('Blog');
  });

});
