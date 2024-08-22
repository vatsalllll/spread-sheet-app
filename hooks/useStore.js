import create from 'zustand'

export const useStore = create((set) => ({
  cells: Array(1000).fill(''),
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  updateCell: (index, value) => set((state) => {
    const cells = [...state.cells]
    cells[index] = value
    return { cells }
  }),
}))
