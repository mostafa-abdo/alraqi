import React, { useState } from "react";
import './stepper.scss';

const Stepper = (prop) => {
  const { list, setOpenStepper } = prop;
  const [currentStep, setCurrentStep] = useState(0);
  const stepsCount = list.length;
  const steps = [];

  for (let i = 0; i < stepsCount; i++) {
    steps.push(
      <div
        onClick={() => setCurrentStep(i)}
        className={`steps ${currentStep >= i ? "active" : ""}`}
        key={i}
      >
        {i + 1}
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
    <section className="package-stepper">
      <div className="close" onClick={ () => setOpenStepper(false) }>
        <img src="close.svg" alt="close" />
      </div>
      <div className="steps-container">
        <div className="steps-wrapper">{ steps }</div>
        <div className={`progress-line1 ${currentStep ===1 && "proActive"}`} />
      </div>
      <div>{ React.cloneElement(list[currentStep], { onPrev, onNext }) }</div>
      
    </section>
  );
};

export default Stepper;
