import React from 'react';
import { shallow } from 'enzyme';
import  LoginTest  from '.././components/accounts/Login';



describe('LoginTest', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<LoginTest debug />);

    expect(component).toMatchSnapshot();
  });
});
