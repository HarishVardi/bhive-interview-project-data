import type React from "react"
import DirectionIcon from "../assets/assistant_direction.svg"
import ArrowSVG from "../assets/arrow.svg"
import type { Workspace } from "../../types"

interface WorkspaceCardProps {
  workspace: Workspace
}

const WorkspaceCard: React.FC<WorkspaceCardProps> = ({ workspace }) => {
  const bulkPassDays = 10
  const bulkPassDiscount = workspace.day_pass_discounts_percentage?.[bulkPassDays]?.value || 10
  const bulkPassPrice = Math.round(workspace.day_pass_price * bulkPassDays * (1 - bulkPassDiscount / 100))

  const imageUrl =
    workspace.images && workspace.images.length > 0
      ? `${workspace.images[0]}`
      : `/placeholder.svg?height=200&width=300&query=office space ${workspace.name}`

  return (
    <div className=" border border-[#e3e3e3] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow p-2">
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-lg text-gray-800">{workspace.name}</h3>
        <a
          href={workspace.google_maps_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-xs text-gray-500 hover:text-gray-700 transition-colors"
        >
          <img src={DirectionIcon } alt="Direction" className="w-5 h-5" />
          <p>6 km</p>
        </a>
      </div>

      <div className="relative h-40 rounded-lg overflow-hidden mt-2 mb-2">
        <img src={imageUrl } alt={workspace.name} className="w-full h-full object-cover" />
      </div>

      <div className="flex mt-5">
        <div className="flex-1 bg-white p-3 border border-gray-200 rounded-lg mr-1">
          <p className="text-xs text-gray-600 mb-1">Day Pass</p>
          <div className="flex items-center justify-between">
            <div className="flex items-baseline">
              <span className="text-xs md:text-base font-bold text-gray-800">
                ₹ {workspace.day_pass_price}
              </span>

              <span className="text-xs text-gray-600 ml-1">/Day</span>
            </div>
            <div className="text-gray-400">
              <span className="text-xl text-gray-700 flex">
                <img src={ArrowSVG } alt="Arrow" className="w-3 h-3 opacity-40" />
                <img src={ArrowSVG } alt="Arrow" className="w-3 h-3 opacity-60" />
                <img src={ArrowSVG } alt="Arrow" className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-[#FFCC00] p-3 relative rounded-lg ml-1">
          {bulkPassDiscount > 0 && (
            <div className="absolute -top-2 left-12 bg-gray-800 text-white text-[10px] px-1.5 py-0.5 rounded">
              {bulkPassDiscount}% Discount
            </div>
          )}
          <p className="text-xs text-gray-700 mb-1">Bulk Pass</p>
          <div className="flex items-center justify-between">
            <div className="flex items-baseline">
              <span className="text-xs md:text-base font-bold text-gray-800">₹ {bulkPassPrice}</span>
              <span className="text-xs text-gray-700 ml-1">/{bulkPassDays} Days</span>
            </div>
            <div className="text-gray-700">
              <span className="text-xl text-gray-700 flex">
                <img src={ArrowSVG } alt="Arrow" className="w-3 h-3 opacity-40" />
                <img src={ArrowSVG } alt="Arrow" className="w-3 h-3 opacity-60" />
                <img src={ArrowSVG } alt="Arrow" className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkspaceCard
