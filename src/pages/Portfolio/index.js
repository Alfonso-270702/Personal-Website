import React from 'react';
import { PortfolioCard } from '../../components';
import { portfolioData } from '../../config/data';

export default function Portfolio() {
  return (
    <div>
      <PortfolioCard data={portfolioData} />
    </div>
  );
}
