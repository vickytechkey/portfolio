import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularChart from './leetcodescore';

const LeetCodeScoreCard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('https://alfa-leetcode-api.onrender.com/vichunice/solved');
        setStats(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch LeetCode stats');
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <div className="center-align">Loading...</div>;
  if (error) return <div className="center-align red-text">{error}</div>;

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h2 className="center-align">LeetCode Score Card</h2>
        </div>
      </div>
      {stats && (
        <>
          <div className="row">
            <div className="col s12 center-align">
              <h4>Total Solved: {stats.solvedProblem} / 3368</h4>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m4">
              <CircularChart 
                label="Easy" 
                completed={stats.easySolved} 
                total={839} 
                color="#4CAF50" 
              />
            </div>
            <div className="col s12 m4">
              <CircularChart 
                label="Medium" 
                completed={stats.mediumSolved} 
                total={1760} 
                color="#FFC107" 
              />
            </div>
            <div className="col s12 m4">
              <CircularChart 
                label="Hard" 
                completed={stats.hardSolved} 
                total={769}
                color="#F44336" 
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LeetCodeScoreCard;