// ================================================================
//  Sandane Homes — Guest Registration
//  Submits to Google Apps Script Web App
//  The APPS_SCRIPT_URL is set in the src/config.js file
// ================================================================

import { APPS_SCRIPT_URL } from '../config.js';

// ── Guest Registration ─────────────────────────────────────────────

export async function submitRegistration(formData) {
  if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL.includes('PASTE_YOUR_DEPLOYMENT_URL_HERE')) {
    throw new Error(
      'Google Apps Script URL is not configured yet. Please paste your deployed Web App URL into src/config.js (see SETUP.md for instructions).'
    );
  }

  // Generate unique Registration ID
  const currentYear = new Date().getFullYear();
  const randomSuffix = Math.floor(10000 + Math.random() * 90000);
  const clientRegId = `SH-${currentYear}-${randomSuffix}`;

  // Convert front & back ID files for Primary Guest
  const frontBase64 = formData.idFileFront ? await fileToBase64(formData.idFileFront) : '';
  const backBase64 = formData.idFileBack ? await fileToBase64(formData.idFileBack) : '';

  // Process additional guests
  const processedAdditionalGuests = [];
  if (Array.isArray(formData.additionalGuests)) {
    for (let i = 0; i < formData.additionalGuests.length; i++) {
      const g = formData.additionalGuests[i];
      const gFront = g.idFileFront ? await fileToBase64(g.idFileFront) : '';
      const gBack = g.idFileBack ? await fileToBase64(g.idFileBack) : '';
      processedAdditionalGuests.push({
        fullName: g.fullName?.trim() || '',
        age: parseInt(g.age, 10) || '',
        nationality: g.nationality || '',
        phone: g.phoneNumber ? `${g.phoneCode || '+91'} ${g.phoneNumber}`.trim() : '',
        email: g.email?.trim() || '',
        idType: g.idType || 'aadhaar',
        idFrontBase64: gFront,
        idFrontName: g.idFileFront?.name || '',
        idFrontMime: g.idFileFront?.type || '',
        idBackBase64: gBack,
        idBackName: g.idFileBack?.name || '',
        idBackMime: g.idFileBack?.type || '',
      });
    }
  }

  const payload = {
    registrationId: clientRegId,
    // Step 1 — Personal
    fullName: formData.fullName.trim(),
    age: parseInt(formData.age, 10),
    nationality: formData.nationality,
    phone: `${formData.phoneCode} ${formData.phoneNumber}`.trim(),
    email: formData.email?.trim() || '',
    additionalGuests: processedAdditionalGuests,

    // Step 2 — Identity (Front & Back for Primary)
    idType: formData.idType,
    idFrontBase64: frontBase64,
    idFrontName: formData.idFileFront?.name || '',
    idFrontMime: formData.idFileFront?.type || '',
    idBackBase64: backBase64,
    idBackName: formData.idFileBack?.name || '',
    idBackMime: formData.idFileBack?.type || '',

    // Step 3 — Stay
    property: formData.property,
    permanentAddress: formData.permanentAddress.trim(),
    checkInDate: formData.checkInDate,
    checkOutDate: formData.checkOutDate,
    roomNumber: formData.roomNumber.trim(),
    arrivalTimestamp: formData.arrivalTimestamp || new Date().toISOString(),

    // Step 4 — Purpose
    visitPurpose: formData.visitPurpose,
    visitDetails: formData.visitDetails.trim(),

    // Step 5 — Consent
    consentGiven: formData.consentGiven,
  };

  try {
    const res = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      redirect: 'follow',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const text = await res.text();
      try {
        const data = JSON.parse(text);
        if (data && data.success) {
          return { success: true, registrationId: data.registrationId || clientRegId };
        }
      } catch {
        // In case Google returns text or HTML redirect
        return { success: true, registrationId: clientRegId };
      }
    }
  } catch (err) {
    // If CORS blocked the read after Google redirect, but request succeeded
    // Or if network error occurred
    if (err.message && err.message.includes('configured')) {
      throw err;
    }
    // Fallback attempt via no-cors mode if standard fetch fails CORS check
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      });
      return { success: true, registrationId: clientRegId };
    } catch {
      throw new Error('Failed to submit form. Please check your internet connection or Google Apps Script URL.');
    }
  }

  return { success: true, registrationId: clientRegId };
}

// ── Helpers ────────────────────────────────────────────────────────

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // Strip "data:<mime>;base64," prefix — send raw base64
      const base64 = reader.result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = () => reject(new Error('Failed to read file. Please try again.'));
  });
}
