import React from 'react';
import Button from 'react-bootstrap/Button'
import CardComponent from './components/CardComponent';
import FormComponent from './components/FormComponent';

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

  // save card in the deck

  onSaveButtonClick = (obj) => {
    this.setState((state) => ({
      saveDeck: [...state.saveDeck, obj],
    }))

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
    })
  }

  deleteCard = (deckCard) => {
    const { cardName } = deckCard;
    const { saveDeck } = this.state;
    const cardFilter = saveDeck.filter((card) => card.cardName !== cardName);
    const cardSome = cardFilter.some((card) => card.superTrunfo === true);
    
    this.setState({
      saveDeck: cardFilter, hasTrunfo: cardSome,
    })
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => {
      const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    } = this.state;

    // validate saving cards button
    const ATRIBUTE_LIMIT = 90;
    const SUM_ATRIBUTE_LIMIT = 210;
    const attributeSum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= SUM_ATRIBUTE_LIMIT;

    if (cardName
      && cardDescription
      && cardImage
      && cardRare
      && Number(cardAttr1) >= 0 && Number(cardAttr1) <= ATRIBUTE_LIMIT
      && Number(cardAttr2) >= 0 && Number(cardAttr2) <= ATRIBUTE_LIMIT
      && Number(cardAttr3) >= 0 && Number(cardAttr3) <= ATRIBUTE_LIMIT
      && attributeSum) {
        this.setState({
          isSaveButtonDisabled: false,
        })
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        })
      }

      // super trunfo validation
      if (cardTrunfo) {
        this.setState({
          cardTrunfo: true,
          hasTrunfo: true,
        })
      }
  })
  }

  render() {
    const {
      saveDeck,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    const { onInputChange, onSaveButtonClick, deleteCard } = this;

    return (
      <>
        <h1>Super Trunfo Deck</h1>
        <FormComponent 
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ onInputChange }
          onSaveButtonClick={ onSaveButtonClick} />

          <CardComponent
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo } />

          {
            saveDeck.map((deckCard) => (
              <>
                <CardComponent
                  key={ deckCard.cardName }
                  cardName={ deckCard.cardName }
                  cardDescription={ deckCard.cardDescription }
                  cardAttr1={ deckCard.cardAttr1 }
                  cardAttr2={ deckCard.cardAttr2 }
                  cardAttr3={ deckCard.cardAttr3 }
                  cardImage={ deckCard.cardImage }
                  cardRare={ deckCard.cardRare }
                  cardTrunfo={ deckCard.cardTrunfo }
                  />

                <Button
                  variant="danger"
                  type='button'
                  onClick={ () => deleteCard(deckCard) } >
                    Delete
                  </Button>
              </>
            ))
          }
      </>
    )
  }
}

export default App;
