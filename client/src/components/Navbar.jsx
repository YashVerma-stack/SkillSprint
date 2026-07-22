// // Icons from lucide
// import { Menu, School } from "lucide-react";
// import React, { useEffect } from "react";

// // UI components
// import { Button } from "./ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import DarkMode from "../DarkMode";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "./ui/sheet";

// import { Separator } from "./ui/separator";
// import { Link, useNavigate } from "react-router-dom";
// import { useLogoutUserMutation } from "@/features/api/authApi";
// import { toast } from "sonner";
// import { useSelector } from "react-redux";

// function Navbar() {
//   const { user } = useSelector((store) => store.auth);
//   const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
//   const navigate = useNavigate();

//   const logoutHandler = async () => {
//     await logoutUser();
//   };

//   useEffect(() => {
//     if (isSuccess) {
//       toast.success(data?.message || "User logout.");
//       navigate("/login");
//     }
//   }, [isSuccess, data, navigate]);

//   return (
//     <div className="h-16 dark:bg-[#020817] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10 ">
//       {/* Desktop */}
//       {/* -------------------- DESKTOP NAVBAR -------------------- */}
//       <div className="md:flex justify-between items-center gap-10 h-full max-w-7xl mx-auto hidden  ">
//         <div className="flex items-center gap-2">
//           <School size={"30"} />
//           <Link to="/">
//             <h1 className="hidden md:block font-extrabold text-2xl ">
//               E-Learning
//             </h1>
//           </Link>
//         </div>
//         {/* User icons and dark mode icon  */}
//         <div className="flex items-center gap-8">
//           {user ? (
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Avatar>
//                   <AvatarImage
//                     src={user?.photoUrl || "https://github.com/shadcn.png"}
//                     alt="@shadcn"
//                   />
//                   <AvatarFallback>CN</AvatarFallback>
//                 </Avatar>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="w-56">
//                 <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuGroup>
//                   <DropdownMenuItem>
//                     {" "}
//                     <Link to="/my-learning">My learning</Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem>
//                     {" "}
//                     <Link to="/profile"> Edit Profile </Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem onClick={logoutHandler}>
//                     Log out
//                   </DropdownMenuItem>
//                 </DropdownMenuGroup>
//                 {user?.role === "instructor" && (
//                   <>
//                     <DropdownMenuSeparator />
//                     <DropdownMenuItem>
//                       {" "}
//                       <Link to={"/admin/dashboard"}>Dashboard</Link>{" "}
//                     </DropdownMenuItem>
//                   </>
//                 )}
//               </DropdownMenuContent>
//             </DropdownMenu>
//           ) : (
//             <div className="flex items-center gap-2">
//               <Button variant="outline" onClick={() => navigate("/login")}>
//                 Login
//               </Button>
//               <Button onClick={() => navigate("/login")}>Signup</Button>
//             </div>
//           )}
//           <DarkMode />
//         </div>
//       </div>

//       {/* Mobile device */}
//       <div className="flex md:hidden items-center justify-between px-4 h-full ">
//         <MobileNavbar user={user} />
//       </div>
//     </div>
//   );
// }

// export default Navbar;

// /* -------------------- MOBILE NAVBAR COMPONENT -------------------- */

// const MobileNavbar = ({ user }) => {
//   const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();

