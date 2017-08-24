import React, { PureComponent } from 'react';
import { InputSearchCom } from '../../../bin';

/**
 * This example uses an InputSearchCom add submit
 */
class ExampleInputOnSubmit extends PureComponent {
  state = {
    value: '',
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <p>{value}</p>
        <InputSearchCom onSubmit={(val) => this.setState({ value: val })} />
      </div>
    );
  }
}

export default ExampleInputOnSubmit;
