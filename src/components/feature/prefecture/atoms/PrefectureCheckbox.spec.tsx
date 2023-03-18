import { render, screen } from '@testing-library/react';

import { PrefectureCheckbox } from '@/components/feature/prefecture/atoms/PrefectureCheckbox';

import type { Prefecture } from '@/stores/prefecture/types';

describe('PrefectureCheckbox', () => {
  test('should render label', () => {
    const prefecture: Prefecture = {
      prefCode: 1,
      prefName: '北海道',
    };
    render(<PrefectureCheckbox prefecture={prefecture} />);
    expect(screen.getByText(prefecture.prefName)).toBeInTheDocument();
  });

  test('should call onChange', () => {
    const prefecture: Prefecture = {
      prefCode: 1,
      prefName: '北海道',
    };
    render(<PrefectureCheckbox prefecture={prefecture} />);
    const checkbox = screen.getByLabelText(prefecture.prefName);
    expect(checkbox).toBeChecked();
    checkbox.click();
    expect(checkbox).not.toBeChecked();
  });
});
