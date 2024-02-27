import { useState } from 'react';
import './addPlace.scss';

const AddPlace = () => {
  const [values, setValues] = useState([]); // Initialize an empty array for values
  const [inputValue, setInputValue] = useState(''); // To capture the input value

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addValue = () => {
    if (inputValue.trim() !== '') {
      // Only add non-empty values
      setValues([...values, inputValue]);
      setInputValue(''); // Clear the input field
    }
  };

  const removeValue = (indexToRemove) => {
    const updatedValues = values.filter((_, index) => index !== indexToRemove);
    setValues(updatedValues);
  };

  return (
    <div className='add-place'>
      <h2 className='title'>الاماكن المتاحة</h2>
      <div className='places'>
        { values.map((value, index) => (
          <div key={ index } className='place'>
            { value }
            <img src='../close.svg'
              className='close-btn'
              alt='close'
              onClick={ () => removeValue(index) }
            />
          </div>
        )) }
      </div>

      <div className='addNew-place'>
        <label>اضافه الاماكن الجديده</label>
        <input
          type="text"
          value={ inputValue }
          onChange={ handleInputChange }
          placeholder="ادخل اسم المكان"
        />
        <button onClick={ addValue }>اضافة</button>
      </div>
    </div>
  );
};

export default AddPlace;
