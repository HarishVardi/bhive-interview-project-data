
import type React from "react"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../redux/store"
import { useEffect, useState } from "react"
import type { Workspace } from "../../types"
import { fetchWorkspaces } from "../redux/workSpaceSlice"
import WorkspaceCard from "./WorkSpaceCard"


const WorkspaceList: React.FC = () => {
  const [workspaces, setWorkspaces] = useState<Workspace[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    setLoading(true)
    dispatch(fetchWorkspaces())
      .then((res) => {
        if (res.payload) {
          const workspaceData = res.payload as Workspace[]
          setWorkspaces(workspaceData)
        } else {
          setError("Failed to fetch workspaces")
        }
      })
      .catch((err) => {
        setError(err.message || "An error occurred while fetching workspaces")
      })
      .finally(() => {
        setLoading(false)
      })
  }, [dispatch]) 

  if (loading) {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Our Spaces Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-100 rounded-lg h-64 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Our Spaces Overview</h2>
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p>{error}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Our Spaces Overview</h2>
        {workspaces.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No workspaces available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workspaces.map((workspace) => (
              <WorkspaceCard key={workspace.id} workspace={workspace} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default WorkspaceList
