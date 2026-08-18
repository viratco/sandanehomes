import { ALLOWED_FILE_TYPES, MAX_FILE_SIZE } from './constants.js';

export function validateStep1(data) {
  const errors = {};

  if (!data.fullName?.trim()) {
    errors.fullName = 'Full name is required';
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full legal name';
  }

  const age = parseInt(data.age, 10);
  if (!data.age) {
    errors.age = 'Age is required';
  } else if (isNaN(age) || age < 1 || age > 120) {
    errors.age = 'Please enter a valid age (1–120)';
  } else if (age < 18) {
    errors.age = 'Primary guest must be at least 18 years old';
  }

  if (!data.nationality) {
    errors.nationality = 'Please select your nationality';
  }

  if (!data.phoneCode) {
    errors.phoneCode = 'Please select a country code';
  }

  if (!data.phoneNumber?.trim()) {
    errors.phoneNumber = 'Phone number is required';
  } else if (!/^\d{6,15}$/.test(data.phoneNumber.replace(/[\s\-]/g, ''))) {
    errors.phoneNumber = 'Please enter a valid phone number (6–15 digits)';
  }

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Validate additional guests
  if (Array.isArray(data.additionalGuests)) {
    data.additionalGuests.forEach((guest, index) => {
      const gNum = index + 2;
      if (!guest.fullName?.trim()) {
        errors[`guest_${index}_fullName`] = `Guest ${gNum} full name is required`;
      }
      const gAge = parseInt(guest.age, 10);
      if (!guest.age) {
        errors[`guest_${index}_age`] = `Guest ${gNum} age is required`;
      } else if (isNaN(gAge) || gAge < 1 || gAge > 120) {
        errors[`guest_${index}_age`] = `Please enter a valid age for Guest ${gNum}`;
      }
      if (!guest.nationality) {
        errors[`guest_${index}_nationality`] = `Please select nationality for Guest ${gNum}`;
      }
      if (!guest.phoneNumber?.trim()) {
        errors[`guest_${index}_phoneNumber`] = `Guest ${gNum} phone number is required`;
      } else if (!/^\d{6,15}$/.test(guest.phoneNumber.replace(/[\s\-]/g, ''))) {
        errors[`guest_${index}_phoneNumber`] = `Please enter a valid phone number for Guest ${gNum}`;
      }
      if (guest.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(guest.email)) {
        errors[`guest_${index}_email`] = `Please enter a valid email for Guest ${gNum}`;
      }
    });
  }

  return errors;
}

export function validateStep2(data) {
  const errors = {};

  if (!data.idType) {
    errors.idType = 'Please select ID type for Guest 1';
  }

  // Front ID validation for Primary Guest
  if (!data.idFileFront) {
    errors.idFileFront = 'Please upload the front side of Guest 1 ID document';
  } else {
    if (!ALLOWED_FILE_TYPES.includes(data.idFileFront.type)) {
      errors.idFileFront = 'Unsupported format. Please upload JPG, JPEG, PNG, or PDF';
    } else if (data.idFileFront.size > MAX_FILE_SIZE) {
      errors.idFileFront = 'File size exceeds 5MB. Please upload a smaller file';
    }
  }

  // Back ID validation for Primary Guest
  if (!data.idFileBack) {
    errors.idFileBack = 'Please upload the back side of Guest 1 ID document';
  } else {
    if (!ALLOWED_FILE_TYPES.includes(data.idFileBack.type)) {
      errors.idFileBack = 'Unsupported format. Please upload JPG, JPEG, PNG, or PDF';
    } else if (data.idFileBack.size > MAX_FILE_SIZE) {
      errors.idFileBack = 'File size exceeds 5MB. Please upload a smaller file';
    }
  }

  // Validate additional guests IDs
  if (Array.isArray(data.additionalGuests)) {
    data.additionalGuests.forEach((guest, index) => {
      const gNum = index + 2;
      if (!guest.idType) {
        errors[`guest_${index}_idType`] = `Please select ID type for Guest ${gNum}`;
      }
      if (!guest.idFileFront) {
        errors[`guest_${index}_idFileFront`] = `Please upload the front side of Guest ${gNum} ID`;
      } else {
        if (!ALLOWED_FILE_TYPES.includes(guest.idFileFront.type)) {
          errors[`guest_${index}_idFileFront`] = 'Unsupported format. Please upload JPG, JPEG, PNG, or PDF';
        } else if (guest.idFileFront.size > MAX_FILE_SIZE) {
          errors[`guest_${index}_idFileFront`] = 'File size exceeds 5MB';
        }
      }

      if (!guest.idFileBack) {
        errors[`guest_${index}_idFileBack`] = `Please upload the back side of Guest ${gNum} ID`;
      } else {
        if (!ALLOWED_FILE_TYPES.includes(guest.idFileBack.type)) {
          errors[`guest_${index}_idFileBack`] = 'Unsupported format. Please upload JPG, JPEG, PNG, or PDF';
        } else if (guest.idFileBack.size > MAX_FILE_SIZE) {
          errors[`guest_${index}_idFileBack`] = 'File size exceeds 5MB';
        }
      }
    });
  }

  return errors;
}

export function validateStep3(data) {
  const errors = {};

  if (!data.checkInDate) {
    errors.checkInDate = 'Check-in date is required';
  }

  if (!data.checkOutDate) {
    errors.checkOutDate = 'Check-out date is required';
  } else if (data.checkInDate && data.checkOutDate < data.checkInDate) {
    errors.checkOutDate = 'Check-out date cannot be earlier than check-in date';
  }

  if (!data.roomNumber?.trim()) {
    errors.roomNumber = 'Room number is required';
  }

  if (!data.property) {
    errors.property = 'Please select the property';
  }

  if (!data.permanentAddress?.trim()) {
    errors.permanentAddress = 'Permanent address is required';
  } else if (data.permanentAddress.trim().length < 10) {
    errors.permanentAddress = 'Please provide your complete address';
  }

  return errors;
}

export function validateStep4(data) {
  const errors = {};

  if (!data.visitPurpose) {
    errors.visitPurpose = 'Please select the primary reason for your visit';
  }

  if (!data.visitDetails?.trim()) {
    errors.visitDetails = 'Please provide a brief description of your visit';
  } else if (data.visitDetails.trim().length < 10) {
    errors.visitDetails = 'Please provide more detail about the purpose of your visit';
  }

  return errors;
}

export function validateStep5(data) {
  const errors = {};

  if (!data.consentGiven) {
    errors.consentGiven = 'You must agree to the declaration to proceed';
  }

  return errors;
}

export function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function getTodayString() {
  const today = new Date();
  return today.toISOString().split('T')[0]; // YYYY-MM-DD
}

export function formatDateDisplay(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function formatTimestampIST() {
  const now = new Date();
  return now.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }) + ' IST';
}
