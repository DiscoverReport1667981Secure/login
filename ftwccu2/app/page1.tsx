"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [hoveredNavItems, setHoveredNavItems] = useState({
    nav1: false,
    nav2: false,
    nav3: false,
  })

  const images = ["/p1.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg", "/p5.jpg"]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length)
        setIsTransitioning(false)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  const handleNavHover = (nav: string, isHovered: boolean) => {
    setHoveredNavItems((prev) => ({
      ...prev,
      [nav]: isHovered,
    }))
  }

  return (
    <div className="min-h-screen" style={{ backgroundImage: "url(/bgimg.png)", backgroundRepeat: "repeat" }}>
      <div className="md:container mx-auto md:p-[50px] md:pt-[20px]">
        <div className="bg-white shadow-lg md:rounded-lg overflow-hidden">
          {/* Navigation Bar */}
          <nav className="bg-[#165394] h-16 px-6 flex items-center justify-between">
            <div className="hidden text-white font-bold text-xl">Navigation</div>

            {/* Desktop Navigation with Images */}
            <div className="hidden md:flex justify-between w-full">
              <div
                className="flex items-center"
                onMouseEnter={() => handleNavHover("nav1", true)}
                onMouseLeave={() => handleNavHover("nav1", false)}
              >
                <Image src={hoveredNavItems.nav1 ? "/n2.png" : "/n1.png"} alt="Navigation 1" width={100} height={30} />
              </div>

              <div
                className="flex items-center"
                onMouseEnter={() => handleNavHover("nav2", true)}
                onMouseLeave={() => handleNavHover("nav2", false)}
              >
                <Image src={hoveredNavItems.nav2 ? "/n4.png" : "/n3.png"} alt="Navigation 2" width={100} height={30} />
              </div>

              {/* Search bar - desktop only */}
              <div className="flex justify-center">
                <div className="relative w-64">
                  <input
                    type="search"
                    placeholder="Enter search words..."
                    className="w-full h-8 rounded-full bg-[#0d3ea1] border border-white/30 pl-4 pr-10 text-white placeholder-white/90 focus:outline-none focus:border-white"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Search className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>

              <div
                className="flex items-center"
                onMouseEnter={() => handleNavHover("nav3", true)}
                onMouseLeave={() => handleNavHover("nav3", false)}
              >
                <Image src={hoveredNavItems.nav3 ? "/n6.png" : "/n5.png"} alt="Navigation 3" width={100} height={30} />
              </div>

              <div className="flex items-center">
                <Image src="/n7.jpeg" alt="Navigation 4" width={100} height={30} />
              </div>
            </div>
          </nav>

          {/* Mobile Navigation Text Items */}
          <div className="md:hidden bg-[#165394] px-6 py-2 flex justify-between">
            <div className="text-white">Text 1</div>
            <div className="text-white">Text 2</div>
            <div className="text-white">Text 3</div>
            <div className="text-white">Text 4</div>
          </div>

          {/* Section below nav bar */}
          <div className="bg-[#def3ff] h-[120px] px-6 flex items-center justify-center">
            <div className="text-red-500 font-medium">Red Text Field</div>
          </div>

          {/* Rotating Image Section with Form - Desktop */}
          <div className="relative h-[calc(100vh-200px)] min-h-[600px] hidden md:block">
            {/* Learn More Banner */}
            <div className="absolute top-4 right-0 z-30 bg-red-600 text-white px-8 py-4 shadow-lg text-lg font-medium">
              Learn More
            </div>

            {/* Rotating Images */}
            <div className="absolute inset-0 overflow-hidden bg-black">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
                  } ${isTransitioning && index === currentImage ? "opacity-0" : ""}`}
                >
                  <Image src={src || "/placeholder.svg"} alt={`Slide ${index + 1}`} fill className="object-cover" />
                </div>
              ))}

              {/* Navigation Circles */}
              <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-8 h-8 rounded-full relative ${
                      index === currentImage ? "bg-[#165394]" : "bg-[#165394] opacity-50"
                    }`}
                  >
                    <span className="absolute inset-1 rounded-full border-2 border-white"></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Form Container overlaid on the left - Desktop */}
            <div className="absolute left-0 top-0 h-full z-30 flex flex-col items-start justify-center">
              {/* Logo Space - positioned higher with background image */}
              <div className="absolute top-[15%] left-[50%] transform -translate-x-1/2 relative">
                <div className="absolute inset-0 z-0">
                  <Image src="/logobg.png" alt="Logo Background" width={140} height={100} className="opacity-30" />
                </div>
                <div className="relative z-10">
                  <Image src="/logo.png" alt="Logo" width={120} height={80} />
                </div>
              </div>

              {/* Form with background image */}
              <div className="rounded-lg w-[250px] shadow-lg mt-16 overflow-hidden">
                <div className="relative">
                  {/* Background image */}
                  <div className="absolute inset-0 z-0">
                    <Image src="/bglogin.jpg" alt="Login Background" fill className="object-cover" />
                  </div>

                  {/* Form content */}
                  <div className="relative z-10 p-4">
                    <h1 className="text-white text-xl font-bold mb-3 text-center flex items-center justify-center gap-2">
                      <Image src="/lock.png" alt="Lock" width={16} height={16} />
                      HOME BANKING
                    </h1>

                    <div className="space-y-3">
                      <Input
                        id="username-desktop"
                        className="w-full bg-white text-gray-800 rounded-full h-8"
                        placeholder="Username"
                      />

                      <div className="flex items-center gap-2">
                        <Input
                          id="password-desktop"
                          type="password"
                          className="w-full bg-white text-gray-800 rounded-full h-8"
                          placeholder="Password"
                        />
                        <Button className="bg-gradient-to-b from-[#3095f2] to-[#1a6fc0] hover:from-[#2080dd] hover:to-[#1560a8] rounded-full text-white ring-1 ring-white ring-inset shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] h-6">
                          Login
                        </Button>
                      </div>

                      <div className="flex gap-2 pt-2 justify-center">
                        <Button className="w-[60px] h-[22px] rounded-full bg-[#0d3ea1] hover:bg-[#0a3080] text-white flex items-center justify-center gap-1 text-xs">
                          <Image src="/signup.png" alt="Sign Up" width={14} height={14} />
                          Sign Up
                        </Button>
                        <Button className="w-[60px] h-[22px] rounded-full bg-[#0d3ea1] hover:bg-[#0a3080] text-white flex items-center justify-center gap-1 text-xs">
                          <Image src="/forgot.png" alt="Forgot" width={14} height={14} />
                          Forgot
                        </Button>
                        <Button className="w-[60px] h-[22px] rounded-full bg-[#0d3ea1] hover:bg-[#0a3080] text-white flex items-center justify-center gap-1 text-xs">
                          <Image src="/demo.png" alt="Demo" width={14} height={14} />
                          Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6th Button under login form with same background image */}
              <div className="mt-4 w-[250px] rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  {/* Background image */}
                  <div className="absolute inset-0 z-0">
                    <Image src="/bglogin.jpg" alt="Button Background" fill className="object-cover" />
                  </div>

                  {/* Button content */}
                  <div className="relative z-10 p-2">
                    <Button className="w-full h-8 bg-gradient-to-b from-[#3095f2] to-[#1a6fc0] hover:from-[#2080dd] hover:to-[#1560a8] rounded-lg text-white ring-[0.5px] ring-white ring-inset shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]">
                      Button 6
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop - 5 Horizontal Buttons Section */}
          <div className="hidden md:block bg-[#003b73] p-4 rounded-b-lg">
            <div className="flex justify-between px-4 gap-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <Button
                  key={num}
                  className="w-48 h-8 bg-gradient-to-b from-[#3095f2] to-[#1a6fc0] hover:from-[#2080dd] hover:to-[#1560a8] rounded-lg text-white ring-[0.5px] ring-white ring-inset shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]"
                >
                  Button {num}
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile Layout - Image Section */}
          <div className="md:hidden h-[300px] relative overflow-hidden bg-black">
            {/* Logo positioned on the left side in image section with background */}
            <div className="absolute inset-0 flex items-center z-30 pl-8">
              <div className="relative">
                <div className="absolute inset-0 z-0">
                  <Image src="/logobg.png" alt="Logo Background" width={120} height={80} className="opacity-30" />
                </div>
                <div className="relative z-10">
                  <Image src="/logo.png" alt="Logo" width={100} height={60} />
                </div>
              </div>
            </div>

            {images.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
                } ${isTransitioning && index === currentImage ? "opacity-0" : ""}`}
              >
                <Image src={src || "/placeholder.svg"} alt={`Slide ${index + 1}`} fill className="object-cover" />
              </div>
            ))}

            {/* Navigation Circles */}
            <div className="absolute bottom-4 right-4 flex gap-2 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-6 h-6 rounded-full relative ${
                    index === currentImage ? "bg-[#165394]" : "bg-[#165394] opacity-50"
                  }`}
                >
                  <span className="absolute inset-1 rounded-full border-2 border-white"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile - Full Width Learn More Banner */}
          <div className="md:hidden bg-red-600 text-white py-4 px-6 text-center font-semibold text-lg">Learn More</div>

          {/* Mobile Layout - Login Form with background image */}
          <div className="md:hidden relative overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <Image src="/bglogin.jpg" alt="Login Background" fill className="object-cover" />
            </div>

            {/* Form content */}
            <div className="relative z-10 p-4">
              {/* Centered Login Text */}
              <h1 className="text-white text-xl font-bold mb-3 text-center flex items-center justify-center gap-2">
                <Image src="/lock.png" alt="Lock" width={16} height={16} />
                HOME BANKING
              </h1>

              <div className="space-y-3">
                <Input
                  id="username-mobile"
                  className="w-full bg-white text-gray-800 rounded-full h-8"
                  placeholder="Username"
                />

                <div className="flex items-center gap-2">
                  <Input
                    id="password-mobile"
                    type="password"
                    className="w-full bg-white text-gray-800 rounded-full h-8"
                    placeholder="Password"
                  />
                  <Button className="bg-gradient-to-b from-[#3095f2] to-[#1a6fc0] hover:from-[#2080dd] hover:to-[#1560a8] rounded-full text-white ring-1 ring-white ring-inset shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] h-6">
                    Login
                  </Button>
                </div>

                <div className="flex gap-2 pt-2 justify-start">
                  <Button className="w-[60px] h-[22px] rounded-full bg-[#0d3ea1] hover:bg-[#0a3080] text-white flex items-center justify-center gap-1 text-xs">
                    <Image src="/signup.png" alt="Sign Up" width={14} height={14} />
                    Sign Up
                  </Button>
                  <Button className="w-[60px] h-[22px] rounded-full bg-[#0d3ea1] hover:bg-[#0a3080] text-white flex items-center justify-center gap-1 text-xs">
                    <Image src="/forgot.png" alt="Forgot" width={14} height={14} />
                    Forgot
                  </Button>
                  <Button className="w-[60px] h-[22px] rounded-full bg-[#0d3ea1] hover:bg-[#0a3080] text-white flex items-center justify-center gap-1 text-xs">
                    <Image src="/demo.png" alt="Demo" width={14} height={14} />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout - 6 Vertical Buttons */}
          <div className="md:hidden w-full bg-[#003b73] p-4 space-y-2">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <Button
                key={num}
                className="w-full h-8 bg-gradient-to-b from-[#3095f2] to-[#1a6fc0] hover:from-[#2080dd] hover:to-[#1560a8] rounded-lg text-white ring-[0.5px] ring-white ring-inset shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]"
              >
                Button {num}
              </Button>
            ))}
          </div>

          {/* White space before footer - Desktop only */}
          <div className="hidden md:block h-16"></div>

          {/* Footer */}
          <footer className="bg-white p-6">
            <div className="flex flex-col md:flex-row justify-between items-start">
              {/* Left side footer logos */}
              <div className="flex flex-wrap gap-4 md:w-2/3">
                <Image src="/f1.png" alt="Footer Logo 1" width={80} height={40} />
                <Image src="/f2.png" alt="Footer Logo 2" width={80} height={40} />
                <Image src="/f3.png" alt="Footer Logo 3" width={80} height={40} />
                <Image src="/f4.png" alt="Footer Logo 4" width={80} height={40} />
                <Image src="/f5.png" alt="Footer Logo 5" width={80} height={40} />
                <Image src="/f6.png" alt="Footer Logo 6" width={80} height={40} />
                <Image src="/f7.png" alt="Footer Logo 7" width={80} height={40} />
              </div>

              {/* Right side footer logos */}
              <div className="mt-6 md:mt-4 md:w-1/3">
                <div className="flex gap-4 justify-end">
                  <Image src="/f8.png" alt="Footer Logo 8" width={100} height={50} />
                  <Image src="/f9.png" alt="Footer Logo 9" width={100} height={50} />
                </div>
                <div className="flex gap-4 justify-end mt-4">
                  <Image src="/f10.png" alt="Footer Logo 10" width={80} height={40} />
                  <Image src="/f11.png" alt="Footer Logo 11" width={80} height={40} />
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

