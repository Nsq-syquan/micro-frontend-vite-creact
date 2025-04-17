import { create } from 'zustand'

const initialState = {
   path: "/"
    
}


// Declare hook useMFE1Store
const useMFE1Store = create((set) => ({
    ...initialState,
    setPath: (payload) => set((state) => ({ ...state, path: payload })),

}))

export default useMFE1Store
