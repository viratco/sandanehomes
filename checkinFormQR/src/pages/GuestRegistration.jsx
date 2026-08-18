import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/shared/ProgressBar.jsx';
import Step1Personal from '../components/steps/Step1Personal.jsx';
import Step2Identity from '../components/steps/Step2Identity.jsx';
import Step3Stay from '../components/steps/Step3Stay.jsx';
import Step4Purpose from '../components/steps/Step4Purpose.jsx';
import Step5Declaration from '../components/steps/Step5Declaration.jsx';
import {
  validateStep1,
  validateStep2,
  validateStep3,
  validateStep4,
  validateStep5,
  getTodayString,
} from '../utils/validation.js';
import { submitRegistration } from '../utils/api.js';

const INITIAL_FORM = {
  // Step 1
  fullName: '',
  age: '',
  nationality: '',
  phoneCode: '+91',
  phoneNumber: '',
  email: '',
  additionalGuests: [],
  // Step 2
  idType: '',
  idFileFront: null,
  idFileBack: null,
  // Step 3
  property: '',
  permanentAddress: '',
  checkInDate: getTodayString(),
  checkOutDate: '',
  roomNumber: '',
  arrivalTimestamp: null,
  // Step 4
  visitPurpose: '',
  visitDetails: '',
  // Step 5
  consentGiven: false,
};

const STEP_VALIDATORS = [
  validateStep1,
  validateStep2,
  validateStep3,
  validateStep4,
  validateStep5,
];

export default function GuestRegistration() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const updateForm = (updates) => {
    setFormData(prev => ({ ...prev, ...updates }));
    // Clear errors for updated fields
    const clearedErrors = { ...errors };
    Object.keys(updates).forEach(k => delete clearedErrors[k]);
    setErrors(clearedErrors);
  };

  const goNext = () => {
    const validate = STEP_VALIDATORS[currentStep - 1];
    const stepErrors = validate(formData);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      // Scroll to first error
      setTimeout(() => {
        const firstError = document.querySelector('.form-error, .error');
        firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
      return;
    }
    setErrors({});
    setCurrentStep(s => s + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    setErrors({});
    setCurrentStep(s => s - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate step 5
    const stepErrors = validateStep5(formData);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const result = await submitRegistration(formData);
      navigate('/confirmation', {
        state: {
          registrationId: result.registrationId,
          guestName: formData.fullName,
        },
        replace: true,
      });
    } catch (err) {
      setSubmitError(err.message || 'Something went wrong. Please try again.');
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <Step1Personal data={formData} onChange={updateForm} errors={errors} />;
      case 2: return <Step2Identity data={formData} onChange={updateForm} errors={errors} />;
      case 3: return <Step3Stay data={formData} onChange={updateForm} errors={errors} />;
      case 4: return <Step4Purpose data={formData} onChange={updateForm} errors={errors} />;
      case 5: return <Step5Declaration data={formData} onChange={updateForm} errors={errors} isSubmitting={isSubmitting} />;
      default: return null;
    }
  };

  return (
    <div className="guest-form-wrapper">
      {/* Luxury Brand Header */}
      <header className="site-header">
        <div className="site-header__content">
          <div className="site-header__logo-wrap">
            <img
              src="/logo.png"
              alt="Sandane Homes Logo"
              className="site-header__logo-img"
              onError={(e) => {
                // Fallback if image has background issues
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="site-header__text-wrap">
            <p className="label-caps site-header__eyebrow">Hotel Guest Check-In & Registration</p>
            <h1 className="site-header__brand">SANDANE HOMES</h1>
            <div className="site-header__stars">★ ★ ★ ★ ★</div>
          </div>
        </div>
        <div className="site-header__accent-line" />
      </header>

      {/* Progress */}
      <ProgressBar currentStep={currentStep} />

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="form-card"
        noValidate
        key={currentStep} // re-animate on step change
      >
        {/* Global submit error */}
        {submitError && (
          <div
            style={{
              background: 'var(--color-error-bg)',
              border: '1px solid var(--color-border-error)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-4)',
              marginBottom: 'var(--space-6)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-error)',
              display: 'flex',
              gap: 'var(--space-2)',
            }}
          >
            <span>⚠️</span>
            <span>{submitError}</span>
          </div>
        )}

        {renderStep()}

        {/* Navigation Buttons */}
        {currentStep < 5 && (
          <div className="form-navigation">
            {currentStep > 1 && (
              <button type="button" className="btn btn-secondary" onClick={goBack} id="prev-step-btn">
                ← Back
              </button>
            )}
            <button
              type="button"
              className="btn btn-primary"
              onClick={goNext}
              id="next-step-btn"
              style={{ marginLeft: currentStep === 1 ? 'auto' : undefined }}
            >
              Continue →
            </button>
          </div>
        )}

        {/* Back button on step 5 */}
        {currentStep === 5 && (
          <button
            type="button"
            className="btn btn-ghost"
            onClick={goBack}
            style={{ marginTop: 'var(--space-4)', display: 'block' }}
          >
            ← Edit previous details
          </button>
        )}
      </form>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: 'var(--space-6)',
        color: 'var(--color-text-muted)',
        fontSize: 'var(--text-xs)',
      }}>
        <p>© {new Date().getFullYear()} Sandane Homes. All rights reserved.</p>
        <p style={{ marginTop: '4px' }}>
          Need help?{' '}
          <a href="tel:+919289615804" style={{ color: 'var(--color-gold-dark)' }}>+91 92896 15804</a>
          {' · '}
          <a href="tel:+917974173863" style={{ color: 'var(--color-gold-dark)' }}>+91 79741 73863</a>
        </p>
      </footer>
    </div>
  );
}
