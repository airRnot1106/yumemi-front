import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { Checkbox } from '@/components/base/atoms/Checkbox';

describe('Checkbox', () => {
  test('should render prop', () => {
    const label = 'Checkbox';
    const checked = false;
    const onChange = vi.fn();
    render(<Checkbox label={label} checked={checked} onChange={onChange} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  test('should call onChange', () => {
    const label = 'Checkbox';
    const checked = false;
    const onChange = vi.fn();
    render(<Checkbox label={label} checked={checked} onChange={onChange} />);
    const checkbox = screen.getByLabelText('Checkbox');
    checkbox.click();
    expect(onChange).toBeCalled();
  });
});
