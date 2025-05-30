import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import PropTypes from "prop-types";
import Menus from "../../ui/Menus";
import { HiArrowDownOnSquare, HiArrowUpOnSquare, HiEye, HiTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { UseCheckout } from "../check-in-out/UseCheckout";
import { useDeleteBooking } from "./UseDeleteBooking";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

export function BookingRow({
  
  booking: {
    id: bookingId,
    //  created_at,
    startDate,
    endDate,
    numNights,
    //  numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  const navigate = useNavigate();
  const{checkout,isCheckingOut}=UseCheckout()
const{isDeleting,deleteBooking}=useDeleteBooking()
  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>

      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Stacked>
      {/* <span>{created_at}</span> */}
      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>
      <Menus.Menu>
        <Menus.Toggle id={bookingId} />
        <Menus.List id={bookingId}>
          <Menus.Button
            icon={<HiEye />}
            onClick={() => navigate(`/bookings/${bookingId}`)}
          >
            See details
          </Menus.Button>
          {status === "unconfirmed" && (
            <Menus.Button
              icon={<HiArrowDownOnSquare />}
              onClick={() => navigate(`/checkin/${bookingId}`)}
            >
              checkin
            </Menus.Button>
          )}

  {status === "checked-in" && (
            <Menus.Button
              icon={<HiArrowUpOnSquare  />}
              onClick={() =>{checkout({bookingId})}} disabled={isCheckingOut}
            >
              check out 
            </Menus.Button>
          )}

            <Menus.Button
              icon={<HiTrash  />}
              onClick={() =>{deleteBooking(bookingId)}} disabled={isDeleting}
            >
              delete
            </Menus.Button>
          






        </Menus.List>
      </Menus.Menu>
    </Table.Row>
  );
}
BookingRow.propTypes = {
  booking: {
    id: PropTypes.any,
    created_at: PropTypes.any,
    startDate: PropTypes.any,
    endDate: PropTypes.any,
    numNights: PropTypes.any,
    numGuests: PropTypes.any,
    totalPrice: PropTypes.any,
    status: PropTypes.any,
    guests: PropTypes.any,
    cabins: PropTypes.any,
  },
};

export default BookingRow;
