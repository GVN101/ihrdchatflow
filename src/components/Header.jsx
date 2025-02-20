import React, { useState } from "react";
import { MessageCircle, Menu, Home, ChevronDown } from "lucide-react";
import Sidebar from "./Sidebar";

function Header({ onNavigate, selectedCollege, onCollegeSelect }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const colleges = [
    { id: 0, name: "College of engineering Chengannur" },
    { id: 1, name: "College of Engineering Karunagappally" },
    { id: 2, name: "Model Engineering College clg" },
    { id: 3, name: "College of Applied science  Adoor" },
  ];

  return (
    <>
      <header className="bg-white/10 backdrop-blur-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => onNavigate("home")}
            >
              <MessageCircle className="h-8 w-8 text-white" />
              <h1 className="text-2xl font-bold text-white font-serif">
                RADIUS
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => onNavigate("home")}
                className="text-white/80 hover:text-white transition-colors font-medium flex items-center space-x-2"
              >
                <span>Home</span>
              </button>

              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-white/80 hover:text-white transition-colors font-medium flex items-center space-x-2"
                >
                  <span>
                    {selectedCollege
                      ? colleges.find((c) => c.id === selectedCollege)?.name
                      : "Choose College"}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {isDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-30"
                      onClick={() => setIsDropdownOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg overflow-hidden z-40">
                      {colleges.map((college) => (
                        <button
                          key={college.id}
                          className="w-full px-4 py-2 text-left text-gray-700 hover:bg-purple-50 transition-colors"
                          onClick={() => {
                            onCollegeSelect(college.id);
                            setIsDropdownOpen(false);
                          }}
                        >
                          {college.name}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <button
                onClick={() => onNavigate("about")}
                className="text-white/80 hover:text-white transition-colors font-medium"
              >
                About
              </button>
            </nav>
            <button
              className="md:hidden text-white"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onNavigate={onNavigate}
        selectedCollege={selectedCollege}
        onCollegeSelect={onCollegeSelect}
      />
    </>
  );
}

export default Header;
