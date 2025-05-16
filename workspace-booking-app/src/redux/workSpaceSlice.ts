import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit"
import type { Workspace } from "../../types"
import workspacesData from "../data/workspace.json"
import type { RootState } from "./store"

interface WorkspaceState {
  workspaces: Workspace[]
  loading: boolean
  error: string | null
}

const initialState: WorkspaceState = {
  workspaces: [],
  loading: false,
  error: null,
}

// In a real app, this would be an API call
export const fetchWorkspaces = createAsyncThunk("workspaces/fetchWorkspaces", async () => {
  // Simulate API call
  return new Promise<Workspace[]>((resolve) => {
    setTimeout(() => {
      resolve(workspacesData as Workspace[])
    }, 500)
  })
})

const workspaceSlice = createSlice({
  name: "workspaces",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkspaces.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchWorkspaces.fulfilled, (state, action: PayloadAction<Workspace[]>) => {
        state.workspaces = action.payload
        state.loading = false
      })
      .addCase(fetchWorkspaces.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to fetch workspaces"
      })
  },
})
export const selectBranchState = (state: RootState) => state.workspaces;


export default workspaceSlice.reducer
