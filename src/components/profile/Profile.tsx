import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const phoneValidationSchema = Yup.string().required('Phone number is required')
          .test('no-letters', 'Insert only numbers.', (value) => !/[A-Za-z]/.test(value))
          .test('has-plus', 'Phone number must start with +', value => value.startsWith('+'))
          .test('length-check', 'Phone number must have at least 12 characters including country code', value => value && value.length >= 12)

const ProfileSchema = Yup.object().shape({
          name: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email').required('Required'),
          phone: phoneValidationSchema,
});



function Profile() {
          return (
                    <div className="section-wrapper">
                              <h2 className="section-heading">Mis datos</h2>
                              <div className="form-wrapper">
                                        <Formik
                                                  initialValues={{ name: '', email: '', phone: '' }}
                                                  validationSchema={ProfileSchema}
                                                  onSubmit={(values, actions) => {
                                                            console.log(values);
                                                            actions.setSubmitting(false);
                                                  }}
                                        >
                                                  {({ errors, touched }) => (
                                                            <Form>
                                                                      <div className="mb-4">
                                                                                <label htmlFor="name" className="block font-medium mb-2">Nombre *</label>
                                                                                <Field type="text" name="name" className="w-full py-1.5 px-4 border border-gray-400 rounded-md placeholder-gray-400 font-thin" placeholder="Nombre" />
                                                                                {errors.name && touched.name ? <div className="text-red-500 text-xs font-thin p-1">{errors.name}</div> : null}
                                                                      </div>
                                                                      <div className="mb-4">
                                                                                <label htmlFor="email" className="block font-medium mb-2">Email *</label>
                                                                                <Field type="email" name="email" className="w-full py-1.5 px-4 border border-gray-400 rounded-md placeholder-gray-400 font-thin" placeholder="Email" />
                                                                                {errors.email && touched.email ? <div className="text-red-500 text-xs font-thin p-1">{errors.email}</div> : null}
                                                                      </div>
                                                                      <div className="mb-6">
                                                                                <label htmlFor="phone" className="block font-medium mb-2">Teléfono *</label>
                                                                                <Field type="tel" name="phone" className="w-full py-1.5 px-4 border border-gray-400 rounded-md placeholder-gray-400 font-thin" placeholder="Teléfono" />
                                                                                {errors.phone && touched.phone ? <div className="text-red-500 text-xs font-thin p-1">{errors.phone}</div> : null}
                                                                      </div>
                                                                      <button type="submit" className="w-full p-3 mt-5 bg-primary text-white rounded-md hover:bg-primary-dark font-normal tracking-wide">Guardar</button>
                                                            </Form>
                                                  )}
                                        </Formik>
                              </div>
                    </div>
          );
}

export default Profile;
