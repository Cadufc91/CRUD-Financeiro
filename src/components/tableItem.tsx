import { Item } from '../types/item';
import { formatDate } from '../helpers/dateFilter';
import { categories } from '../data/categories';

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {
    return(
        <div>
            <div className='table-column'>{formatDate(item.date)}</div>
            <div className='table-column'>
                <div className='category' color={categories[item.category].color}>
                    {categories[item.category].title}
                </div>                    
            </div>
            <div className='table-column'>{item.title}</div>
            <div className='table-column'>
                <div className='value' color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </div>
            </div>
        </div>
    );

}