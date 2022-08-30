import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import PropType from 'prop-types';

class FormComponent extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      hasTrunfo,
    } = this.props;

    return (
        <Form>
          <Form.Label htmlFor="name-input">
            Name
            <input
              name="cardName"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
            />
          </Form.Label>
          <Form.Label htmlFor="description-input">
            Description
            <textarea
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </Form.Label>
          <Form.Label htmlFor="attr1-input">
            <input
              name="cardAttr1"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
            Attack
          </Form.Label>
          <Form.Label htmlFor="attr2-input">
            <input
              name="cardAttr2"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
            Defense
          </Form.Label>
          <Form.Label htmlFor="attr3-input">
            <input
              name="cardAttr3"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
            Attr3
          </Form.Label>
          <Form.Label htmlFor="image-input">
            Image
            <input
              name="cardImage"
              type="text"

              value={ cardImage }
              onChange={ onInputChange }
            />
          </Form.Label>
          <Form.Label htmlFor="rare-input">
            Raridade
            <Form.Select
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="rare">rare</option>
              <option value="very rare">very rare</option>
            </Form.Select>
          </Form.Label>
          {
            !hasTrunfo ? (
              <Form.Label htmlFor="trunfo-input">
                Super Trunfo
                <Form.Check
                  id="superTrunfo"
                  name="cardTrunfo"
                  type="checkbox"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              </Form.Label>
            ) : <span>You already have a Super Trunfo card in your deck</span>
          }
          <Button
            variant="primary"
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ () => onSaveButtonClick({
              cardName,
              cardImage,
              cardDescription,
              cardAttr1,
              cardAttr2,
              cardAttr3,
              cardRare,
              cardTrunfo,
            }) }
          >
            Save
          </Button>
        </Form>
    );
  }
}

FormComponent.propTypes = {
  cardName: PropType.string,
  cardDescription: PropType.string,
  cardAttr1: PropType.string,
  cardAttr2: PropType.string,
  cardAttr3: PropType.string,
  cardImage: PropType.string,
  cardRare: PropType.string,
  cardTrunfo: PropType.bool,
  hasTrunfo: PropType.bool,
  isSaveButtonDisabled: PropType.bool,
  onInputChange: PropType.func,
  onSaveButtonClick: PropType.func,
}.isRequired;

export default FormComponent;
