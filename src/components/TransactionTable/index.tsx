import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function TransactionTable() {
  const {transactions} = useContext(TransactionsContext)
  
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