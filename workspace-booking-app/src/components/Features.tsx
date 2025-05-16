import type React from "react"
import Icons from "../utils/icons"
import { useMobileView } from "../hooks/useMobileView"
import ArrowMobile from "../assets/arrow_yellow.svg"

interface FeatureItem {
  icon: string
  title: string
  description: string
}

const FeatureSection: React.FC = () => {
  const isMobile = useMobileView()

  const featureData: FeatureItem[] = [
    {
      icon: Icons.community,
      title: "Community Events",
      description: "One liner details about the feature",
    },
    {
      icon: Icons.gym,
      title: "Gym Facilities",
      description: "One liner details about the feature",
    },
    {
      icon: Icons.wifi,
      title: "Highspeed Wifi",
      description: "One liner details about the feature",
    },
    {
      icon: Icons.cafe,
      title: "Cafe & Tea Bar",
      description: "One liner details about the feature",
    },
    {
      icon: Icons.affordable,
      title: "Affordable",
      description: "One liner details about the feature",
    },
    {
      icon: Icons.lounges,
      title: "Comfort Lounges",
      description: "One liner details about the feature",
    },
    {
      icon: Icons.booking,
      title: "Quick Booking",
      description: "One liner details about the feature",
    },
    {
      icon: Icons.sportsArea,
      title: "Sports Area",
      description: "One liner details about the feature",
    },
  ]

  return (
    <section className="w-full py-10 bg-gray-50 md:bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Why Choose us?</h2>
          {isMobile && (
            <a href="#">
              <img 
              src={ArrowMobile}
              alt="Arrow"
              className="w-8 h-4"/>
            </a>
          )}
        </div>

        {isMobile ? (
          <div className="grid grid-cols-2 gap-4">
            {featureData.map((item, index) => (
              <div
                key={index.toString()}
                className="bg-white rounded-lg p-4 shadow flex flex-col items-center text-center"
              >
                <div className="w-8 h-8 mb-3 text-[#F2B304]">
                  <img
                    src={item.icon}
                    alt={`${item.title} icon`}
                    className="w-full h-full"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg"
                    }}
                  />
                </div>
                <span className="font-medium text-gray-900 text-sm">{item.title}</span>
              </div>
            ))}
          </div>
        ) : (
          <ul className="grid grid-cols-2 md:grid-cols-4">
            {featureData.map((item, index) => (
              <li
                key={index.toString()}
                className={`flex items-center p-6 
                  ${index % 4 !== 3 ? "border-r border-gray-300" : ""} 
                  ${index < 4 ? "border-b border-gray-300" : ""}`}
              >
                <img
                  src={item.icon}
                  alt={`${item.title} icon`}
                  className="w-8 h-8 mr-4"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg"
                  }}
                />
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900">{item.title}</span>
                  <span className="text-sm text-gray-600 mt-1">{item.description}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default FeatureSection
