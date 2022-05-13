import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories } ) => {
 
  const [inputValue, setinputValue] = useState("")

  const handleInputChange = (category) => {
      setinputValue(category.target.value);
  }

  const handleSubmit = (category) => {
    category.preventDefault();
    //el trim está eliminando los espacios en blanco antes y después del string 
    if(inputValue.trim().length > 2){
        setCategories( categories => [inputValue,...categories]);
        setinputValue('');
    }

   
}

  return (
    <form onSubmit={ handleSubmit }>
        <input
            type="text"
            placeholder='Escriba nueva categoría'
            value= { inputValue }
            onChange={handleInputChange}
         />
    </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
  }

