import { render, screen } from '@testing-library/react';

import { SiteHeaderPresenter } from '@/components/feature/site/molecules/SiteHeader';

describe('SiteHeader', () => {
  test('should render props', () => {
    render(<SiteHeaderPresenter title="SiteHeader" />);
    expect(screen.getByText('SiteHeader')).toBeInTheDocument();
  });
});
