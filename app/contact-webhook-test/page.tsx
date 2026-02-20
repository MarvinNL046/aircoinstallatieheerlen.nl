import { Metadata } from 'next';
import ContactWebhookTestForm from '@/components/forms/ContactWebhookTestForm';

export const metadata: Metadata = {
  title: 'Webhook Test (Removed) | StayCool Airco',
  description: 'GoHighLevel webhook test has been removed',
  robots: 'noindex, nofollow',
};

export default function ContactWebhookTestPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Webhook Test (Removed)
          </h1>
          <p className="text-muted-foreground mb-8">
            The GoHighLevel webhook integration has been removed.
            Contact forms now use EmailJS + LeadFlow CRM.
          </p>

          <ContactWebhookTestForm />
        </div>
      </div>
    </main>
  );
}
