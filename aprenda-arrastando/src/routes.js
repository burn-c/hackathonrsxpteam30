import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from './components';
import PageHtml from './components/pages/page_html'
import PageCss from './components/pages/page_css'
import PageJavascript from './components/pages/page_javascript'
import toastiError from './components/toastiError';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/page_html" component={PageHtml} />
        <Route path="/page_css" component={PageCss} />
        <Route path="/page_javascript" component={PageJavascript} />
        <Route path="/toasti" component={toastiError} />
       
      </Switch>
    </BrowserRouter>
  );
}
