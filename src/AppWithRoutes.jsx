import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainApp from './App';
import QuestionnairePage from './components/Questionnaire/QuestionnairePage';

function AppWithRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/questionnaire/" element={<QuestionnairePage />} />
      </Routes>
    </Router>
  );
}

export default AppWithRoutes;