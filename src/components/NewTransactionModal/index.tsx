import { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";
import entradasImg from '../../assets/Entradas.svg'
import saidasImg from '../../assets/Saídas.svg'
import { useTransactions } from "../../hooks/useTransactions";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amnount, setAmnount] = useState(0);

  const [type, setType] = useState('deposit');
  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amnount,
      category,
      type
    })
    setTitle('')
    setAmnount(0)
    setCategory('')
    setType('deposit')
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">x</button>
      <Container onSubmit={handleCreateNewTransaction}>

        <h2>cadastrar transations</h2>
        <input type="text" placeholder="Título" value={title} onChange={event => setTitle(event.target.value)} />
        <input type="number" placeholder="Valor" value={amnount} onChange={event => setAmnount(+event.target.value)} />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={entradasImg} alt="Entradas" />
            <span>

              Entrada
            </span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={saidasImg} alt="Saídas" />
            <span>
              Saída
            </span>
          </RadioBox>
        </TransactionTypeContainer>
        <input type="text" placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)} />
        <button type="submit">Cadastrar</button>
      </ Container>
    </Modal>
  )
}