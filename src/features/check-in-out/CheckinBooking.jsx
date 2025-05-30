import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import { UseSettings } from "../settings/UseSettings";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";
import Checkbox from "../../ui/Checkbox";
import { formatCurrency } from "../../utils/helpers";
import { UseCheckin } from "./UseCheckin";
const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const { booking, isLoading } = useBooking();
  const { settings,isLoading:isLoadingSettings } = UseSettings();
  const [addBreakFast, setAddBreakFast] = useState(false);
  // useEffect(() => {
  //   if (booking) {
  //     setConfirmPaid(booking.isPaid);
  //   }
  // }, [booking]);
  //SAME AS THE BELOW ONE

  useEffect(() => {
    setConfirmPaid(booking?.isPaid ?? false);
  }, [booking]);

  const moveBack = useMoveBack();
  const { checkin, isCheckingIn } = UseCheckin();
  if (isLoading || isLoadingSettings) return <Spinner />;
  // const booking = {};
  // if(!booking) return;
  const {
    id: bookingId,
    guests: { fullName },
    totalPrice,
    numGuests,
    numNights,
    hasBreakfast,
    // cabins: { name: cabinName },

    // totalPrice,numGuests,hasBreakFast,numNights
  } = booking || {};
  const optionalBreakFast=settings.breakFastPrice*numNights*numGuests

  function handleCheckin() {
    if (!confirmPaid) return;
if(addBreakFast){
  checkin(
    {
      bookingId,
      breakfast:{
        hasBreakfast:true,
        extrasPrice:optionalBreakFast,
        totalPrice:totalPrice+optionalBreakFast
      }
    }
  )
  
}
else{
    checkin({bookingId,breakfast:{}});

}


  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {!hasBreakfast &&(
      <box>
        <Checkbox
          checked={addBreakFast}
          onChange={() => {
            setAddBreakFast((add) => !add);
            setConfirmPaid(false);
          }}
          id="breakfast"
        >
          Want to add break fast for  {formatCurrency(optionalBreakFast)} 
        </Checkbox>
      </box>
      )
      }
      <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          id={"confirm"}
          disabled={confirmPaid || isCheckingIn}
        >
         I confirmed that {fullName} has paid the total amount of{" "}

          { !addBreakFast? formatCurrency(totalPrice):`${formatCurrency(optionalBreakFast+totalPrice)}(${formatCurrency(totalPrice)}+ ${formatCurrency(optionalBreakFast)})`}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
