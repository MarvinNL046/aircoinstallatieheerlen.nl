"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import { sendToWebhookOnly } from '@/lib/email';

export default function ContactWebhookTestForm() {
  const [formData, setFormData] = useState({
    name: 'Test User',
    email: 'test@example.com',
    phone: '0612345678',
    city: 'Heerlen',
    message: 'This is a test message from the webhook test page.',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [responseDetails, setResponseDetails] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setResponseDetails('');

    try {
      const startTime = Date.now();
      await sendToWebhookOnly(formData);
      const endTime = Date.now();
      
      setStatus('success');
      setResponseDetails(`Webhook responded successfully in ${endTime - startTime}ms`);
    } catch (error) {
      console.error('Webhook error:', error);
      setStatus('error');
      setResponseDetails(error instanceof Error ? error.message : 'Unknown error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <Input
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full min-h-[100px]"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={status === 'sending'}
        className="w-full"
      >
        {status === 'sending' ? (
          'Sending to webhook...'
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" /> Test Webhook
          </>
        )}
      </Button>

      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
            <div>
              <p className="text-green-800 font-medium">Webhook Success!</p>
              <p className="text-green-700 text-sm mt-1">{responseDetails}</p>
            </div>
          </div>
        </div>
      )}
      
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
            <div>
              <p className="text-red-800 font-medium">Webhook Failed</p>
              <p className="text-red-700 text-sm mt-1">{responseDetails}</p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h3 className="font-medium text-gray-900 mb-2">Test Data Preview:</h3>
        <pre className="text-xs text-gray-700 overflow-x-auto">
{JSON.stringify({
  data: formData
}, null, 2)}
        </pre>
      </div>
    </form>
  );
}