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
import marked from 'marked';
import InputSearchComCode from '!raw-loader!../../../bin/InputSearchCom';
import { InputSearchCom } from '../../../bin';

export default class LibInputComPage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const text = `\`\`\`js
${InputSearchComCode}
    \`\`\``;
    return (
      <div>
        <InputSearchCom value={'here'} placeholder="搜搜" onSearch={(value) => console.log(value)} />
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: marked(text) }}
        />
      </div>
    );
  }
}
