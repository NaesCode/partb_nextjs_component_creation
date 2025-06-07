"use client";
import React, { useState } from 'react';

const StudentInfo: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    idNumber: '',
    email: '',
    course: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const fields = [
    { label: "Full Name", id: "name", type: "text" },
    { label: "ID #", id: "idNumber", type: "text" },
    { label: "Email", id: "email", type: "email" },
    { label: "Course & Year", id: "course", type: "text" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 shadow-md">
      {fields.map((field) => (
        <div key={field.id}>
          <label htmlFor={field.id} className="block mb-1">{field.label}:</label>
          <input
            type={field.type}
            id={field.id}
            value={form[field.id as keyof typeof form]}
            onChange={handleChange}
            className="border rounded p-2"
            required
            readOnly={submitted} 
          />
        </div>
      ))}
      <button
        type="submit"
        className={`rounded p-2 text-white transition-colors ${
          submitted
            ? "bg-green-500 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
        disabled={submitted}
      >
        {submitted ? "Submitted" : "Submit"}
      </button>
    </form>
  );
};

export default StudentInfo;