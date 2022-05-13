import { Container } from "./styles";
import entradasImg from '../../assets/Entradas.svg'
import saidasImg from '../../assets/Saídas.svg'
import totalImg from '../../assets/Total.svg'
import { useContext } from "react";
import { useTransactions } from "../../hooks/useTransactions";


export function Summary() {
  const { transactions } = useTransactions();
  
  
  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amnount
      acc.total += transaction.amnount
    } else {
      acc.withdraw += transaction.amnount
      acc.total -= transaction.amnount
    }
    return acc;
  }, {
    deposits: 0,
    withdraw: 0,
    total: 0
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradasImg} alt="Entradas" />
        </header>
        <strong>
          +
          {new Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'AOA'
          }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={saidasImg} alt="Saídas" />
        </header>
        <strong>
          - 
          {new Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'AOA'
          }).format(summary.withdraw)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'AOA'
          }).format(summary.total)}
        </strong>
      </div>

    </Container>
  )
}