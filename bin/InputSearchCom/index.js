/**
 * Created by sj on 2017/8/17.
 */
import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';

const InputContent = styled.div`
  display: flex;
`;

const SearchInput = styled.input`
  flex-grow: 1;
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
    this.props.onSubmit(this.state.value);
  }

  render() {
    const { placeholder, onSubmit, onChange } = this.props;
    const { value } = this.state;

    return (
      <InputContent>
        <SearchInput
          placeholder={placeholder === undefined || placeholder === null ? '搜索' : placeholder}
          value={value}
          onChange={(e) => {
            const valueC = e.target.value;
            if (onChange) onChange(valueC);
            this.setState({ value: valueC });
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSubmit(value);
            }
          }}
        />
        { onSubmit && <div onClick={() => this.handleBack()}>Submit</div> }
      </InputContent>
    );
  }
}

InputSearchCom.defaultProps = {
  value: '',
  placeholder: '',
};

InputSearchCom.propTypes = {
  /**
   * value
   */
  value: PropTypes.string,
  /**
   * placeholder
   */
  placeholder: PropTypes.string,
  /**
   * func onChange
   */
  onChange: PropTypes.func,
  /**
   * func onSearch
   */
  onSubmit: PropTypes.func,
};

export default InputSearchCom;
