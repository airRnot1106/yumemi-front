import { useAtomsDevtools } from 'jotai-devtools';

// Jotaiのデバッグ用コンポーネント
export const DebugAtoms = () => {
  useAtomsDevtools('jotai');
  return null;
};
