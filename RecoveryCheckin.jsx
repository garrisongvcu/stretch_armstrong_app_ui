import React, { useState } from 'react';

const RecoveryCheckIn = () => {
  // 1. State Management
  // Initializing state for the input value. We start with null (or an empty string) as referenced in the PBI.
  const [recoveryScore, setRecoveryScore] = useState('');
  
  // State to hold the dynamic banner's classification status (null, 'high', or 'low')
  const [workoutClassification, setWorkoutClassification] = useState(null);

  // 2. Form Validation (DRY Principle)
  const handleInputChange = (e) => {
    const value = e.target.value;
    
    // Allow empty string so the user can backspace to clear the input
    if (value === '') {
      setRecoveryScore('');
      setWorkoutClassification(null);
      return;
    }
    // Convert the string input into a numeric value to perform numerical boundary checks
    const numValue = Number(value);

    // Definition of Done: Actively block negative or out-of-range inputs (assuming a 0-100 scale)
    if (numValue >= 0 && numValue <= 100) {
      setRecoveryScore(value);
      setWorkoutClassification(null); // Reset banner when user is actively typing a new score
    }
  };

  // 3. Logic Flags for Thresholds: Captures the form submission event when the user clicks the action button
  
  // Stops native HTML form submission behavior from refreshing the single-page React app
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (recoveryScore === '') return; // Prevent empty submissions
    
    const score = Number(recoveryScore);

    // Evaluate high vs. low recovery thresholds
    if (score >= 80) {
      setWorkoutClassification('high');
    } else {
      setWorkoutClassification('low');
    }
  };
//Render UI: The component's JSX structure, including the form and dynamic banners based on the user's input

  return (
    // JSX Root rule
    <div className="recovery-checkin-container" style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Daily Recovery Check-in</h2>
      
      {/* Links the form button to the handleSubmit function and organizes the input field and button vertically with spacing */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label htmlFor="hrv-score">Enter your Recovery Score (0-100):</label>
        <input 
          type="number" 
          id="hrv-score"
          value={recoveryScore} 
          onChange={handleInputChange} 
          placeholder="e.g., 85"
        />
        <button type="submit">Get Workout Plan</button>
      </form>

      {/* Conditional Rendering: Displays dynamic banners based on the user's recovery score classification */}
      {workoutClassification === 'high' && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '5px' }}>
          <strong>High Recovery:</strong> You are cleared for a challenging workout today!
        </div>
      )}

      {workoutClassification === 'low' && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8d7da', color: '#721c24', borderRadius: '5px' }}>
          <strong>Low Recovery:</strong> Take it easy. Let's work on recovery with reduced weights and Zone 1 cardio.
        </div>
      )}
    </div>
  );
};

export default RecoveryCheckIn;
