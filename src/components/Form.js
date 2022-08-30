import React from 'react';
import PropType from 'prop-types';

class Form extends React.Component {
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
      <section className="form">
        <form>
          <label htmlFor="name-input">
            Name
            <input
              name="cardName"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="description-input">
            Description
            <textarea
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr1-input">
            <input
              name="cardAttr1"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
            Attack
          </label>
          <label htmlFor="attr2-input">
            <input
              name="cardAttr2"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
            Defense
          </label>
          <label htmlFor="attr3-input">
            <input
              name="cardAttr3"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
            Attr3
          </label>
          <label htmlFor="image-input">
            Image
            <input
              name="cardImage"
              type="text"

              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rare-input">
            Raridade
            <select
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">rare</option>
              <option value="muito raro">very rare</option>
            </select>
          </label>
          {
            !hasTrunfo ? (
              <label htmlFor="trunfo-input">
                Super Trybe Trunfo
                <input
                  id="superTrunfo"
                  name="cardTrunfo"
                  type="checkbox"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              </label>
            ) : <span>Você já tem um Super Trunfo em seu baralho</span>
          }
          <button
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
          </button>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
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

export default Form;
