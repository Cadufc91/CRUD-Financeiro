import { useState } from 'react';
import { Item } from '../types/item';
import { categories } from '../data/categories';
import { newDateAdjusted } from '../helpers/dateFilter';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
      <Stack className='d-flex flex-row justify-content-center align-items-center p-2 '>
        <Form.Group className='d-flex flex-column align-items-start m-3'>
          <Form.Label className='fw-bold'>Data</Form.Label>
          <Form.Control type="date" value={dateField} onChange={e => setDateField(e.target.value)} />
        </Form.Group>
        <Form.Group className='d-flex flex-column align-items-start  m-3'>
          <Form.Label className='fw-bold'>Categoria</Form.Label>
          <Form.Select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
            <>
              <option></option>
              {categoryKeys.map((key, index) => (
                <option key={index} value={key}>{categories[key].title}</option>
              ))}
            </>
          </Form.Select>
        </Form.Group>
        <Form.Group className='d-flex flex-column align-items-start  m-3'>
          <Form.Label className='fw-bold'>Título</Form.Label>
          <Form.Control type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
        </Form.Group>
        <Form.Group className='d-flex flex-column align-items-start  m-3'>
          <Form.Label className='fw-bold'>Valor</Form.Label>
          <Form.Control type="number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))} />
        </Form.Group>
        <Form.Group className='mt-4'>
          <Form.Label>&nbsp;</Form.Label>
          <Button onClick={handleAddEvent}>Adicionar</Button>
        </Form.Group>
      </Stack>
  );
}