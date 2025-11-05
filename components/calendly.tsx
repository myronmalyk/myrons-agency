'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

export function ConsultationCard() {
  const calendlyUrl = "https://calendly.com/myronmalyk/30min";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-500" />
          Schedule a Call
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          Prefer to talk? Schedule a 30-minute consultation call with our AI automation experts.
        </p>
        <Button 
          variant="outline" 
          className="w-full group"
          asChild
        >
          <a 
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Consultation
            <Calendar className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}