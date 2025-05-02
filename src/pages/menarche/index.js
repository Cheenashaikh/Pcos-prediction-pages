import React, { useState } from 'react';
import './wellness.css';
import Header from '../../components/header';

const Menarche = () => {
  const [formData, setFormData] = useState({
    age: '',
    irregularPeriods: false,
    moodSwings: false,
    cramps: false,
    fatigue: false
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
    const { irregularPeriods, moodSwings, cramps, fatigue } = formData;
    let diet = 'Eat iron-rich foods (like spinach, beans), fruits, and drink enough water.';
    let exercise = 'Gentle yoga, light stretching, and walking can ease symptoms.';
    
    if (irregularPeriods || cramps || moodSwings || fatigue) {
      diet += ' Avoid junk food and caffeinated drinks.';
      exercise += ' Avoid heavy workouts during intense symptoms.';
    }

    setRecommendation({ diet, exercise });
  };

  return (
    <div className="wellness-page">
    <Header/>
      <h2>Menarche Wellness Guide</h2>
      <form onSubmit={handleSubmit} className="wellness-form">
        <div className="form-group">
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label><input type="checkbox" name="irregularPeriods" checked={formData.irregularPeriods} onChange={handleChange} /> Irregular Periods</label>
        </div>

        <div className="form-group">
          <label><input type="checkbox" name="cramps" checked={formData.cramps} onChange={handleChange} /> Cramps</label>
        </div>

        <div className="form-group">
          <label><input type="checkbox" name="moodSwings" checked={formData.moodSwings} onChange={handleChange} /> Mood Swings</label>
        </div>

        <div className="form-group">
          <label><input type="checkbox" name="fatigue" checked={formData.fatigue} onChange={handleChange} /> Fatigue</label>
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

export default Menarche;

