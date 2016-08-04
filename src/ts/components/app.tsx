import * as React from 'react';

import { InteractiveColorGrid } from 'containers/interactive-color-grid';

export interface AppProps { }

export class App extends React.Component<AppProps, {}> {
    public render() {
        return <InteractiveColorGrid></InteractiveColorGrid>;
    }
}
