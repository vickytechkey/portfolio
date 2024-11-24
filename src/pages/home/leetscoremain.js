import React from 'react';
import CircularChart from './leetcodescore';

const Leetscore = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col s12"> 
        <h2 className="center-align" style={{ fontWeight: 600, fontFamily: ["Poppins", "sans-serif"]  }}>My LeetCode</h2>
        <h2 className="center-align" style={{ fontWeight: 600, fontFamily: ["Poppins", "sans-serif"] }}>Score Card</h2>
      </div>
    </div>
    <div className="row">
      <div className="col s12 m4">
        <CircularChart label="Easy" completed={79} total={839} color="#4CAF50" />
      </div>
      <div className="col s12 m4">
        <CircularChart label="Medium" completed={27} total={1760} color="#FFC107" />
      </div>
      <div className="col s12 m4">
        <CircularChart label="Hard" completed={2} total={768} color="#F44336" />
      </div>
    </div>
  </div>
  );
};

export default Leetscore;