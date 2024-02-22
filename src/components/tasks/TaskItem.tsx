import React from 'react'
import trashIcon from '../../assets/Trash.svg'

function TaskItem() {
          return (
                    <div className='bg-white px-4 py-5 shadow-md rounded-md flex justify-between'>
                              <div>
                                        <h3 className='text-lg font-base'>Titulo Area</h3>
                                        <p className='font-light text-gray-400 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, ac elementum ultrices mauris. Cursus urna</p>
                              </div>
                              <img src={trashIcon} alt="Delete" className="w-5 ml-2" />
                    </div>
          )
}

export default TaskItem