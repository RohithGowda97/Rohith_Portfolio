// File: src/components/HeroSection.js
import React from "react";
import profileImg from "../assets/profile.jpg";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="animated-bg"></div>
      <div className="text">
        <h1>Hi, I'm <span className="highlight">Rohith</span> R</h1>
        <h2>DevOps & AI Engineer</h2>
        <p>
          Experienced DevOps and Python Engineer in CI/CD automation, cloud infrastructure,
          and data-driven backend development. I work with Docker, Kubernetes, Python,
          Terraform, and monitoring tools like Prometheus and Grafana.
        </p>
        <div className="buttons">
          <button className="btn">Hire Me</button>
          <button className="btn-outline">Contact Me</button>
          <a href="/Rohith_Candela_Resume.pdf" download className="btn-download">Download Resume</a>
        </div>
        <div className="socials">
          <a href="https://linkedin.com/in/rohith-gowda-python-developer" target="_blank">🔗</a>
          <a href="mailto:rohithgowda8255@gmail.com">✉️</a>
          <a href="https://github.com/" target="_blank">🐙</a>
        </div>
      </div>
      <div className="avatar-3d">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 3]} />
          <ambientLight intensity={0.8} />
          <directionalLight position={[3, 3, 3]} />
          <mesh>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial color="#3b82f6" />
          </mesh>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </section>
  );
}

export default HeroSection;
