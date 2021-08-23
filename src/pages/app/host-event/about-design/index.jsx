import React from 'react';
import { FileIcon, PaintpadIcon } from '../../../../assets/images';
import { Button } from '../../../../components/button';
import '../host-event.css';

const AboutDesign = ({ nextStep, prevStep }) => {
  return (
    <>
      <main className="host-event">
        <section className="container">
          <div className="host-event-page host-event-first-page">
            <div className="host-event-guide">
              <h1> About your design</h1>
              <p>
                Help us understand your design template and let us know what we
                have to do.
              </p>
              <span className="progress">Step 3 of 3: About design</span>
              <div className="progress-bar-three"></div>
            </div>
            <div className="host-event-form-container">
              <form>
                <div className="form-input-div">
                  <span>
                    <img src={PaintpadIcon} alt="paintpad icon" />
                  </span>
                  <div className="form-input">
                    <h2>Do you have an existing media design?</h2>
                    <input type="text" placeholder="Yes/no" required />
                  </div>
                </div>
                <div className="form-input-div">
                  <span>
                    <img src={FileIcon} alt="file icon" />
                  </span>
                  <div className="form-input">
                    <h2>What file type is it?</h2>
                    <input type="text" placeholder="PNG AI,PSD, SVG" required />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="host-event-buttons">
            <Button text={'Back'} className="btn btn-dark" onClick={prevStep} />
            <Button
              text={'Next'}
              className="btn btn-primary"
              onClick={nextStep}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export { AboutDesign };
