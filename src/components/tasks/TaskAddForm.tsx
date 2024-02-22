import React from 'react'
import closeIcon from '../../assets/Close.svg'

function TaskAddForm({ onClose }: { onClose: () => void }) {
          return (
                    <div className="fixed inset-0 px-4 py-7 bg-gray-600 bg-opacity-70 overflow-y-auto h-full w-full" id="my-modal">
                              <div className="section-wrapper form-wrapper py-6 md:mt-28">
                                        <div className='flex justify-between'>
                                                  <h2 className='section-heading'>Añadir tarea</h2>
                                                  <img src={closeIcon} alt="Delete" className="w-6 ml-2 self-start" onClick={onClose} />
                                        </div>
                                        <form>
                                                  <div className="mb-4">
                                                            <label htmlFor="name" className="block font-medium text-sm mb-2">Nombre</label>
                                                            <input type="text" id="name" className="w-full py-1.5 px-4 border border-gray-400 rounded-md placeholder-gray-400 placeholder:text-sm font-thin" placeholder="Nombre" required />
                                                  </div>
                                                  <div className="mb-4">
                                                            <label htmlFor="description" className="block font-medium text-sm  mb-2">Descripción</label>
                                                            <textarea rows={6} id="description" className="w-full py-1.5 px-4 border border-gray-400 rounded-md placeholder-gray-400 placeholder:text-sm  font-thin" placeholder="Descripción" required />
                                                  </div>
                                                  <div className='flex justify-between content-center mt-5'>
                                                            <button onClick={onClose} type="submit" className="w-full font-normal tracking-wide  text-gray-400 ">Cancelar</button>
                                                            <button type="submit" className="w-full px-3 py-2 bg-primary text-white rounded-md hover:bg-primary-dark font-normal tracking-wide">Guardar</button>

                                                  </div>
                                        </form>
                              </div>
                    </div>
          )
}

export default TaskAddForm