import { renderHook, act } from '@testing-library/react-hooks';
import { useLocalState } from '.';

describe('test example hook', () => {
  it('should init as 69', () => {
    const { result } = renderHook(() => useLocalState<number>('test-hook', 69));
    const [state] = result.current;
    expect(state).toBe(69);
  });
  it('should update to 1337', () => {
    const { result } = renderHook(() => useLocalState<number>('test-hook', 69));
    const [state, stateSet] = result.current;
    act(() => {
      stateSet(1337);
    });
    const [newState] = result.current;
    expect(newState).toBe(1337);
  });
});
