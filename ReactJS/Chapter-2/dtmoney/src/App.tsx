import { useState } from 'react'
import Modal from 'react-modal'

import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionsProvider } from './hooks/useTransactions'
import { GlobalStyle } from "./styles/global"

Modal.setAppElement('#root')

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewModalTransaction() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewModalTransaction() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header
        onOpenNewModalTransaction={handleOpenNewModalTransaction}
      />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewModalTransaction}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
