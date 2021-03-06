import { shallow } from 'enzyme';
import React from 'react';
import Badge from '../../../components/badge/badge';

describe('Badge', () => {
  it('should return noscript if children and title not provided', () => {
    const wrapper = shallow(
      <Badge />
    );

    expect(wrapper.html()).toEqual(null);
  });

  it('should return content inside container if title not provided', () => {
    const wrapper = shallow(
      <Badge>
        Badge Content
      </Badge>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should return only badge if content not provided', () => {
    const wrapper = shallow(
      <Badge title="Badge title" />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should use position prop if content provided', () => {
    const wrapper = shallow(
      <Badge position="right" title="Badge title">
        Badge Content
      </Badge>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render content without badge when badge is not visible', () => {
    const wrapper = shallow(
      <Badge position="right" title="Badge title" visible={false}>
        Badge Content
      </Badge>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render left arrow', () => {
    const wrapper = shallow(
      <Badge arrow position="right" title="Badge title" />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render right arrow', () => {
    const wrapper = shallow(
      <Badge arrow position="left" title="Badge title" />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render badge without border', () => {
    const wrapper = shallow(
      <Badge border={false} title="Badge title" />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
