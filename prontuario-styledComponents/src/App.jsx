import './App.css'
import { useState } from 'react'
import Header from './components/header'
import Table from './components/table'
import Form from './components/form'

const data = [
  { nome: "Alberto", idade: 30 },
]

function App() {
  const [usuarios, setUsuarios] = useState(data)
  const [status, setStatus] = useState(true)

  return (
    <>
      <Header propsStatus={{ status, setStatus }} />

      {status ? <Table propsUsuarios={usuarios} /> : <Form />}
    </>
  )
}

export default App
