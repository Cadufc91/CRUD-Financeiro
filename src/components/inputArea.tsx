import { useState } from 'react';
import { Item } from '../types/item';

import { categories } from '../data/categories';
import { newDateAdjusted } from '../helpers/dateFilter';

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if(isNaN(new Date(dateField).getTime())) {
      errors.push('Data inválida!');
    }
    if(!categoryKeys.includes(categoryField)) {
      errors.push('Categoria inválida!');
    }
    if(titleField === '') {
      errors.push('Título vazio!');
    }
    if(valueField <= 0) {
      errors.push('Valor inválido!');
    }

    if(errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: newDateAdjusted(dateField),
        category: categoryField,
        title: titleField,
        value: valueField
      });
      clearFields();
    }
  }

  const clearFields = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField(0);
  }

  return (
      <div>
        <div className='input-label'>
          <div className='input-title'>Data</div>
          <input type="date" value={dateField} onChange={e => setDateField(e.target.value)} />
        </div>
        <div className='input-label'>
          <div className='input-title'>Categoria</div>
          {/* <button value={categoryField} onChange={e => setCategoryField(e.target.value)}>
            <>
              <option></option>
              {categoryKeys.map((key, index) => (
                <option key={index} value={key}>{categories[key].title}</option>
              ))}
            </>
          </button> */}
        </div>
        <div className='input-label'>
          <div className='input-title'>Título</div>
          <input type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
        </div>
        <div className='input-label'>
          <div className='input-title'>Valor</div>
          <input type="number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))} />
        </div>
        <div className='input-label'>
          <div className='input-title'>&nbsp;</div>
          <button onClick={handleAddEvent}>Adicionar</button>
        </div>
      </div>
  );
}