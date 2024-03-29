import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/layout/Header'
import NotFound from '../components/common/NotFound'
import Profile from '../components/profile/Profile';
import TaskList from '../components/tasks/TaskList';
import Returns from '../components/returns/Returns';
import Communications from '../components/communications/Communications';
import Pets from '../components/pets/Pets';
import Home from './Home';

function Navigation() {
          return (
                    <Router>
                              <Header />
                              <div className='my-11 mx-4'>
                                        <Routes>
                                                  <Route path="/" element={<Home />} />
                                                  <Route path="/perfil" element={<Profile />} />
                                                  <Route path="/tareas" element={<TaskList />} />
                                                  <Route path="/devoluciones" element={<Returns />} />
                                                  <Route path="/comunicaciones" element={<Communications />} />
                                                  <Route path="/mascotas" element={<Pets />} />
                                                  <Route path="*" element={<NotFound />} />
                                        </Routes>
                              </div>
                    </Router>
          )
}

export default Navigation