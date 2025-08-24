"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send email to GoHighLevel
      await fetch(
        "https://link.wksocial.com/api/forms/B5iaNw7wutBcfZXCUC8j/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      toast.success("Thank you for subscribing!");
      setEmail("");
    } catch (error) {
      console.error("Error submitting email:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 xl:gap-8"
    >
      <input
        type="email"
        placeholder="Enter email here"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-white rounded-full px-10 md:px-4 py-2 md:py-3 w-full xl:w-[540px] text-black"
      />
      <button
        type="submit"
        className="max-w-[162px] bg-[#E5B946] hover:bg-yellow-500 text-black text-sm px-5 md:px-6 py-2 md:py-3 rounded-full font-bold uppercase cursor-pointer mx-auto md:mx-0"
      >
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;
