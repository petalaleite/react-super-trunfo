import React from 'react';
import Card from 'react-bootstrap/Card';
import PropType from 'prop-types';
import { ListGroup } from 'react-bootstrap';

class CardComponent extends React.Component {
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
        <Card style={{ width: '450px'}}>
          <Card.Title className="text-center">{cardName}</Card.Title>
          <Card.Img  src={ cardImage } alt={ cardName } />
          <Card.Body>
          <Card.Text>{cardDescription}</Card.Text>
          <ListGroup>
          <ListGroup.Item>{ `🗡️ Att: ${cardAttr1}` }</ListGroup.Item>
          <ListGroup.Item>{ `🛡️ Def: ${cardAttr2}` }</ListGroup.Item>
          <ListGroup.Item>{ `⬆️ Lvl: ${cardAttr3}` }</ListGroup.Item>
          </ListGroup>
          <p>{cardRare}</p>
          {cardTrunfo && <p className="text-center">Super Trunfo</p>}
          </Card.Body>
        </Card>
      </section>
    );
  }
}

CardComponent.propTypes = {
  cardName: PropType.string,
  cardDescription: PropType.string,
  cardAttr1: PropType.string,
  cardAttr2: PropType.string,
  cardAttr3: PropType.string,
  cardImage: PropType.string,
  cardRare: PropType.string,
  cardTrunfo: PropType.bool,
}.isRequired;

export default CardComponent;
