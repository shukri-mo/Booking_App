import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
  const PAGE_SIZE = 10;

export function useBookings() {
//   const [searchParams] = useSearchParams();
//   //FILTER

//   const filterValue = searchParams.get("status");
//   const filter =
//     !filterValue || filterValue === "all"
//       ? null
//       : // {field:"totalPrice",value:5000,method:'gte'}
//         { field: "status", value: filterValue };

//           //Sorting

//   const sortByRow=searchParams.get('sortBy') || 'startDate-desc';
//   const [field,direction]=sortByRow.split('-')
//   const sortBy={field,direction};
  
//   const { isLoading, 
//     data: bookings}  = useQuery({
//     queryKey: ["bookings", filter,sortBy],
//     queryFn: () => getBookings({ filter,sortBy }),
//   });

const [searchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  const sortByRow = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRow.split("-");
  const sortBy = { field, direction };

  const {
    isLoading,
    data, // now contains { data, count }
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page,pageSize:PAGE_SIZE }),
  });





 return {
    bookings: data?.data ?? [],
    count: data?.count ?? 0,
    isLoading,
    error,
    pageSize:PAGE_SIZE,
  };
  // return {isLoading,bookings,error}
}

