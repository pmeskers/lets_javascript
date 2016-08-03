import * as React from 'react';
import { ColorGrid } from 'components/color-grid';

export interface AppProps { title: string; }

export class App extends React.Component<AppProps, {}> {
    public render() {
        return <ColorGrid></ColorGrid>;
    }
}
