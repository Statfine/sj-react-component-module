/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PureComponent } from 'react';
import CodeExample from 'components/CodeExample';
import PropTypeDescription from 'components/PropTypeDescription';

import inputSearchComCode from '!raw-loader!../../../bin/InputSearchCom';

import exampleInputCode from '!raw-loader!./ExampleInput';
import exampleInputOnchangeCode from '!raw-loader!./ExampleInputOnchange';
import exampleInputOnSubmitCode from '!raw-loader!./ExampleInputSubmit';

import ExampleInput from './ExampleInput';
import ExampleInputOnchange from './ExampleInputOnchange';
import ExampleInputOnSubmit from './ExampleInputSubmit';

export default class LibInputComPage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <CodeExample
          code={exampleInputCode}
          title="Simple example"
        >
          <ExampleInput />
        </CodeExample>
        <CodeExample
          code={exampleInputOnchangeCode}
          title="example callback change"
        >
          <ExampleInputOnchange />
        </CodeExample>
        <CodeExample
          code={exampleInputOnSubmitCode}
          title="example callback submit"
        >
          <ExampleInputOnSubmit />
        </CodeExample>
        <PropTypeDescription code={inputSearchComCode} />
      </div>
    );
  }
}