//   const logoutHandler = async () => {
//     await logoutUser();
//   };
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isSuccess) {
//       toast.success(data?.message || "User Logout.");
//       navigate("/login");
//     }
//   }, [isSuccess, data, navigate]);

//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button
//           size="icon"
//           className="rounded-full  hover:bg-gray-200 "
//           variant="outline"
//         >
//           <Menu />
//         </Button>
//       </SheetTrigger>
//       <SheetContent className="flex flex-col">
//         <SheetHeader className="flex flex-row items-center justify-between mt-2">
//           <SheetTitle>
//             {" "}
//             <SheetClose asChild>
//               <Link to="/">E-Learning</Link>
//             </SheetClose>
//           </SheetTitle>
//           <DarkMode />
//         </SheetHeader>
//         <Separator className="mr-2" />
//         <nav className="flex flex-col space-y-4">
//           <SheetClose asChild>
//             <Link to="/my-learning">My Learning</Link>
//           </SheetClose>
//           <SheetClose asChild>
//             <Link to="/profile">Edit Profile</Link>
//           </SheetClose>
//           <SheetClose asChild>
//             <p className="cursor-pointer" onClick={logoutHandler}>
//               Logout
//             </p>
//           </SheetClose>
//         </nav>
//         {user?.role === "instructor" && (
//           <SheetFooter>
//             <SheetClose asChild>
//               <Button
//                 type="submit"
//                 onClick={() => navigate("/admin/dashboard")}
//               >
//                 Dashboard
//               </Button>
//             </SheetClose>
//           </SheetFooter>
//         )}
//       </SheetContent>
//     </Sheet>
//   );
// };

// Icons from lucide
import { Menu, School } from "lucide-react";
import React, { useEffect } from "react";

// UI components
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import DarkMode from "../DarkMode";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import { Separator } from "./ui/separator";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "@/features/api/authApi";
import { toast } from "sonner";
import { useSelector } from "react-redux";

function Navbar() {
  const { user } = useSelector((store) => store.auth);
  const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await logoutUser();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "User logout.");
      navigate("/login");
    }
  }, [isSuccess, data, navigate]);

  return (
    <div className="h-16 dark:bg-[#020817] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10 ">
      {/* Desktop */}
      <div className="md:flex justify-between items-center gap-10 h-full max-w-7xl mx-auto hidden">
        <div className="flex items-center gap-3">
          <School size={"30"} className="text-blue-600" />
          <Link to="/">
            <div className="flex flex-col">
              <h1 className="font-extrabold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                E-Learning
              </h1>
              <span className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                Elevate Your Skills
              </span>
            </div>
          </Link>
        </div>
        {/* User icons and dark mode icon  */}
        <div className="flex items-center gap-8">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage
                    src={user?.photoUrl || "https://github.com/shadcn.png"}
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link to="/my-learning">My learning</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/profile">Edit Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logoutHandler}>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                {user?.role === "instructor" && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link to={"/admin/dashboard"}>Dashboard</Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button 
                onClick={() => navigate("/login")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
              >
                Signup
              </Button>
            </div>
          )}
          <DarkMode />
        </div>
      </div>

      {/* Mobile device */}
      <div className="flex md:hidden items-center justify-between px-4 h-full">
        <MobileNavbar user={user} />
      </div>
    </div>
  );
}

export default Navbar;

/* -------------------- MOBILE NAVBAR COMPONENT -------------------- */

const MobileNavbar = ({ user }) => {
  const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();

  const logoutHandler = async () => {
    await logoutUser();
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "User Logout.");
      navigate("/login");
    }
  }, [isSuccess, data, navigate]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="rounded-full hover:bg-gray-200"
          variant="outline"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <SheetTitle>
            <SheetClose asChild>
              <Link to="/">
                <div className="flex flex-col">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-extrabold text-xl leading-tight">
                    E-Learning
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                    Elevate Your Skills
                  </span>
                </div>
              </Link>
            </SheetClose>
          </SheetTitle>
          <DarkMode />
        </SheetHeader>
        <Separator className="mr-2" />
        <nav className="flex flex-col space-y-4">
          <SheetClose asChild>
            <Link to="/my-learning">My Learning</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link to="/profile">Edit Profile</Link>
          </SheetClose>
          <SheetClose asChild>
            <p className="cursor-pointer" onClick={logoutHandler}>
              Logout
            </p>
          </SheetClose>
        </nav>
        {user?.role === "instructor" && (
          <SheetFooter>
            <SheetClose asChild>
              <Button
                type="submit"
                onClick={() => navigate("/admin/dashboard")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
              >
                Dashboard
              </Button>
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};