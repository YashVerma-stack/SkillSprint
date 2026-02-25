import { useGetCourseDetailWithStatusQuery } from "@/features/api/purchaseApi";
import { useLoadUserQuery } from "@/features/api/authApi";
import { useParams, Navigate } from "react-router-dom"
import { useEffect, useState } from "react";

const PurchaseCourseProtectedRoute = ({children}) => {
    const {courseId} = useParams();
    const {data, isLoading} = useGetCourseDetailWithStatusQuery(courseId);

    if(isLoading) return <p>Loading...</p>

    return data?.purchased ? children : <Navigate to={`/course-detail/${courseId}`} />
}

export default PurchaseCourseProtectedRoute;