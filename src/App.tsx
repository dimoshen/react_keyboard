import { Component } from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends Component<{}, State> {
  state: State = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyStateHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyStateHandler);
  }

  keyStateHandler = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: `The last pressed key is [${event.key}]`,
    });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          { !pressedKey
            ? 'Nothing was pressed yet'
            : pressedKey}
        </p>
      </div>
    );
  }
}