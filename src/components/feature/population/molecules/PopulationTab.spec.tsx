import { render, screen, waitFor } from '@testing-library/react';

import { PopulationTab } from '@/components/feature/population/molecules/PopulationTab';

import {
  populationTypes,
  populationTypeToLabel,
} from '@/stores/population/types';

describe('PopulationTab', () => {
  test('should render list', () => {
    render(<PopulationTab />);
    populationTypes.forEach((type) => {
      expect(screen.getByText(populationTypeToLabel[type])).toBeInTheDocument();
    });
  });

  test('should call onClick', async () => {
    render(<PopulationTab />);
    const tab = screen.getByText(populationTypeToLabel[populationTypes[1]]);
    expect(tab.parentElement).not.toHaveClass('active');
    await waitFor(() => {
      tab.click();
      expect(tab.parentElement).toHaveClass('active');
    });
  });
});
