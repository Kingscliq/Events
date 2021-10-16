import React from 'react';
import { BackButtonIcon, UploadImageIcon } from '../../../../assets/images';
import { Button } from '../../../../components/button';
import { blankProfile } from '../../../../assets/images';

import '../host-event.css';
import './upload-template.css';

const UploadTemplate = ({ prevStep, nextStep, handleChange, event }) => {
  return (
    <>
      <main className="host-event">
        <section className="container upload-template">
          <div className="back-arrow">
            <img src={BackButtonIcon} alt="back button" onClick={prevStep} />
          </div>
          <div className="upload-template-div">
            <h1> Please upload your confirmation template </h1>
            <form action="">
              <div className="upload-template-form-div">
                <div className="upload-template-form-div-input">
                  <div className="upload-template-image">
                    <img
                      src={
                        event.image
                          ? URL.createObjectURL(event.image)
                          : blankProfile
                      }
                      alt={
                        event.image ? event.image.name : 'Blank Profile Image'
                      }
                    />
                  </div>
                  <div className="upload-template-instruction">
                    <span>Drag and drop images files here</span>
                    <p>Or</p>
                    <div>
                      <img src={UploadImageIcon} alt="upload-img icon" />{' '}
                      <span>Choose image file</span>
                    </div>
                  </div>

                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    className="position-absolute"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="upload-template-btn">
                <Button className="btn btn-primary" text={'Upload Image'} />
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export { UploadTemplate };
