import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';

import { PrefectureList } from '@/components/feature/prefecture/molecules/PrefectureList';

import type { Mock } from 'vitest';

describe('PrefectureList', () => {
  const prefectureResponseMock = () =>
    new Promise((resolve) => {
      resolve({
        ok: true,
        status: 200,
        json: async () => ({
          message: null,
          result: [
            {
              prefCode: 1,
              prefName: '北海道',
            },
            {
              prefCode: 2,
              prefName: '青森県',
            },
            {
              prefCode: 3,
              prefName: '岩手県',
            },
          ],
        }),
      });
    });

  beforeEach(() => {
    global.fetch = vi.fn().mockImplementation(prefectureResponseMock);
  });

  test('should render list', async () => {
    render(<PrefectureList />);
    await waitFor(() => {
      expect(screen.getByText('北海道')).toBeInTheDocument();
      expect(screen.getByText('青森県')).toBeInTheDocument();
      expect(screen.getByText('岩手県')).toBeInTheDocument();
    });
  });

  afterEach(() => {
    (global.fetch as Mock).mockClear();
  });
});
