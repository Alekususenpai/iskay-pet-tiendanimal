import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTaskAsync } from '../../store/taskSlice';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import closeIcon from '../../assets/Close.svg';

// Validation schema
const TaskSchema = Yup.object().shape({
          userId: Yup.string().required('Required'),
          title: Yup.string().required('Required'),
});

function TaskAddForm({ onClose }: { onClose: () => void }) {
          const dispatch = useDispatch();

          return (
                    <div className="fixed inset-0 px-4 py-7 bg-gray-600 bg-opacity-70 overflow-y-auto h-full w-full">
                              <div className="section-wrapper form-wrapper py-6 md:mt-28">
                                        <div className='flex justify-between'>
                                                  <h2 className='section-heading'>Añadir tarea</h2>
                                                  <img src={closeIcon} alt="Close" className="w-6 ml-2 self-start" onClick={onClose} />
                                        </div>


                                        <Formik
                                                  initialValues={{ userId: '', title: '' }}
                                                  validationSchema={TaskSchema}
                                                  onSubmit={(values, { setSubmitting, setErrors }) => {
                                                            const taskData = {
                                                                      ...values,
                                                                      id: Date.now(),
                                                                      completed: false,
                                                            };
                                                            dispatch(addTaskAsync(taskData))
                                                                      .unwrap()
                                                                      .then(() => {
                                                                                onClose();
                                                                      })
                                                                      .catch((error) => {
                                                                                setErrors({ submit: error });
                                                                      })
                                                                      .finally(() => {
                                                                                setSubmitting(false);
                                                                      });
                                                  }}
                                        >
                                                  {({ errors, touched }) => (
                                                            <Form>
                                                                      <div className="mb-4">
                                                                                <label htmlFor="userId" className="block text-sm font-medium mb-2">Nombre</label>
                                                                                <Field name="userId" type="text" className="w-full py-1.5 px-4 border border-gray-400 rounded-md placeholder-gray-400 placeholder:text-sm  font-thin" />
                                                                                {errors.userId && touched.userId ? (<div className="text-red-500 text-xs font-thin p-2">{errors.userId} *</div>) : null}
                                                                      </div>

                                                                      <div className="mb-4">
                                                                                <label htmlFor="title" className="block text-sm font-medium mb-2">Descripción</label>
                                                                                <Field name="title" as="textarea" rows={6} className="w-full py-1.5 px-4 border border-gray-400 rounded-md placeholder-gray-400 placeholder:text-sm  font-thin" />
                                                                                {errors.title && touched.title ? <div className="text-red-500 text-xs font-thin p-2">{errors.title} *</div> : null}
                                                                      </div>
                                                                      {errors.submit && <div className="text-red-500 text-xs font-thin p-2">{errors.submit}</div>}
                                                                      <div className='flex justify-between content-center mt-5'>
                                                                                <button type="button" onClick={onClose} className="w-full font-normal tracking-wide text-gray-400">Cancelar</button>
                                                                                <button type="submit" className="w-full px-3 py-2 bg-primary text-white rounded-md hover:bg-primary-dark font-normal tracking-wide">Guardar</button>
                                                                      </div>
                                                            </Form>
                                                  )}
                                        </Formik>
                              </div>
                    </div>
          );
}

export default TaskAddForm;
