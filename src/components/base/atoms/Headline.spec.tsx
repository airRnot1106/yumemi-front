import { render, screen } from '@testing-library/react';

import { Headline } from '@/components/base/atoms/Headline';

describe('Headline', () => {
  test('should render prop', () => {
    render(<Headline text="Hello World" />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
