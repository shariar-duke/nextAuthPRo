"use client";
import { doCradentialLogin } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SocialLogin from "./SocialLogin";

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Reset any previous errors

    try {
      const formData = new FormData(event.currentTarget);
      const response = await doCradentialLogin(formData);

      if (response?.error) {
        setError(response.error); // Set the error if it exists
      } else {
        router.push("/home");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {error && (
          <div className="text-red-500 text-sm mt-2">
            {error} {/* Display error message here */}
          </div>
        )}

        <div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Credential Login
          </button>
        </div>
      </form>

      {/* Social Login component */}
      <div className="mt-6">
        <SocialLogin />
      </div>
    </div>
  );
}
