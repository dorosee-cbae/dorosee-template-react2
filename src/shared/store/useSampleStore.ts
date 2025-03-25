import { create } from 'zustand';

interface SampleStoreState {
  count: number;
  increment: () => void;
}

export const useSampleStore = create<SampleStoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
