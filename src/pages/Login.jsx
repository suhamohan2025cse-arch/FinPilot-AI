import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      localStorage.setItem("token", res.data.token);

      alert("Login Successful ✅");

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#020817]">
      <form
        onSubmit={handleLogin}
        className="bg-slate-900 p-8 rounded-xl w-[420px]"
      >
        <h1 className="text-white text-3xl font-bold mb-6">
          FinPilot AI Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-slate-800 text-white"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded bg-slate-800 text-white"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-gray-400 text-center mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-400">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}