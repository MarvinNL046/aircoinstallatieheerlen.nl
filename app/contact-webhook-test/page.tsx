import { Metadata } from 'next';
import ContactWebhookTestForm from '@/components/forms/ContactWebhookTestForm';

export const metadata: Metadata = {
  title: 'Webhook Test | StayCool Airco',
  description: 'Test page for GoHighLevel webhook integration',
  robots: 'noindex, nofollow',
};

export default function ContactWebhookTestPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            GoHighLevel Webhook Test
          </h1>
          <p className="text-muted-foreground mb-8">
            This page tests the webhook integration only (no EmailJS). 
            Use this to verify the webhook is receiving data correctly.
          </p>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
            <p className="text-amber-800 text-sm">
              <strong>Note:</strong> This is a test page with noindex meta tag. 
              It will not appear in search results.
            </p>
          </div>

          <ContactWebhookTestForm />
        </div>
      </div>
    </main>
  );
}