import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_1rruujp';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_rkcpzhg';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'sjJ8kK6U9wFjY0zX9';

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

// Send to GoHighLevel webhook
const sendToWebhook = async (data: EmailData): Promise<boolean> => {
  try {
    if (DEBUG_MODE) {
      console.log('Sending to webhook:', data);
    }

    const webhookData = {
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        city: data.city || '',
        message: data.message
      }
    };

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(webhookData)
    });

    if (DEBUG_MODE) {
      console.log('Webhook response status:', response.status);
    }

    if (!response.ok) {
      if (DEBUG_MODE) {
        const text = await response.text();
        console.error('Webhook error response:', text);
      }
      return false;
    }
    
    return true;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('Webhook error:', error);
    }
    return false;
  }
};

// Main send function that tries both methods
export const sendEmail = async (data: EmailData): Promise<void> => {
  if (DEBUG_MODE) {
    console.log('📧 Starting dual submission:', data);
  }

  // Execute both submissions in parallel
  const [webhookSuccess, emailJSSuccess] = await Promise.all([
    sendToWebhook(data),
    sendViaEmailJS(data)
  ]);

  if (DEBUG_MODE) {
    console.log('Results - Webhook:', webhookSuccess, 'EmailJS:', emailJSSuccess);
  }
  
  // Success if either method succeeds
  if (webhookSuccess || emailJSSuccess) {
    const methods = [];
    if (webhookSuccess) methods.push('GHL Webhook');
    if (emailJSSuccess) methods.push('EmailJS');
    
    if (DEBUG_MODE) {
      console.log(`✅ Form submitted successfully via: ${methods.join(' + ')}`);
    }
    return;
  }
  
  // Both methods failed
  throw new Error('Failed to send contact form data through any available method');
};

// Webhook-only send function (for testing)
export const sendToWebhookOnly = async (data: EmailData): Promise<void> => {
  const success = await sendToWebhook(data);
  if (!success) {
    throw new Error('Failed to send data to webhook');
  }
};