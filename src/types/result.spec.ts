import type { Result } from '@/types/result';

describe('Result', () => {
  test('should be able to match on Ok', () => {
    const result: Result<string, Error> = { ok: true, value: 'hello' };
    expect(result.ok).toBe(true);
    expect(result.value).toBe('hello');
  });

  test('should be able to match on Err', () => {
    const result: Result<string, Error> = {
      ok: false,
      error: new Error('hello'),
    };
    expect(result.ok).toBe(false);
    expect(result.error).toBeInstanceOf(Error);
    expect(result.error.message).toBe('hello');
  });
});
