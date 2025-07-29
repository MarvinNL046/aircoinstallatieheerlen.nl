import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Home, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Bedankt voor uw aanvraag | StayCool Airco',
  description: 'Bedankt voor uw aanvraag. We nemen zo spoedig mogelijk contact met u op.',
};

export default function TotSnelPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <CheckCircle className="h-16 w-16 text-orange-500 mx-auto mb-6" />
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Bedankt voor uw aanvraag!
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            We hebben uw bericht in goede orde ontvangen. Een van onze experts neemt 
            binnen 24 uur contact met u op om uw wensen te bespreken.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="font-semibold text-blue-900 mb-2">
              Wat kunt u verwachten?
            </h2>
            <ul className="text-left text-blue-800 space-y-2">
              <li>• Persoonlijk contact binnen 24 uur</li>
              <li>• Gratis adviesgesprek op locatie</li>
              <li>• Vrijblijvende offerte op maat</li>
              <li>• Professionele installatie door gecertificeerde monteurs</li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              Heeft u direct een vraag? Bel ons gerust!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Terug naar Home
                </Link>
              </Button>
              
              <Button asChild variant="outline">
                <a href="tel:0462021430">
                  <Phone className="mr-2 h-4 w-4" />
                  046 202 1430
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}