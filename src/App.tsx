import React from 'react'
import FormikForm from './components/FormikForm'
import { ChakraProvider } from '@chakra-ui/react'

const App: React.FC = () => {
  return (
    <div>
      <ChakraProvider>
        <FormikForm />
      </ChakraProvider>
    </div>
  )
}

export default App
