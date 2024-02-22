import React from 'react'

function Profile() {
          return (
                    <div className="max-w-sm mx-auto">
                              <h2 className="text-xl font-semibold mb-6">Mis datos</h2>
                              <div className="px-5 py-9 bg-white rounded shadow-lg">
                                        <form>
                                                  <div className="mb-4">
                                                            <label htmlFor="name" className="block font-medium mb-2">Nombre *</label>
                                                            <input type="text" id="name" className="w-full py-1.5 px-4 border border-gray-400 rounded-md placeholder-gray-400 font-thin" placeholder="Nombre" required />
                                                  </div>
                                                  <div className="mb-4">
                                                            <label htmlFor="email" className="block font-medium mb-2">Email *</label>
                                                            <input type="email" id="email" className="w-full py-1.5 px-4 border border-gray-400 rounded-md placeholder-gray-400 font-thin" placeholder="Email" required />
                                                  </div>
                                                  <div className="mb-6">
                                                            <label htmlFor="phone" className="block font-medium mb-2">Teléfono *</label>
                                                            <input type="tel" id="phone" className="w-full py-1.5 px-4 border border-gray-400 rounded-md placeholder-gray-400 font-thin" placeholder="Teléfono" required />
                                                  </div>
                                                  <button type="submit" className="w-full p-3 mt-5 bg-primary text-white rounded-md hover:bg-primary-dark font-normal tracking-wide">Guardar</button>
                                        </form>
                              </div>
                    </div>
          )
}

export default Profile