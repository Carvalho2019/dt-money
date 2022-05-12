import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
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
          <tr>
            <td className="title">Desenvolvimento de web site</td>
            <td className="deposit">1200,00 kzs</td>
            <td>Desenvolvimento</td>
            <td>20/2/2021</td>
          </tr>
          <tr>
            <td>Alguel de web site</td>
            <td className="withdraw">100,00 kzs</td>
            <td>Casa</td>
            <td>10/2/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}