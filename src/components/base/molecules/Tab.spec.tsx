import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { Tab } from '@/components/base/molecules/Tab';

describe('Tab', () => {
  test('should render items', () => {
    const items = [
      { label: 'Tab 1', value: 'tab1' },
      { label: 'Tab 2', value: 'tab2' },
      { label: 'Tab 3', value: 'tab3' },
    ];
    const activeValue = 'tab1';
    const onClick = vi.fn();
    render(<Tab items={items} activeValue={activeValue} onClick={onClick} />);

    expect(document.querySelectorAll('li')).toHaveLength(3);
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Tab 3')).toBeInTheDocument();
  });

  test('should render active item', () => {
    const items = [
      { label: 'Tab 1', value: 'tab1' },
      { label: 'Tab 2', value: 'tab2' },
      { label: 'Tab 3', value: 'tab3' },
    ];
    const activeValue = 'tab2';
    const onClick = vi.fn();
    render(<Tab items={items} activeValue={activeValue} onClick={onClick} />);

    expect(document.querySelectorAll('li.active')).toHaveLength(1);
    expect(document.querySelectorAll('li')[1]).toHaveClass('active');
  });

  test('should call onClick when clicked', () => {
    const items = [
      { label: 'Tab 1', value: 'tab1' },
      { label: 'Tab 2', value: 'tab2' },
      { label: 'Tab 3', value: 'tab3' },
    ];
    const activeValue = 'tab1';
    const onClick = vi.fn();
    render(<Tab items={items} activeValue={activeValue} onClick={onClick} />);

    screen.getByText('Tab 2').click();
    expect(onClick).toBeCalledWith('tab2');
  });
});
