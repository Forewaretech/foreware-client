"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import z from "zod";
import Button from "../components/Buttons/Button";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Please enter a valid email"),
  phone: z.string().regex(/^\d+$/, "Phone number must only contain digits"),
  message: z.string().min(10, "Message should not be less than 10 characters"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log("data: ", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[11px] font-bold uppercase text-gray-500 ml-1">
            Full Name
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="John Doe"
            className="w-full bg-bg-2 border border-line rounded-xl px-4 py-3 
            text-sm focus:outline-none focus:border-primary transition-colors"
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-[11px] font-bold uppercase text-gray-500 ml-1">
            Email Address
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="john@example.com"
            className="w-full bg-bg-2 border border-line rounded-xl px-4 py-3 text-sm 
            focus:outline-none focus:border-primary transition-colors"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[11px] font-bold uppercase text-gray-500 ml-1">
          Phone
        </label>
        <input
          {...register("phone")}
          type="phone"
          placeholder="Phone"
          className="w-full bg-bg-2 border border-line rounded-xl px-4 py-3 text-sm 
          focus:outline-none focus:border-primary transition-colors"
        />
        {errors.phone && <p>{errors.phone.message}</p>}
        {/* <select className="w-full bg-bg-2 border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors appearance-none">
                  {services.map(({ text }) => (
                    <option key={text} value={text}>
                      {text}
                    </option>
                  ))}
                </select> */}
      </div>

      <div className="space-y-2">
        <label className="text-[11px] font-bold uppercase text-gray-500 ml-1">
          Message
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell us about your project..."
          className="w-full bg-bg-2 border border-line rounded-xl px-4 py-3 text-sm 
          focus:outline-none focus:border-primary transition-colors resize-none"
        ></textarea>
        {errors.message && <p>{errors.message.message}</p>}
      </div>

      <Button className="w-full py-4 flex items-center justify-center gap-2">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
