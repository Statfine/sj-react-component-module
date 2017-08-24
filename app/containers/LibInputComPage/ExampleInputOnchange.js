import React, { PureComponent } from 'react';
import { InputSearchCom } from '../../../bin';


/**
 * This example uses an InputSearchCom add onChange
 */
class ExampleInputOnchange extends PureComponent {

  state = {
    value: 'hello',
    placeholder: '搜索',
  }

  render() {
    const { value, placeholder } = this.state;

    return (
      <div>
        <p>{value}</p>
        <InputSearchCom value={value} placeholder={placeholder} onChange={(val) => this.setState({ value: val })} />
      </div>
    );
  }
}

export default ExampleInputOnchange;
