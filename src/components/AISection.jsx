import React, { useState } from "react";
import { generateBulletPoints } from "../api/ai";

export default function AISection() {
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [result, setResult] = useState("");

  const handleGenerate = async () => {
    const res = await generateBulletPoints({ role, skills, experience });
    setResult(res);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h2 className="text-xl font-bold">Generate Resume Points (AI)</h2>
      <input value={role} onChange={e => setRole(e.target.value)} placeholder="Job Role" />
      <input value={skills} onChange={e => setSkills(e.target.value)} placeholder="Skills" />
      <input value={experience} onChange={e => setExperience(e.target.value)} placeholder="Experience" />
      <button onClick={handleGenerate}>Generate with AI</button>

      {result && <pre className="mt-2 p-2 bg-white">{result}</pre>}
    </div>
  );
}
