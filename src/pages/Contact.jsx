import React from "react";

const Contact = () => {
  return (
    <>
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4">
          Have questions or want to reach us? Fill the form below.
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border rounded-xl outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border rounded-xl outline-none"
          />
          <textarea
            placeholder="Message"
            className="p-3 border rounded-xl outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
