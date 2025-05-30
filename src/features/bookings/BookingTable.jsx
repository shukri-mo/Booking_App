 import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { useBookings } from "./UseBookings";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import PropTypes from "prop-types";

function BookingTable() {
  // const bookings = [];
  const{bookings,isLoading,count,pageSize}=useBookings()
  if(isLoading) return <Spinner/>
if(!bookings.length) return <Empty resourceName='Bookings'/>
  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
        <Table.Footer>
          <Pagination count={count} pageSize={pageSize} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}
BookingTable.propTypes={
  count:PropTypes.number
}
export default BookingTable;
