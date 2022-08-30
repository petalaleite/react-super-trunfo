import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    saveDeck: [],
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
  }

  // salva a carta do deck

  onSaveButtonClick = (obj) => {
    this.setState((state) => ({
      saveDeck: [...state.saveDeck, obj],
    }))

    this.setState({
      cardName: '',
      cardDescription '',
      cardAttr1: '0',
      cardAttr2: '0'
      cardAttr3: '0'
    })
  }
}

export default App;
