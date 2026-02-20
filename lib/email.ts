import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_1rruujp';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_rkcpzhg';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'sjJ8kK6U9wFjY0zX9';

// LeadFlow CRM webhook configuration
const LEADFLOW_URL = "https://wetryleadflow.com/api/webhooks/leads";
const LEADFLOW_API_KEY = "lf_lRyHo1ENukt9VsG9gYT8EKeDA_nKuoQ1";

// Debug mode
const DEBUG_MODE = process.env.NODE_ENV === 'development';

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
}

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

// Send via EmailJS
const sendViaEmailJS = async (data: EmailData): Promise<boolean> => {
  try {
    if (DEBUG_MODE) {
      console.log('Sending via EmailJS:', data);
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
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    if (DEBUG_MODE) {
      console.log('EmailJS response:', response);
    }

    return response.status === 200;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('EmailJS error:', error);
    }
    return false;
  }
};

// Send to LeadFlow CRM webhook
const sendToLeadflow = async (data: EmailData): Promise<boolean> => {
  try {
    const nameParts = data.name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const leadflowData = {
      firstName,
      lastName,
      email: data.email,
      phone: data.phone,
      message: data.message,
      source: 'website-contact',
      customFields: {
        city: data.city,
        woonplaats: data.city
      }
    };

    if (DEBUG_MODE) {
      console.log('Sending data to Leadflow CRM:', leadflowData);
    }

    const response = await fetch(LEADFLOW_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": LEADFLOW_API_KEY
      },
      body: JSON.stringify(leadflowData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      if (DEBUG_MODE) {
        console.error(`Leadflow error (${response.status}):`, errorText);
      }
      return false;
    }

    if (DEBUG_MODE) {
      console.log('Leadflow submission successful');
    }
    return true;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('Leadflow submission failed:', error);
    }
    return false;
  }
};

// Main send function that tries both methods
export const sendEmail = async (data: EmailData): Promise<void> => {
  if (DEBUG_MODE) {
    console.log('📧 Starting dual submission:', data);
  }

  // Execute all submissions in parallel
  const [emailJSSuccess, leadflowSuccess] = await Promise.all([
    sendViaEmailJS(data),
    sendToLeadflow(data)
  ]);

  if (DEBUG_MODE) {
    console.log('Results - EmailJS:', emailJSSuccess, 'Leadflow:', leadflowSuccess);
  }

  // Success if any method succeeds
  if (emailJSSuccess || leadflowSuccess) {
    const methods = [];
    if (emailJSSuccess) methods.push('EmailJS');
    if (leadflowSuccess) methods.push('Leadflow');

    if (DEBUG_MODE) {
      console.log(`Form submitted successfully via: ${methods.join(' + ')}`);
    }
    return;
  }

  // All methods failed
  throw new Error('Failed to send contact form data through any available method');
};