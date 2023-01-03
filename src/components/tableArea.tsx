import { Item } from '../types/item';
import { TableItem } from '../components/tableItem';

type Props = {
    list: Item[]
}

export const TableArea = ({ list } : Props) => {
    return(
        <div>
            <thead>
                <tr>
                    <div className='table-head-column'>Data</div>
                    <div className='table-head-column'>Categoria</div>
                    <div className='table-head-column'>Título</div>
                    <div className='table-head-column'>Valor</div>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <TableItem key={index} item={item} />
                ))}
            </tbody>
        </div>
    );

}