"use client";
import { useState } from "react";

const TicketForm = () => {
  const [formData, setFormData] = useState({
    ticketId: "",
    customerName: "",
    customerEmail: "",
    customerAge: "",
    customerGender: "",
    productPurchased: "",
    brand: "",
    dateOfPurchase: "",
    ticketType: "",
    ticketSubject: "",
    ticketDescription: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch("/api/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Ticket saved successfully!");
      setFormData({
        ticketId: "",
        customerName: "",
        customerEmail: "",
        customerAge: "",
        customerGender: "",
        productPurchased: "",
        brand: "",
        dateOfPurchase: "",
        ticketType: "",
        ticketSubject: "",
        ticketDescription: "",
      });
    } else {
      alert("Failed to save ticket.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-8">
      {/* Customer Name */}
      <div className="flex flex-col justify-between md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <label htmlFor="Name" className="flex items-center">Name</label>
        <input
          className="w-2/3 bg-gray-100 dark:bg-white border border-gray-300 dark:border-gray-500 text-gray-900 dark:text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
          required
        />
      </div>

      {/* Customer Email */}
      <div  className="flex flex-col justify-between md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <label htmlFor="Email" className="flex items-center">Email</label>
        <input
          className="w-2/3 bg-gray-100 dark:bg-whiteborder border-gray-300 dark:border-gray-600 text-gray-900 dark:text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
          type="email"
          name="customerEmail"
          placeholder="Customer Email"
          value={formData.customerEmail}
          onChange={handleChange}
          required
        />
      </div>

      {/* Customer Age */}
      <div className="flex flex-col justify-between md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
      <label htmlFor="Age" className="flex items-center">Age</label>
        <input
          className="w-2/3 bg-gray-100 dark:bg-white border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
          type="number"
          name="customerAge"
          placeholder="Customer Age"
          value={formData.customerAge}
          onChange={handleChange}
          required
        />
      </div>

      {/* Gender Selection */}
      <div className="flex flex-col justify-between md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
      <label htmlFor="Gender" className="flex items-center">Gender</label>
        <select
          name="customerGender"
          className="w-2/3 bg-white dark:bg-white border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
          value={formData.customerGender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Product Purchased */}
      <div className="flex flex-col  justify-between md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
      <label htmlFor="Productpurchased" className="flex items-center">Product Purchased</label>
        <input
          className="w-2/3 bg-gray-100 dark:bg-white border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
          type="text"
          name="productPurchased"
          placeholder="Product Purchased"
          value={formData.productPurchased}
          onChange={handleChange}
          required
        />
      </div>

      {/* Brand */}
      <div className="flex flex-col justify-between md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
      <label htmlFor="Brand" className="flex items-center">Brand</label>
        <input
          className="w-2/3 bg-white dark:bg-white border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
          type="text"
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleChange}
          required
        />
      </div>

      {/* Date of Purchase */}
      <div className="flex flex-col justify-between md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <label htmlFor="Date of Purchase" className="flex items-center w-2/4"> Date of Purchase</label>
        <input
          className="w-2/3 bg-white dark:bg-white border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
          type="date"
          name="dateOfPurchase"
          value={formData.dateOfPurchase}
          onChange={handleChange}
          required
        />
      </div>

      {/* Ticket Type Selection */}
      <div className="flex flex-col justify-between md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
      <label htmlFor="Ticketype" className="flex items-center">Ticket Type</label>
        <select
          name="ticketType"
          className="w-2/3 bg-gray-100 dark:bg-white border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
          value={formData.ticketType}
          onChange={handleChange}
          required
        >
          <option value="">Select Ticket Type</option>
          <option value="Support">Support</option>
          <option value="Feedback">Feedback</option>
          <option value="Inquiry">Inquiry</option>
        </select>
      </div>

      {/* Ticket Subject */}
      <div className="flex flex-col justify-between md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
      <label htmlFor="Subject" className="flex items-center">Subject</label>
        <input
          className="w-2/3 bg-gray-100 dark:bg-white border-gray-300 dark:border-gray-600 text-gray-900 dark:text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
          type="text"
          name="ticketSubject"
          placeholder="Ticket Subject"
          value={formData.ticketSubject}
          onChange={handleChange}
          required
        />
      </div>

      {/* Ticket Description */}
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <textarea
          className="w-full bg-gray-100 dark:bg-white border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
          name="ticketDescription"
          placeholder="Describe your issue..."
          value={formData.ticketDescription}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 w-full"
        >
          Submit Ticket
        </button>
      </div>
    </form>
  );
};

export default TicketForm;
