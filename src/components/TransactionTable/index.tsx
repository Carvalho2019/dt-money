import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface TransactionProps {
  id: number;
  title: string;
  amnount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionTable() {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])


  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td className="title">{transaction.title}</td>
                  <td className={transaction.type}>
                    {new Intl.NumberFormat('pt-Br', {
                      style: 'currency',
                      currency: 'AOA'
                    }).format(transaction.amnount)}
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                  {new Intl.DateTimeFormat('pt-Br').format(
                    new Date(transaction.createdAt)
                  )}
                  </td>
                </tr>
              )
            )
          }
        </tbody>
      </table>
    </Container>
  )
}