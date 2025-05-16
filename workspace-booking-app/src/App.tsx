


import Header from "./components/Header"
import FeatureSection from "./components/Features"
import WorkspaceList from "./components/WorkSpaceList"
import Footer from "./components/Footer"


function App() {

  return (
    <>
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow container mx-auto">
        <FeatureSection />
        <WorkspaceList />
      </main>
    </div>
     <Footer />
     </>
  )
}

export default App
