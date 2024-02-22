import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasksAsync } from '../../store/taskSlice';
import TaskItem from './TaskItem'
import TaskAddForm from './TaskAddForm'
import ReactPaginate from 'react-paginate';

function TaskList() {

  //redux
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.entities);
  const loading = useSelector((state) => state.tasks.loading);

  useEffect(() => {
    dispatch(fetchTasksAsync());
  }, [dispatch]);

  // pagination
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 3;
  const pageCount = Math.ceil(tasks.length / pageSize);

  const currentTasks = tasks.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  // AddTask modal
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (

    <div className="section-wrapper">
      {isModalOpen && <TaskAddForm onClose={closeModal} />}
      <h2 className='section-heading'>Mis tareas</h2>
      {loading === 'pending' && <p>Loading tasks...</p>}
      {currentTasks.map((task) => (
        <TaskItem task={task} key={task.id} />))}
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="flex items-center justify-center my-4"
        pageClassName="mx-2"
        pageLinkClassName="text-primary hover:text-primary-dark" // Sets the text color to primary and changes on hover
        previousClassName="mx-1"
        nextClassName="mx-1"
        previousLinkClassName="text-primary hover:text-primary-dark" // Sets the text color to primary for previous button
        nextLinkClassName="text-primary hover:text-primary-dark" // Sets the text color to primary for next button
        breakClassName="mx-1"
        breakLinkClassName="text-primary hover:text-primary-dark" // Sets the text color to primary for break
        activeClassName="text-white bg-gray-300 px-1.5 rounded" // Active page styling with a background color
        activeLinkClassName="font-semibold" // Active page link styling
      />
      <button onClick={openModal} type="submit" className="w-full p-3 mt-12 bg-primary text-white rounded-md hover:bg-primary-dark font-normal tracking-wide">Añadir tarea</button>
    </div>
  )
}

export default TaskList