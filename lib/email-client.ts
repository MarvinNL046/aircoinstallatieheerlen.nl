"use client";

import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'sjJ8kK6U9wFjY0zX9');

// EmailJS configuration
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_1rruujp';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_rkcpzhg';

// Webhook configuration
const WEBHOOK_URL = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL || "https://services.leadconnectorhq.com/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f";

// Debug mode
const DEBUG_MODE = process.env.NODE_ENV === 'development';

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
}

// Send to GHL Webhook
const sendToWebhook = async (data: EmailData): Promise<boolean> => {
  try {
    if (DEBUG_MODE) {
      console.log('🚀 Sending to webhook:', data);
    }

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone || '',
          city: data.city || '',
          message: data.message
        }
      })
    });

    if (DEBUG_MODE) {
      console.log('Webhook response:', response.status);
    }

    return response.ok;
  } catch (error) {
    console.error('❌ Webhook error:', error);
    return false;
  }
};

// Send via EmailJS (client-side)
const sendViaEmailJS = async (data: EmailData): Promise<boolean> => {
  try {
    if (DEBUG_MODE) {
      console.log('📧 Sending via EmailJS:', data);
    }

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      city: data.city,
      message: data.message,
      to_email: 'info@staycoolairco.nl'
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (DEBUG_MODE) {
      console.log('EmailJS response:', response);
    }

    return response.status === 200;
  } catch (error) {
    console.error('❌ EmailJS error:', error);
    return false;
  }
};

// Main submission function with dual system (client-side)
export const sendEmailDual = async (data: EmailData): Promise<{ success: boolean; method: string }> => {
  if (DEBUG_MODE) {
    console.log('🔄 Starting dual submission:', data);
  }

  // Execute both submissions in parallel
  const [webhookSuccess, emailJSSuccess] = await Promise.all([
    sendToWebhook(data),
    sendViaEmailJS(data)
  ]);

  if (DEBUG_MODE) {
    console.log('Results - Webhook:', webhookSuccess, 'EmailJS:', emailJSSuccess);
  }
  
  // Determine which method(s) succeeded
  const methods = [];
  if (webhookSuccess) methods.push('GHL Webhook');
  if (emailJSSuccess) methods.push('EmailJS');
  
  const success = webhookSuccess || emailJSSuccess;
  
  if (success && DEBUG_MODE) {
    console.log(`✅ Form submitted successfully via: ${methods.join(' + ')}`);
  }
  
  return {
    success,
    method: methods.join(' + ') || 'none'
  };
};

// Analytics tracking helpers
export const trackFormSubmission = (formType: string, success: boolean) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'form_submission', {
      form_type: formType,
      success: success,
      send_to: process.env.NEXT_PUBLIC_GA_ID
    });
  }
};

export const trackPixelFormSubmission = (formType: string, success: boolean) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', {
      content_name: formType,
      status: success ? 'completed' : 'failed'
    });
  }
};