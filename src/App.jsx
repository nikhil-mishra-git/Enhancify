import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Footer, Header, LoaderComponent } from './components'
import { AnimatePresence, motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'

const App = () => {
  const [isFirstLoading, setIsFirstLoading] = useState(true)
  const [routeChanging, setRouteChanging] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const timeout = setTimeout(() => setIsFirstLoading(false), 1500)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (!isFirstLoading) {
      setRouteChanging(true)
      const timeout = setTimeout(() => setRouteChanging(false), 600)
      return () => clearTimeout(timeout)
    }
  }, [location.pathname])

  const showLoader = isFirstLoading || routeChanging

  return (
    <div className="min-h-screen bg-[#0e0c15] text-white relative overflow-hidden">
      {showLoader && (
        <div className="fixed inset-0 z-[9999]">
          <LoaderComponent />
        </div>
      )}

      <div
        className={`transition-opacity duration-700 ease-in-out ${
          showLoader ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <Header />

        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>

        <Footer />
      </div>
    </div>
  )
}

export default App
