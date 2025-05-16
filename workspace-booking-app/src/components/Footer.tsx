import type React from "react"
import WorkspaceImg from "../assets/behive_workspace.png"
import PlayStoreIcon from "../assets/play_store.svg"
import AppStoreIcon from "../assets/apple_store.svg"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold mb-8 text-center md:text-left">
          Download our app now
        </h2>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center md:justify-start">
              <img
                src={WorkspaceImg}
                alt="BHIVE Workspace App"
                className="w-full h-auto max-w-[300px]"
              />
            </div>

            <div>
            <p className="hidden md:block text-gray-700 text-base md:text-lg mb-6">
              Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently,
              and unlock exclusive perks.
            </p>

            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <a href="#" aria-label="Get it on Google Play">
                <img
                  src={PlayStoreIcon || "/placeholder.svg"}
                  alt="Get it on Google Play"
                  className="h-12 w-auto"
                />
              </a>
              <a href="#" aria-label="Download on the App Store">
                <img
                  src={AppStoreIcon || "/placeholder.svg"}
                  alt="Download on the App Store"
                  className="h-12 w-auto"
                />
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-10 py-4 text-center text-white text-sm bg-[#222E34]">
        <p>© Copyright {new Date().getFullYear()}, Bhive Private Limited</p>
      </div>
    </footer>
  )
}

export default Footer
