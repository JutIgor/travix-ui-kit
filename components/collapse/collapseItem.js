import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { getClassNamesWithMods } from '../_helpers';

/**
 * Collapse item component
 */
class CollapseItem extends Component {
  handleItemClick = (e) => {
    const { onClick, id } = this.props;

    if (typeof onClick === 'function') {
      onClick(e, id);
    }
  };

  render() {
    const {
      id,
      isActive,
      title,
      children,
      onClick, // eslint-disable-line no-unused-vars
      iconPosition,
      labelProps = {},
      ...otherProps
    } = this.props;
    const mods = {
      active: isActive,
    };
    return (
      <div {...otherProps} className={getClassNamesWithMods('ui-collapse-item', mods)}>
        <button
          {...labelProps}
          aria-controls={id}
          aria-expanded={isActive}
          className={
            `ui-collapse__label ${getClassNamesWithMods('ui-collapse__label--icon_position', [iconPosition])}`
          }
          onClick={this.handleItemClick}
          type="button"
        >
          <span className="ui-collapse__label-icon"/>
          <span className="ui-collapse__label-text">{title}</span>
        </button>
        <div
          aria-hidden={!isActive}
          className="ui-collapse-item__content"
          id={id}
        >
          {children}
        </div>
      </div>
    );
  }
}

CollapseItem.propTypes = {
  /**
   * The collapse should contains CollapseItem components
   */
  children: PropTypes.node.isRequired,
  /**
   * Determine whether a CollapseItem is collapsed or not
   */
  isActive: PropTypes.bool,
  /**
   * Unique id for collapse item.
   */
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  /**
   * Specify a function that will be called when a user click on label
   */
  onClick: PropTypes.func,
  /**
   * The CollapseItem's title
   */
  title: PropTypes.node.isRequired,
  /**
   * Determine on which side of the block the icon is shown. On the left by default
   */
  iconPosition: PropTypes.oneOf(['right', 'left']),
  /**
   * Specify props for label
   */
  labelProps: PropTypes.object,
};

CollapseItem.defaultProps = {
  isActive: false,
  iconPosition: 'left',
  onClick: null,
};

export default CollapseItem;
