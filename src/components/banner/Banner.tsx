import { useState } from 'react';
import companyLogoBig from '../../assets/CompanyLogoBig.png';

const Banner = () => {
          const [buttonColor, setButtonColor] = useState('bg-banner-green');

          const toggleButtonColor = () => {
                    setButtonColor(buttonColor === 'bg-banner-green' ? 'bg-banner-red' : 'bg-banner-green');
          };

          return (
                    <div className="banner__container">
                              <div className="banner__image-container">

                                        <img src={companyLogoBig} alt="Company Logo" className="banner__image-container-logo" />
                              </div>
                              <div className="banner__text-container">
                                        <p className=" text-xl font-semibold">A partir de 12 meses </p>
                                        <p className='text-md font-medium'>Pienso especializado saludable</p>
                              </div>
                              <button
                                        className={`${buttonColor} banner__button`}
                                        onClick={toggleButtonColor}
                              >
                                        ¡Compra ahora!
                              </button>
                    </div>
          );
};

export default Banner;
