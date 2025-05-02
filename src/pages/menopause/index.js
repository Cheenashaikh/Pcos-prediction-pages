import React, { useState } from 'react';
import './wellness.css';
import Header from '../../components/header';

const Menopause = () => {
  const [formData, setFormData] = useState({
    age: '',
    hotFlashes: false,
    sleepIssues: false,
    anxiety: false,
    jointPain: false
  });

  const [recommendation, setRecommendation] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { hotFlashes, sleepIssues, anxiety, jointPain } = formData;

    let diet = 'Eat foods rich in calcium, vitamin D, and fiber. Stay hydrated.';
    let exercise = 'Low-impact exercises like walking, swimming, and yoga help reduce symptoms.';

    if (hotFlashes || sleepIssues || anxiety || jointPain) {
      diet += ' Avoid spicy food, caffeine, and alcohol.';
      exercise += ' Practice deep breathing and relaxation techniques.';
    }

    setRecommendation({ diet, exercise });
  };

  return (
    <div className="wellness-page">
    <Header/>
      <h2>Menopause Wellness Guide</h2>
      <form onSubmit={handleSubmit} className="wellness-form">
        <div className="form-group">
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label><input type="checkbox" name="hotFlashes" checked={formData.hotFlashes} onChange={handleChange} /> Hot Flashes</label>
        </div>

        <div className="form-group">
          <label><input type="checkbox" name="sleepIssues" checked={formData.sleepIssues} onChange={handleChange} /> Sleep Issues</label>
        </div>

        <div className="form-group">
          <label><input type="checkbox" name="anxiety" checked={formData.anxiety} onChange={handleChange} /> Anxiety</label>
        </div>

        <div className="form-group">
          <label><input type="checkbox" name="jointPain" checked={formData.jointPain} onChange={handleChange} /> Joint Pain</label>
        </div>

        <button type="submit">Get Recommendations</button>
      </form>

      {recommendation && (
        <div className="recommendation">
          <h4>Diet Recommendation:</h4>
          <p>{recommendation.diet}</p>
          <h4>Exercise Recommendation:</h4>
          <p>{recommendation.exercise}</p>
        </div>
      )}
    </div>
  );
};

export default Menopause;
