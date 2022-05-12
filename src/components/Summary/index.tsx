import { Container } from "./styles";
import entradasImg from '../../assets/Entradas.svg'
import saidasImg from '../../assets/Saídas.svg'
import totalImg from '../../assets/Total.svg'


export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradasImg} alt="Entradas" />
        </header>
        <strong>
         + 1000,00 Kzs
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={saidasImg} alt="Saídas" />
        </header>
        <strong>
         - 500,00 Kzs
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          500,00 Kzs
        </strong>
      </div>

    </Container>
  )
}