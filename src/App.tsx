import { useRoutes } from 'react-router-dom'
import Home from './assets/Pages/Home/Home'
import routes from './Routes'

function App() {


  const router = useRoutes(routes)
  return (
    <div className='px-2 m-auto py-4 sm:py-0'>
      {router}
    </div>
  )
}

export default App