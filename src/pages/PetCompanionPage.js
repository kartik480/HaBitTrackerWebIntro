import React from 'react';
import Header from '../components/Header';
import PetCompanion from '../components/PetCompanion';
import Footer from '../components/Footer';

const PetCompanionPage = () => {
  return (
    <div className="pet-companion-page">
      <Header />
      <PetCompanion />
      <Footer />
    </div>
  );
};

export default PetCompanionPage;
