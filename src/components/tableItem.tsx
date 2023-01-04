import { Item } from '../types/item';
import { formatDate } from '../helpers/dateFilter';
import { categories } from '../data/categories';
import Button from 'react-bootstrap/Button';
import { FaPen, FaTrash } from 'react-icons/fa';

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {

    return(
        <tr>
                <td>{formatDate(item.date)}</td>
                <td className='category' color={categories[item.category].color}>
                    {categories[item.category].title}
                </td>                    
                <td>{item.title}</td>
                <td className='value' color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </td>
                <td>
                    <Button variant="warning" className='btn-sm me-2'><FaPen className='me-2'/>Editar</Button>
                    <Button variant="danger" className='btn-sm'><FaTrash className='me-2' />Deletar</Button>
                </td>
        </tr>
    );

}