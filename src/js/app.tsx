import * as React from 'react';

export interface AppProps { title: string; }

export class App extends React.Component<AppProps, {}> {
    public render() {
        return <h1>{this.props.title}</h1>;
    }
}
