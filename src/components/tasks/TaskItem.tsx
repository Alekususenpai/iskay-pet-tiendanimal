import { useDispatch } from 'react-redux';
import { deleteTaskAsync } from '../../store/taskSlice';
import trashIcon from '../../assets/Trash.svg'
import { Task } from '../../types/taskApiType';

function TaskItem({ task }: { task: Task }) {

          const dispatch = useDispatch();

          const handleDelete = () => {
                    dispatch(deleteTaskAsync(task.id));
          };

          return (
                    <div className='bg-white px-4 py-5 my-4 shadow-md rounded-md flex justify-between'>
                              <div>
                                        <h3 className='text-lg font-base'>{task.userId || 'Titulo Area'}</h3>
                                        <p className='font-light text-gray-400 text-sm'>{task.title || 'Descripcion de la tarea'}</p>
                              </div>
                              <img src={trashIcon} alt="Delete" className="w-5 ml-2" onClick={handleDelete} />
                    </div>
          )
}

export default TaskItem