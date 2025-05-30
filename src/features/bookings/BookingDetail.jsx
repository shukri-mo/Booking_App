import styled from "styled-components";

 import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import Spinner from "../../ui/Spinner";
import {  useNavigate } from "react-router-dom";
import { HiArrowUpOnSquare } from "react-icons/hi2";
import { UseCheckout } from "../check-in-out/UseCheckout";
import Empty from "../../ui/Empty";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  // const booking = {};
  // const status = "checked-in";
  const navigate=useNavigate()
const {booking,isLoading}=useBooking()
const{isCheckingOut,checkout}=UseCheckout()
  const moveBack = useMoveBack();

if(isLoading) return <Spinner/>

if(!booking) return <Empty resourceName='booking' />
  const {status,id:bookingId}=booking
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
             {  status==='unconfirmed'&&<Button onClick={()=>navigate(`/checkin/${bookingId}`)}>checkin</Button>}
        

  {status === "checked-in" && (
            <Button
              icon={<HiArrowUpOnSquare  />}
              onClick={() =>{checkout({bookingId})}} disabled={isCheckingOut}
            >
              check out 
            </Button>
          )}


      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
