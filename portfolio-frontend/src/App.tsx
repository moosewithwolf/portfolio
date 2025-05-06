import { BrowserRouter } from 'react-router-dom'
import DefaultLayout from '@layout/DefaultLayout'
import AppRouter from './routes/AppRouter'

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <AppRouter />
      </DefaultLayout>
    </BrowserRouter>
  )
}

export default App
