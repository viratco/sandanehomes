import React from 'react';

const STEPS = [
  { id: 1, label: 'Personal' },
  { id: 2, label: 'ID' },
  { id: 3, label: 'Stay' },
  { id: 4, label: 'Purpose' },
  { id: 5, label: 'Complete' },
];

export default function ProgressBar({ currentStep }) {
  return (
    <div className="progress-wrapper">
      <div className="progress-steps-row">
        {STEPS.map((step, index) => {
          const isCompleted = step.id < currentStep;
          const isActive = step.id === currentStep;
          const isLineActive = step.id < currentStep;

          return (
            <React.Fragment key={step.id}>
              <div className={`progress-step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}>
                <div className="progress-step__dot">
                  {isCompleted ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    step.id
                  )}
                </div>
                <span className="progress-step__label">{step.label}</span>
              </div>

              {index < STEPS.length - 1 && (
                <div className={`progress-connector ${isLineActive ? 'active' : ''}`} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
