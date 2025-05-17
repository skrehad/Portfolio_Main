/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { toast } from "sonner";

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm<ContactFormData>();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<ContactFormData> = async (formData) => {
    try {
      setLoading(true);

      const response = await axios.post("/api/send-email", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        toast.success(
          "📬 Thank You for your Message. I will contact you as soon as Possible",
          {
            duration: 4000,
          }
        );

        reset();
      } else {
        toast.error("❌ Failed to send the message.");
      }
    } catch (error: any) {
      toast.error("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto rounded-lg">
      <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4">
        <div>
          <h1 className="text-4xl font-semibold text-white">Get in Touch</h1>
          <p className="text-sm text-gray-300 mt-6 leading-relaxed">
            Have some big idea or brand to develop and need help? Then reach
            out, we love to hear about your project and provide help.
          </p>

          <ul className="mt-12 space-y-8">
            <li className="flex items-center text-white">
              <MdEmail className="text-xl" />
              <a
                href="mailto:info@example.com"
                className="text-xl ml-4 hover:underline"
              >
                rehadhasan664@gmail.com
              </a>
            </li>

            <li className="flex items-center text-white">
              <MdPhone className="text-xl" />
              <a href="tel:+158996888" className="text-xl ml-4 hover:underline">
                +8801996064707
              </a>
            </li>
            <li className="flex items-center text-white">
              <MdPhone className="text-xl" />
              <a href="tel:+158996888" className="text-xl ml-4 hover:underline">
                +8801720304508 For WhatsApp
              </a>
            </li>

            <li className="flex items-center text-white">
              <MdLocationOn className="text-xl" />
              <span className="text-xl ml-4">
                Rupganj ,Narayanganj, Dhaka, Bangladesh
              </span>
            </li>
          </ul>
        </div>

        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-gray-300 mb-1 font-medium">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1 font-medium">
                Subject
              </label>
              <input
                type="text"
                {...register("subject", { required: true })}
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Subject"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1 font-medium">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-xl outline-none h-32 resize-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl text-lg font-semibold transition-all "
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
