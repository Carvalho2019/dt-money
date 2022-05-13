
import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api';

interface TransactionProps {
  id: number;
  title: string;
  amnount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionPropsInput = Omit<TransactionProps, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionPropsContextData {
  transactions: TransactionProps[],
  createTransaction: (transaction: TransactionPropsInput)=> Promise<void>;
}
export const TransactionsContext = createContext<TransactionPropsContextData>({} as TransactionPropsContextData);

export function TransactionsProvider({children}: TransactionsProviderProps) {

  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionPropsInput){   
    const response = await api.post('/transactions', {
      ...transactionInput, 
      createdAt: new Date()
    })
    const {transaction} = response.data
    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return  (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}