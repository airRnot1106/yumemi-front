import { render, screen } from '@testing-library/react';

import { SiteFooterPresenter } from '@/components/feature/site/molecules/SiteFooter';

describe('SiteFooter', () => {
  test('should render props', () => {
    render(<SiteFooterPresenter content="SiteFooter" />);
    expect(screen.getByText('SiteFooter')).toBeInTheDocument();
  });
});
