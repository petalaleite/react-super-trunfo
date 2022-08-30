import React from 'react';
import PropType from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <section>
        <h1>Card Preview</h1>
        <div>
          <h2 >{cardName}</h2>
          <img  src={ cardImage } alt={ cardName } />
          <p>{cardDescription}</p>
          <p>{cardAttr1}</p>
          <p>{cardAttr2}</p>
          <p>{cardAttr3}</p>
          <p>{cardRare}</p>
          {cardTrunfo && <p>Super Trunfo</p>}
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropType.string,
  cardDescription: PropType.string,
  cardAttr1: PropType.string,
  cardAttr2: PropType.string,
  cardAttr3: PropType.string,
  cardImage: PropType.string,
  cardRare: PropType.string,
  cardTrunfo: PropType.bool,
}.isRequired;

export default Card;
