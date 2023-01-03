import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Item } from '../src/types/item';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from '../src/components/tableArea';
import { InputArea } from '../src/components/inputArea';
import { InfoArea } from './components/infoArea';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';

function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else{
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

    return (
    <Stack gap={3} className="container mt-3 text-center">
      <h1>Finanças</h1>
      <Card className="row justify-content-md-center">
          <InfoArea 
              currentMonth={currentMonth}
              onMonthChange={handleMonthChange}
              income={income}
              expense={expense}
            />
      </Card>
      <Card>
          <InputArea onAdd={handleAddItem} />
      </Card>
      <Card>
        <TableArea list={filteredList}/>
      </Card>
    </Stack>
  );
}

export default App;
