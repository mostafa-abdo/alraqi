import React, { useState } from "react";
import './visasStepper.scss';

const VisasStepper = (prop) => {
  const { list } = prop;
  const [currentStep, setCurrentStep] = useState(0);
  const stepsCount = list.length;
  const steps = [];

  for (let i = 0; i < stepsCount; i++) {
    steps.push(
      <div
        onClick={ () => setCurrentStep(i) }
        className={ `steps ${currentStep >= i ? "active" : ""}` }
        key={ i }
      >
        { i + 1 }
      </div>
    );
  }

  const onPrev = () => {
    if (currentStep !== 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onNext = () => {
    if (currentStep !== list.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <section className="visas-stepper-section">
      <div className='offers-container'>
        <div className='offers'>
          <div className='offer'>
            <img src='/offer1.svg' alt='offer' />
          </div>
          <div className='offer'>
            <img src='/offer1.svg' alt='offer' />
          </div>
          <div className='offer'>
            <img src='/offer1.svg' alt='offer' />
          </div>
          <div className='offer'>
            <img src='/offer1.svg' alt='offer' />
          </div>
        </div>
      </div>
      <div className="visas-stepper">
        <div className="steps-container">
          <div className="steps-wrapper">{ steps }</div>
          <div className={ `progress-line1 ${currentStep >= 1 && "proActive"}` } />
          <div className={ `progress-line2 ${currentStep >= 2 && "proActive"}` } />
          <div className={ `progress-line3 ${currentStep === 3 && "proActive"}` } />
        </div>
        <div>{ React.cloneElement(list[currentStep], { onPrev, onNext }) }</div>
      </div>
    </section>
  );
};

export default VisasStepper;
