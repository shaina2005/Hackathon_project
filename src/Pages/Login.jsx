import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("Login failed");
      }

      const data = await res.json();

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role); // optional
      navigate("/dashboard");
    } catch (error) {
      alert("Login failed. Check email or password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h3 className="login-title">Login to AskPCTE</h3>
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-4">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
