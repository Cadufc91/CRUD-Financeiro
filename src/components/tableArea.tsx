import { Item } from '../types/item';
import { TableItem } from '../components/tableItem';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';


type Props = {
    list: Item[]
}

export const TableArea = ({ list } : Props) => {
    return(
        <Stack>
            <Table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Categoria</th>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Modificar</th>
                    </tr>
                </thead>
                <tbody>
                            {list.map((item, index) => (
                                <TableItem key={index} item={item} />
                            ))}
                </tbody>
            </Table>
        </Stack>
    );

}