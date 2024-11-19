'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from "lucide-react"
import { useState } from "react"
import { DEBUG } from '@/lib/constants'

interface RegisterModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface FormErrors {
  [key: string]: string;
}

export function RegisterModal({ open, onOpenChange }: RegisterModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    phone: '',
    teamSize: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  if (DEBUG) {
    console.log('RegisterModal rendered');
    console.log('Form data:', formData);
    console.log('Form errors:', errors);
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = 'Please enter your company name';
    }

    // Position validation
    if (!formData.position.trim()) {
      newErrors.position = 'Please enter your position';
    }

    // Phone validation
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Team size validation
    if (!formData.teamSize) {
      newErrors.teamSize = 'Please select your team size';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      if (DEBUG) console.log('Form submitted:', formData);
      window.location.href = '/conversation';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] p-4 sm:p-6 h-[90vh] sm:h-auto overflow-y-auto">
        <Button
          className="absolute right-2 top-2 sm:right-4 sm:top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
          onClick={() => onOpenChange?.(false)}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
        
        <DialogHeader className="space-y-2 sm:space-y-3">
          <DialogTitle className="text-xl sm:text-2xl font-bold">Register for Practice Session</DialogTitle>
          <DialogDescription className="text-sm sm:text-base">
            Enter your details to start practicing with our AI sales simulator.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 mt-4">
          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="name" className="text-sm sm:text-base">Full Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className={`h-9 sm:h-10 text-sm sm:text-base ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className="text-xs sm:text-sm text-red-500">{errors.name}</p>}
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className={`h-9 sm:h-10 text-sm sm:text-base ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-xs sm:text-sm text-red-500">{errors.email}</p>}
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="company" className="text-sm sm:text-base">Company</Label>
            <Input
              id="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
              className={`h-9 sm:h-10 text-sm sm:text-base ${errors.company ? 'border-red-500' : ''}`}
            />
            {errors.company && <p className="text-xs sm:text-sm text-red-500">{errors.company}</p>}
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="position" className="text-sm sm:text-base">Position</Label>
            <Input
              id="position"
              placeholder="Sales Manager"
              value={formData.position}
              onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
              className={`h-9 sm:h-10 text-sm sm:text-base ${errors.position ? 'border-red-500' : ''}`}
            />
            {errors.position && <p className="text-xs sm:text-sm text-red-500">{errors.position}</p>}
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="phone" className="text-sm sm:text-base">Phone Number</Label>
            <Input
              id="phone"
              placeholder="+1 234 567 8900"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className={`h-9 sm:h-10 text-sm sm:text-base ${errors.phone ? 'border-red-500' : ''}`}
            />
            {errors.phone && <p className="text-xs sm:text-sm text-red-500">{errors.phone}</p>}
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="teamSize" className="text-sm sm:text-base">How many sales professionals are on your team?</Label>
            <Select 
              value={formData.teamSize} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, teamSize: value }))}
            >
              <SelectTrigger className={`h-9 sm:h-10 text-sm sm:text-base ${errors.teamSize ? 'border-red-500' : ''}`}>
                <SelectValue placeholder="Select team size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-5">1-5</SelectItem>
                <SelectItem value="6-10">6-10</SelectItem>
                <SelectItem value="11-20">11-20</SelectItem>
                <SelectItem value="21+">21+</SelectItem>
              </SelectContent>
            </Select>
            {errors.teamSize && <p className="text-xs sm:text-sm text-red-500">{errors.teamSize}</p>}
          </div>

          <Button 
            type="submit" 
            className="w-full h-9 sm:h-10 text-sm sm:text-base bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            Start Practice
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}