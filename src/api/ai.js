import axios from "axios";

const API_URL = "http://localhost:5000";

export const generateBulletPoints = async ({ role, skills, experience }) => {
  const res = await axios.post(`${API_URL}/generate`, {
    role,
    skills,
    experience,
  });
  return res.data.result;
};
