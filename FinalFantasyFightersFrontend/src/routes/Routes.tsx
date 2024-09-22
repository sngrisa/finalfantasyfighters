import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/home';
import Figthing from '@/pages/fighthing/fighthing';

const AppRoutes = (): any => {
  return (
    <>
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='figthing' element={<Figthing />}/>
      </Route>
    </Routes>
    </>
  )
}

export default AppRoutes;