import { Metadata } from 'next';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Form Test | StayCool Airco',
  description: 'Test page for complete contact form integration',
  robots: 'noindex, nofollow',
};

export default function ContactTestPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Contact Form Integration Test
          </h1>
          <p className="text-muted-foreground mb-8">
            This page tests the complete dual submission system (GoHighLevel webhook + EmailJS).
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <h3 className="font-semibold text-blue-900 mb-2">Test Features:</h3>
            <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
              <li>GoHighLevel webhook submission</li>
              <li>EmailJS fallback system</li>
              <li>Analytics tracking (GA4 + Facebook Pixel)</li>
              <li>Form validation and error handling</li>
              <li>Success redirect to /tot-snel</li>
            </ul>
          </div>

          <ContactForm 
            formType="test_form"
            redirectUrl="/tot-snel"
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Debug Information
          </h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-semibold mb-2">Submission Flow:</h3>
              <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                <li>Form data is sent to /api/contact endpoint</li>
                <li>API endpoint calls sendEmail() from /lib/email.ts</li>
                <li>sendEmail() submits to both webhook and EmailJS in parallel</li>
                <li>Success if either method succeeds</li>
                <li>Analytics events are tracked on success/failure</li>
              </ol>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-semibold mb-2">Environment Variables:</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>NEXT_PUBLIC_GHL_WEBHOOK_URL</li>
                <li>NEXT_PUBLIC_EMAILJS_SERVICE_ID</li>
                <li>NEXT_PUBLIC_EMAILJS_TEMPLATE_ID</li>
                <li>NEXT_PUBLIC_EMAILJS_PUBLIC_KEY</li>
                <li>NEXT_PUBLIC_GA_ID (for analytics)</li>
                <li>NEXT_PUBLIC_FACEBOOK_PIXEL_ID (optional)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-semibold mb-2">Console Logs:</h3>
              <p className="text-sm text-gray-700">
                Open browser DevTools console to see debug messages.
                In development mode, you'll see:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                <li>📧 Starting dual submission</li>
                <li>Webhook and EmailJS status</li>
                <li>✅ Success messages with method used</li>
                <li>❌ Error messages if failures occur</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}