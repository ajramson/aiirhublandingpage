"use client";

import { useEffect, useState } from "react";

type DemoModalProps = {
  open: boolean;
  onClose: () => void;
};

export function DemoModal({ open, onClose }: DemoModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      company: formData.get('company') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      // Create mailto link
      const subject = `Demo Request from ${data.name} at ${data.company}`;
      const body = `Name: ${data.name}\nCompany: ${data.company}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
      const mailtoLink = `mailto:ajramson@pcgadvisory.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Try to open email client
      const emailWindow = window.open(mailtoLink, '_blank');
      
      if (emailWindow) {
        // Email client opened successfully
        setSubmitted(true);
        setTimeout(() => {
          onClose();
          setSubmitted(false);
        }, 3000);
      } else {
        // Fallback: show email content and copy to clipboard
        const emailContent = `To: ajramson@pcgadvisory.com\nSubject: ${subject}\n\n${body}`;
        navigator.clipboard.writeText(emailContent);
        alert('Email client could not be opened. Email content has been copied to your clipboard. Please paste it into your email client and send to ajramson@pcgadvisory.com');
        onClose();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please email ajramson@pcgadvisory.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div aria-modal="true" role="dialog" className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-lg rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl">
        <button
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-2 text-gray-500 hover:bg-gray-100 focus-ring"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Request a Demo</h2>
        <p className="mt-2 text-gray-600">Tell us about your company and what you&apos;re looking to streamline.</p>
        <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
            <input id="name" name="name" className="rounded-xl border border-gray-300 px-3 py-2 focus-ring" required disabled={isSubmitting} />
          </div>
          <div className="grid gap-1">
            <label htmlFor="company" className="text-sm font-medium text-gray-700">Company</label>
            <input id="company" name="company" className="rounded-xl border border-gray-300 px-3 py-2 focus-ring" required disabled={isSubmitting} />
          </div>
          <div className="grid gap-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Work email</label>
            <input id="email" name="email" type="email" className="rounded-xl border border-gray-300 px-3 py-2 focus-ring" required disabled={isSubmitting} />
          </div>
          <div className="grid gap-1">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows={3} className="rounded-xl border border-gray-300 px-3 py-2 focus-ring" disabled={isSubmitting} />
          </div>
          <div className="mt-2">
            {submitted ? (
              <div className="rounded-xl bg-green-50 px-4 py-2 text-green-700">
                Demo request sent! We'll be in touch soon.
              </div>
            ) : (
              <button 
                className="inline-flex items-center rounded-xl bg-primary-600 px-5 py-2.5 text-white hover:bg-primary-500 focus-ring disabled:opacity-50" 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default DemoModal;


