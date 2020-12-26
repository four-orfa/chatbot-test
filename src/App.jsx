import React from 'react';
import defaultDataset from './dataset'
import './assets/styles/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: [],
      chats: [],
      currentId: [],
      dataset: defaultDataset,
      open: [],
      open: false
    }
  }

  render () {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats />
          <Answers />
        </div>
      </section>
    );
  }
}

export default App;
