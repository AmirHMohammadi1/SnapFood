import { useRoutes } from 'react-router-dom'
import routes from './Routes'

function App() {


  const router = useRoutes(routes)
  return (
    <div className='container-custom bg-slate-100 m-auto mt-4 sm:py-0'>
      {router}
    </div>
  )
}

export default App