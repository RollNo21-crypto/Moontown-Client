import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, Check, Calendar, Gift, Package, User } from 'lucide-react';
import { supabase } from '../lib/supabase';
import PersonalDetailsForm from '../components/booking/PersonalDetailsForm';
import OccasionDetailsForm from '../components/booking/OccasionDetailsForm';
import PackageSelectionForm from '../components/booking/PackageSelectionForm';
import BookingSummary from '../components/booking/BookingSummary';
import ConfirmationModal from '../components/booking/ConfirmationModal';
import { calculatePrice } from '../utils/pricing';
import type { BookingFormData } from '../types/booking';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Match this with database schema
const initialBookingData: BookingFormData = {
  name: '',
  phone: '',
  email: '',
  address: 'N/A', // Default value since it's required in DB
  location: '',
  date: '',
  time: '',
  package: '',
  occasion: '',
  occasion_details: {}, // jsonb in DB
  cake: '', // nullable in DB
  needs_package: '', // will be converted to boolean before saving
  additional_options: { // jsonb in DB
    decoration: false,
    fogEntry: '',
    photography: false
  }
};

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  // Form state
  const [formData, setFormData] = useState<BookingFormData>(initialBookingData);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(1);
  
  // UI state
  const [error, setError] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [direction, setDirection] = useState<number>(1); // For slide animations
  
  // Database IDs
  const [bookingId, setBookingId] = useState<string>('');
  const [activityId, setActivityId] = useState<string | null>(null);
  
  // Steps configuration
  const steps = [
    { id: 1, title: 'Personal Details', icon: <User className="w-5 h-5" /> },
    { id: 2, title: 'Occasion', icon: <Gift className="w-5 h-5" /> },
    { id: 3, title: 'Package', icon: <Package className="w-5 h-5" /> },
    { id: 4, title: 'Review', icon: <Check className="w-5 h-5" /> }
  ];

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setFormData(initialBookingData);
      setCurrentStep(1);
      setError('');
      setShowConfirmation(false);
      setBookingId('');
      setActivityId(null);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Update price when form data changes
  useEffect(() => {
    setTotalPrice(calculatePrice(formData));
  }, [formData]);

  // Track user activity
  const trackActivity = async (step: number) => {
    try {
      if (!formData.name || !formData.email || !formData.phone) {
        return;
      }

      const activityData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        step_completed: step,
        last_active: new Date().toISOString()
      };

      if (activityId) {
        const { error } = await supabase
          .from('booking_activities')
          .update(activityData)
          .eq('id', activityId);

        if (error) throw error;
      } else {
        const { data, error } = await supabase
          .from('booking_activities')
          .insert([activityData])
          .select()
          .single();

        if (error) throw error;
        if (data) setActivityId(data.id);
      }
    } catch (err) {
      console.error('Error tracking activity:', err);
    }
  };

  // Form update handlers
  const handlePersonalDetailsUpdate = (field: string, value: string): void => {
    setFormData((prev: BookingFormData) => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleOccasionChange = (occasion: string): void => {
    setFormData((prev: BookingFormData) => ({ ...prev, occasion, occasion_details: {} }));
    setError('');
  };

  const handleOccasionDetailsChange = (field: string, value: string): void => {
    setFormData((prev: BookingFormData) => {
      if (field === 'location' || field === 'date' || field === 'time') {
        return { ...prev, [field]: value };
      }
      return {
        ...prev,
        occasion_details: { ...prev.occasion_details, [field]: value }
      };
    });
    setError('');
  };

  const handlePackageChange = (field: string, value: string | boolean): void => {
    setFormData((prev: BookingFormData) => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleAdditionalOptionsChange = (option: string, value: boolean | string): void => {
    setFormData((prev: BookingFormData) => ({
      ...prev,
      additional_options: { ...prev.additional_options, [option]: value }
    }));
    setError('');
  };

  // Validation functions
  const validatePersonalDetails = (): boolean => {
    if (!formData.name || !formData.phone || !formData.email) {
      setError('Please fill in all personal details');
      return false;
    }
    // Validate email format
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    // Validate phone format (10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError('Please enter a valid 10-digit mobile number');
      return false;
    }
    return true;
  };

  const validateBookingDetails = (): boolean => {
    if (!formData.location || !formData.date || !formData.time || 
        !formData.package || !formData.occasion || !formData.cake || 
        !formData.needs_package) {
      setError('Please fill in all booking details');
      return false;
    }
    return true;
  };

  // Form submission
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setError('');
    
    if (currentStep === 1) {
      if (validatePersonalDetails()) {
        await trackActivity(1);
        setDirection(1);
        setCurrentStep(2);
      }
      return;
    }
    
    if (currentStep === 2) {
      if (formData.occasion && formData.location && formData.date && formData.time) {
        setDirection(1);
        setCurrentStep(3);
        return;
      } else {
        setError('Please complete all occasion details');
        return;
      }
    }
    
    if (currentStep === 3) {
      setDirection(1);
      setCurrentStep(4);
      return;
    }

    if (!validateBookingDetails()) {
      return;
    }

    setSubmitting(true);
    
    try {
      await trackActivity(2);

      const bookingPayload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        location: formData.location,
        date: formData.date,
        time: formData.time,
        package: formData.package,
        occasion: formData.occasion,
        occasion_details: formData.occasion_details,
        cake: formData.cake,
        needs_package: formData.needs_package === 'Yes',
        additional_options: formData.additional_options,
        total_price: calculatePrice(formData),
        status: 'pending'
      };

      const { data: savedBooking, error: bookingError } = await supabase
        .from('bookings')
        .insert([bookingPayload])
        .select()
        .single();

      if (bookingError) {
        throw new Error(bookingError.message);
      }

      if (!savedBooking?.id) {
        throw new Error('Failed to create booking');
      }

      setBookingId(savedBooking.id);
      setShowConfirmation(true);

      if (activityId) {
        await supabase
          .from('booking_activities')
          .delete()
          .eq('id', activityId);
      }
    } catch (err: any) {
      console.error('Booking error:', err);
      setError(err.message || 'Failed to save booking. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = (): void => {
    setFormData(initialBookingData);
    setCurrentStep(1);
    setError('');
    setShowConfirmation(false);
    setBookingId('');
    setActivityId(null);
    onClose();
  };

  if (!isOpen) return null;
  
  // Animation variants
  const pageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };
  
  const pageTransition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.3
  };
  
  const handleNext = () => {
    if (currentStep < 4) {
      setDirection(1);
      setCurrentStep(prev => prev + 1);
    }
  };
  
  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-60 z-50 overflow-y-auto backdrop-blur-sm">
        <div className="min-h-screen px-4 py-8 flex items-center justify-center">
          <div className="w-full max-w-md text-left bg-white shadow-2xl rounded-2xl overflow-hidden">
            <div className="relative">
              {/* Header */}
              <div className="sticky top-0 bg-white px-6 py-4 border-b z-10 rounded-t-2xl">
                <button
                  onClick={handleClose}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <X className="w-6 h-6" />
                </button>
                <h2 className="text-2xl font-bold text-gray-900">Book Your Private Theater</h2>
              </div>
              
              {/* Progress Indicator */}
              <div className="px-6 pt-4 pb-2">
                <div className="flex justify-between items-center mb-2">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex flex-col items-center">
                      <div 
                        className={`flex items-center justify-center w-10 h-10 rounded-full mb-1 transition-all duration-300 ${currentStep >= step.id 
                          ? 'bg-indigo-600 text-white' 
                          : 'bg-gray-200 text-gray-500'}`}
                      >
                        {step.icon}
                      </div>
                      <span className={`text-xs font-medium transition-all duration-300 ${currentStep >= step.id ? 'text-indigo-600' : 'text-gray-500'}`}>
                        {step.title}
                      </span>
                      {index < steps.length - 1 && (
                        <div className="hidden sm:block absolute h-0.5 w-1/4 bg-gray-200 top-[4.5rem] -z-10" 
                             style={{ left: `${(index * 33) + 12.5}%` }}>
                          <div 
                            className="h-full bg-indigo-600 transition-all duration-500" 
                            style={{ width: currentStep > step.id ? '100%' : '0%' }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mx-6 mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md">
                  {error}
                </div>
              )}

              {/* Form Content */}
              <div className="px-6 py-4 max-h-[calc(100vh-280px)] overflow-y-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <AnimatePresence custom={direction} initial={false} mode="wait">
                    <motion.div
                      key={currentStep}
                      custom={direction}
                      variants={pageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={pageTransition}
                    >
                      {currentStep === 1 && (
                        <PersonalDetailsForm
                          bookingData={formData}
                          onUpdate={handlePersonalDetailsUpdate}
                        />
                      )}
                      
                      {currentStep === 2 && (
                        <OccasionDetailsForm
                          occasion={formData.occasion}
                          onOccasionChange={handleOccasionChange}
                          onDetailsChange={handleOccasionDetailsChange}
                        />
                      )}
                      
                      {currentStep === 3 && (
                        <PackageSelectionForm
                          selectedPackage={formData.package}
                          needsPackage={formData.needs_package}
                          onPackageChange={handlePackageChange}
                          onAdditionalOptionChange={handleAdditionalOptionsChange}
                          additionalOptions={formData.additional_options}
                          cake={formData.cake}
                        />
                      )}
                      
                      {currentStep === 4 && (
                        <BookingSummary
                          bookingData={formData}
                          totalPrice={totalPrice}
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </form>
              </div>

              {/* Navigation Buttons */}
              <div className="sticky bottom-0 bg-white px-6 py-4 border-t shadow-inner">
                {currentStep === 1 ? (
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-indigo-600 text-white py-3 px-4 rounded-xl hover:bg-indigo-700 transition duration-200 font-medium flex items-center justify-center gap-2"
                  >
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                ) : currentStep === 4 ? (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex-1 bg-gray-100 text-gray-800 py-3 px-4 rounded-xl hover:bg-gray-200 transition duration-200 font-medium flex items-center justify-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={submitting}
                      className="flex-1 bg-indigo-600 text-white py-3 px-4 rounded-xl hover:bg-indigo-700 transition duration-200 font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitting ? 'Processing...' : 'Confirm Booking'} {!submitting && <Check className="w-4 h-4" />}
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex-1 bg-gray-100 text-gray-800 py-3 px-4 rounded-xl hover:bg-gray-200 transition duration-200 font-medium flex items-center justify-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex-1 bg-indigo-600 text-white py-3 px-4 rounded-xl hover:bg-indigo-700 transition duration-200 font-medium flex items-center justify-center gap-2"
                    >
                      Continue <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={handleClose}
        bookingData={formData}
        bookingId={bookingId}
        totalPrice={totalPrice}
      />
    </>
  );
}