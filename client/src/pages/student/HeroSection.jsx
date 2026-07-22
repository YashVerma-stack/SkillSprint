// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function HeroSection() {
//   const [searchQuery, setSearchQuery] = useState("");

//   const navigate = useNavigate();
//   const searchHandler = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim() !== "") {
//       navigate(`/course/search?query=${searchQuery}`);
//     }
//     setSearchQuery(""); 
//   };
//   return (
//     <div className="relative bg-gradient-to-r from-blue-500 to bg-indigo-600 dark:from-gray-800 dark:to-gray-900 py-20 px-4 text-center ">
//       <div className="max-w-3xl mx-auto">
//         <h1 className="text-white text-4xl font-bold mb-4">
//           Find the Best Courses for You
//         </h1>
//         <p className="text-gray-200 dark:text-gray-400 mb-8">
//           Discover, Learn, and Upskill with our wide range of courses
//         </p>

//         <form
//           onSubmit={searchHandler}
//           className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6 "
//         >
//           <Input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search Courses"
//             className="flex-grow border-none focus-visible:ring-0 px-6 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 "
//           />
//           <Button
//             type="submit"
//             className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-r-ful hover:bg-blue-700 dark:hover:bg-blue-800 "
//           >
//             Search
//           </Button>
//         </form>
//         <Button onClick={() => navigate(`/course/search?query`)} className="bg-white dark:bg-gray-800 text-blue-600 rounded-full hover:bg-gray-200">
//           Explore Cources
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const searchHandler = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/course/search?query=${searchQuery}`);
    }
    setSearchQuery("");
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-800 dark:to-gray-900 py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-white dark:text-white text-5xl font-bold mb-2">
          Unlock Your
        </h1>
        <h1 className="text-white dark:text-white text-5xl font-bold mb-4">
          potential with learning
        </h1>
        
        {/* Subtitle */}
        <p className="text-white/90 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Discover expert-led courses, hands-on projects, and community of
          learners. Transform your career today.
        </p>

        {/* Search Form - Separate Input and Button */}
        <form
          onSubmit={searchHandler}
          className="flex items-center justify-center gap-3 max-w-xl mx-auto mb-6"
        >
          <div className="flex-1 relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Search className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </div>
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What do you want to learn today?"
              className="w-full pl-12 pr-4 py-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus-visible:ring-0 focus-visible:border-blue-500 dark:focus-visible:border-purple-500 shadow-sm"
            />
          </div>
          <Button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-600 dark:to-purple-700 text-white px-8 py-6 rounded-lg hover:from-blue-700 hover:to-purple-800 dark:hover:from-blue-700 dark:hover:to-purple-800 shadow-lg shadow-blue-600/30 dark:shadow-none whitespace-nowrap border-0 font-semibold"
          >
            Search
          </Button>
        </form>
        
        <Button 
          onClick={() => navigate(`/course/search?query`)} 
          className="bg-white text-blue-600 dark:bg-gray-800/50 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-3 shadow-sm"
        >
          Explore Courses
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;