import React, { useState, useRef } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import bgVideo from "../assets/123-bg.mp4";

const GetDiet = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    weight: "",
    height: "",
    activity_level: "",
    health_goal: "",
  });
  const [dietPlan, setDietPlan] = useState(null);
  const pageRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/get-diet-plan`,
        formData
      );
      setDietPlan(response.data);
    } catch (error) {
      console.error("Error fetching diet plan:", error);
    }
  };

  const downloadCompletePNG = async () => {
    if (pageRef.current) {
      const canvas = await html2canvas(pageRef.current);
      const data = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = data;
      link.download = "full-diet-plan.png";
      link.click();
    }
  };

  const downloadCompleteDoc = async () => {
    if (!dietPlan || !dietPlan.week) {
      alert("Diet plan is not available to download.");
      return;
    }

    try {
      const children = [];

      children.push(
        new Paragraph({
          children: [new TextRun({ text: "Your Personalized Diet Plan", bold: true, size: 28, font: "Arial" })],
          heading: "Heading1",
        }),
        new Paragraph({ text: " " })
      );

      Object.entries(dietPlan.week).forEach(([dayName, dayData]) => {
        children.push(
          new Paragraph({
            children: [new TextRun({ text: dayName, bold: true, size: 24, font: "Arial" })],
            spacing: { after: 200 },
          })
        );

        dayData.meals?.forEach((meal) => {
          children.push(
            new Paragraph({
              children: [new TextRun({ text: `${meal.title}`, size: 22, font: "Arial" })],
              bullet: { level: 0 },
            })
          );
        });

        if (dayData.nutrients) {
          children.push(
            new Paragraph({ text: "" }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Nutrition Summary: Calories: ${Math.round(dayData.nutrients.calories)} kcal, Protein: ${Math.round(dayData.nutrients.protein)}g, Fat: ${Math.round(dayData.nutrients.fat)}g, Carbs: ${Math.round(dayData.nutrients.carbohydrates)}g`,
                  italics: true,
                  size: 20,
                  font: "Arial",
                }),
              ],
            }),
            new Paragraph({ text: " " })
          );
        }
      });

      const dietDoc = new Document({
        sections: [{ children }],
        creator: "HealthifyMe",
      });

      const blob = await Packer.toBlob(dietDoc);
      saveAs(blob, "full-diet-plan.docx");
    } catch (err) {
      console.error("Failed to generate DOCX:", err);
      alert("An error occurred while generating the DOC file.");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden pt-24">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      ></video>

      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 pt-10">
        <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md md:max-w-2xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-black">
            Complete Your Health Profile
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="border p-2 rounded w-full" />
              <select name="gender" value={formData.gender} onChange={handleChange} className="border p-2 rounded w-full">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input type="number" name="weight" placeholder="Weight (kg)" value={formData.weight} onChange={handleChange} className="border p-2 rounded w-full" />
              <input type="number" name="height" placeholder="Height (cm)" value={formData.height} onChange={handleChange} className="border p-2 rounded w-full" />
              <select name="activity_level" value={formData.activity_level} onChange={handleChange} className="border p-2 rounded w-full">
                <option value="">Select Activity Level</option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
              </select>
              <select name="health_goal" value={formData.health_goal} onChange={handleChange} className="border p-2 rounded w-full">
                <option value="">Select Goal</option>
                <option value="maintain">Maintain</option>
                <option value="gain">Gain</option>
                <option value="lose">Lose</option>
              </select>
            </div>

            <button type="submit" className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get My Diet Plan
            </button>
          </form>
        </div>

        {dietPlan && dietPlan.week && (
          <div ref={pageRef} className="w-full max-w-4xl mt-20 space-y-10 bg-white p-6 sm:p-10 rounded-lg shadow-lg text-black">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Your Personalized Diet Plan</h1>

            {Object.entries(dietPlan.week).map(([dayName, dayData]) => (
              <div key={dayName} className="space-y-4">
                <h2 className="text-2xl font-bold text-blue-700 capitalize">{dayName}</h2>

                <div className="ml-4 space-y-2">
                  {dayData.meals.map((meal, idx) => (
                    <div key={idx} className="text-lg">• {meal.title}</div>
                  ))}
                </div>

                <div className="ml-4 mt-2 text-gray-700 text-sm">
                  Nutrition Summary: Calories: {Math.round(dayData.nutrients.calories)} kcal, 
                  Protein: {Math.round(dayData.nutrients.protein)}g, 
                  Fat: {Math.round(dayData.nutrients.fat)}g, 
                  Carbs: {Math.round(dayData.nutrients.carbohydrates)}g
                </div>

                <hr className="my-6 border-gray-300" />
              </div>
            ))}
          </div>
        )}

        {dietPlan && (
          <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-20">
            <button onClick={downloadCompletePNG} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded">
              Download PNG
            </button>
            <button onClick={downloadCompleteDoc} className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded">
              Download DOC
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetDiet;
