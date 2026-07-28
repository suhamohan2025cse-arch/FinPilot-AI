import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      );

      localStorage.setItem("token", res.data.token);

      alert("Registration Successful ✅");

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#020817]">
      <form
        onSubmit={handleRegister}
        className="bg-slate-900 p-8 rounded-xl w-[420px]"
      >
        <h1 className="text-3xl font-bold text-white mb-6">
          Create Account
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-slate-800 text-white"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-slate-800 text-white"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-slate-800 text-white"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-6 p-3 rounded bg-slate-800 text-white"
          required
        />

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded"
          disabled={loading}
        >
          {loading ? "Creating Account..." : "Register"}
        </button>

        <p className="text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}