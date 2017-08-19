/**
 * Created by sj on 2017/8/17.
 */
import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  width: 100%;
  border: 1px solid #E3E3E3;
  border-radius: 1px;
  height: 32px;
  padding: 0 35px 0 8px;
  outline: none;
  color: #454545;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius:2px;
  &:focus {
    border-color: #0081FF;
    transition: all 500ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  }
`;

class InputSearchCom extends PureComponent {
  state = {
    value: this.props.value,
  }

  handleBack = () => {
    this.props.onSearch(this.state.value);
  }

  render() {
    const { placeholder, onSearch } = this.props;
    const { value } = this.state;

    return (
      <div>
        <SearchInput
          placeholder={placeholder === undefined || placeholder === null ? '搜索' : placeholder}
          value={value}
          onChange={(e) => { this.setState({ value: e.target.value }); }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSearch(value);
            }
          }}
        />
        <div onClick={() => this.handleBack()}>CLick</div>
      </div>
    );
  }
}

InputSearchCom.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
};

export default InputSearchCom;
