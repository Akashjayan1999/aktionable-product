"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AILawyerConfigFormProps {
  onConfigSubmit: () => void;
}

const AILawyerConfigForm: React.FC<AILawyerConfigFormProps> = ({ onConfigSubmit }) => {
  return (
    <div className="flex-1 flex items-center justify-center p-4 overflow-y-auto">
      <Card className="w-full max-w-4xl mx-4">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl">Hello Admin, How can I assist you today?</CardTitle>
          <p className="text-muted-foreground">
            I&apos;m your AI Lawyer, here to provide answers to your legal queries. Before we begin, I need some information from you. Please select the relevant options below and submit them. I&apos;ll configure a chat window tailored to your needs based on the details you provide.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Configure Your Chat Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="language" className="block text-sm font-medium text-muted-foreground mb-2">Select Language</label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="English" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-muted-foreground mb-2">Select Country</label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="India" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="usa">USA</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-muted-foreground mb-2">Select Type</label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Contract AI Lawyer" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="contract">Contract AI Lawyer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Contract Drafting & Review, Contract Compliance Monitoring, Risk Identification and Mitigation, Legal Clauses Standardization, Contract Negotiation Assistance, Performance and Termination Clauses
            </p>
            <div className="flex justify-end">
              <Button onClick={onConfigSubmit}>Create Your Lawyer Chat</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AILawyerConfigForm; 