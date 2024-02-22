import React, {useState} from 'react'
import TaskItem from './TaskItem'
import TaskAddForm from './TaskAddForm'

function TaskList() {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (

    <div className="section-wrapper">
      {isModalOpen && <TaskAddForm onClose={closeModal}/>}
      <h2 className='section-heading'>Mis tareas</h2>
      <TaskItem />
      <button onClick={openModal} type="submit" className="w-full p-3 mt-12 bg-primary text-white rounded-md hover:bg-primary-dark font-normal tracking-wide">Añadir tarea</button>

    </div>
  )
}

export default TaskList