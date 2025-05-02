import React, { useState } from 'react';
import './pcos.css';
import Header from '../../components/header';

const Pcos = () => {
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    cycleLength: '',
    weightGain: false,
    hairGrowth: false,
    skinDarkening: false,
    hairLoss: false,
    pimples: false,
    fastFood: false,
    regularExercise: false,
  });

  const [prediction, setPrediction] = useState(null);
  const [dietRecommendations, setDietRecommendations] = useState('');
  const [exerciseRecommendations, setExerciseRecommendations] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isPCOS =
    formData.cycleLength && (formData.weightGain || formData.hairGrowth || formData.skinDarkening || formData.pimples);
  setPrediction(isPCOS ? 'You may have PCOS' : 'PCOS is unlikely');

  // Diet and Exercise Recommendations (can be customized)
  if (isPCOS) {
    setDietRecommendations('A balanced diet with low-carb foods, lean proteins, and plenty of vegetables.');
    setExerciseRecommendations('Moderate-intensity exercise like walking, swimming, and yoga.');
  } else {
    setDietRecommendations('Maintain a balanced diet and stay hydrated.');
    setExerciseRecommendations('Regular exercise for overall health, including cardio and strength training.');
  }
};

  return (
    <div className="pcos-prediction-page">
      <Header />
      <h2>PCOS Prediction & Wellness Guide</h2>
      <form onSubmit={handleSubmit} className="pcos-form">
        <div className="form-group">
          <label>Age (yrs):</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Weight (Kg):</label>
          <input type="number" name="weight" value={formData.weight} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Cycle Length (days):</label>
          <input type="number" name="cycleLength" value={formData.cycleLength} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Weight Gain (Y/N):</label>
          <input type="checkbox" name="weightGain" checked={formData.weightGain} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Hair Growth (Y/N):</label>
          <input type="checkbox" name="hairGrowth" checked={formData.hairGrowth} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Skin Darkening (Y/N):</label>
          <input type="checkbox" name="skinDarkening" checked={formData.skinDarkening} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Hair Loss (Y/N):</label>
          <input type="checkbox" name="hairLoss" checked={formData.hairLoss} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Pimples (Y/N):</label>
          <input type="checkbox" name="pimples" checked={formData.pimples} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Fast Food (Y/N):</label>
          <input type="checkbox" name="fastFood" checked={formData.fastFood} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Regular Exercise (Y/N):</label>
          <input type="checkbox" name="regularExercise" checked={formData.regularExercise} onChange={handleChange} />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {prediction && (
        <div className="prediction-result">
          <h3>{prediction}</h3>
          <div className="recommendations">
            <h4>Diet Recommendations:</h4>
            <p>{dietRecommendations}</p>
            <h4>Exercise Recommendations:</h4>
            <p>{exerciseRecommendations}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pcos;

