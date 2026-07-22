// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";
// import React from "react";
// import { Link } from "react-router-dom";

// function Course({ course }) {
//   return (
//     <Link to={`/course-detail/${course._id}`} >
//       <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ">
//         <div className="relative">
//           <img
//             src={course.courseThumbnail}
//             className="w-full h-36 object-cover rounded-t-lg"
//             alt="course"
//           />
//         </div>
//         <CardContent className="px-5 py-4 space-y-3">
//           <h1 className="hover:underline font-bold text-lg truncate ">
//             {course.courseTitle}
//           </h1>
//           <div className="flex items-center justify-between ">
//             <div className="flex items-center gap-3">
//               <Avatar className="w-8 h-8">
//                 <AvatarImage
//                   src={
//                     course.creator?.photoUrl || "https://github.com/shadcn.png"
//                   }
//                   alt="@shadcn"
//                 />
//                 <AvatarFallback>CN</AvatarFallback>
//               </Avatar>
//               <h1 className="font-medium text-sm">{course.creator?.name}</h1>
//             </div>
//             <Badge className="bg-blue-600 text-white px-2 py-1 text-xs rounded-full ">
//               {course.courseLevel}
//             </Badge>
//           </div>
//           <div className="text-lg font-bold">
//             <span>{course.coursePrice}</span>
//           </div>
//         </CardContent>
//       </Card>
//     </Link>
//   );
// }

// export default Course;

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Eye, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Course({ course }) {
  return (
    <Link to={`/course-detail/${course._id}`}>
      <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
        <div className="relative">
          {/* Course Level - Top Left */}
          <Badge className="absolute top-3 left-3 bg-gray-200/90 dark:bg-gray-700/90 text-gray-700 dark:text-gray-200 px-3 py-1 text-xs font-medium rounded-full border-0 backdrop-blur-sm z-10">
            {course.courseLevel}
          </Badge>
          
          {/* Price - Top Right with Gradient */}
          <Badge className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 text-sm font-bold rounded-full border-0 shadow-md z-10">
            ₹{course.coursePrice}
          </Badge>
          
          {/* Course Image */}
          <img
            src={course.courseThumbnail}
            className="w-full h-36 object-cover rounded-t-lg"
            alt="course"
          />
        </div>
        
        <CardContent className="px-5 py-4 space-y-3">
          {/* Lecturer Info with Rating */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarImage
                  src={course.creator?.photoUrl || "https://github.com/shadcn.png"}
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="font-medium text-sm">{course.creator?.name}</h1>
            </div>
            
            {/* Rating with Star */}
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold">4.5</span>
            </div>
          </div>
          
          {/* Course Title */}
          <h1 className="hover:underline font-bold text-lg truncate">
            {course.courseTitle}
          </h1>
          
          {/* Course Stats - Duration, Students, Enroll */}
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 pt-2">
            {/* Duration with Clock Icon */}
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{course.courseDuration || "10h"}</span>
            </div>
            
            {/* Students with Users Icon - FIXED: showing array length */}
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{course.enrolledStudents?.length || 0}</span>
            </div>
            
            {/* Enroll Now with Eye Icon */}
            <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium">
              <Eye className="w-4 h-4" />
              <span>Enroll Now</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default Course;