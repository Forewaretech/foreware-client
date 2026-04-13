"use client";

import { useState } from "react"; // Added state for feedback
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../components/Buttons/Button";
import axios from "axios"; // npm install axios
import contactService, {
  contactSchema,
  ContactType,
} from "../hooks/contact/contactService";
import { toast } from "sonner";
import { apiClient } from "../lib/apiClient";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactType>({
    resolver: zodResolver(contactSchema), // Use the .body part of your schema
  });

  const onSubmit = async (data: ContactType) => {
    setIsSubmitting(true);
    try {
      // Replace with your actual API URL
      const response = await apiClient.post("/contact", data);
      console.log("RESULT: ", response);

      if (response.status === 201) {
        console.log("SUCCESS: ");
        toast.success("Message Received!", {
          description:
            "Thanks for reaching out. Our team will review your inquiry and get back to you within 24 hours.",
          position: "bottom-right",
          duration: 6000,
          style: {
            padding: "16px",
            borderRadius: "12px",
            border: "1px solid #D9D9D9",
            background: "#FFFFFF",
          },
        });
        reset(); // Clear the form
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-[11px] font-bold uppercase text-gray-500 ml-1">
            Full Name
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="John Doe"
            className={`w-full bg-bg-2 border ${errors.name ? "border-red-500" : "border-line"} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs ml-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-[11px] font-bold uppercase text-gray-500 ml-1">
            Email Address
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="john@example.com"
            className={`w-full bg-bg-2 border ${errors.email ? "border-red-500" : "border-line"} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs ml-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <label className="text-[11px] font-bold uppercase text-gray-500 ml-1">
          Phone
        </label>
        <input
          {...register("phone")}
          type="text"
          placeholder="+123456789"
          className={`w-full bg-bg-2 border ${errors.phone ? "border-red-500" : "border-line"} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors`}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs ml-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="text-[11px] font-bold uppercase text-gray-500 ml-1">
          Message
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell us about your project..."
          className={`w-full bg-bg-2 border ${errors.message ? "border-red-500" : "border-line"} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none`}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs ml-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
