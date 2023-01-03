import { Item } from '../types/item';
import { formatDate } from '../helpers/dateFilter';
import { categories } from '../data/categories';

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
        </tr>
    );

}