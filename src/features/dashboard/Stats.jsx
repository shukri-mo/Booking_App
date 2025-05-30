import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import PropTypes from "prop-types";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
import Spinner from "../../ui/Spinner";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  //1. number of bookings
  if (!bookings || !confirmedStays || !numDays || !cabinCount) {
    return <Spinner />;
  }
  const numBookings = bookings?.length || 0;
  //2. statistc rate
  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);
  //3. total chekins
  const chekins = confirmedStays?.length || 0;
  //4. Occupancy Rate
  //occupations can be calculated by num checked nights/all available nights
  const occupation =
    confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title={"Bookings"}
        color={"blue"}
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title={"Sales"}
        color={"green"}
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title={"check ins"}
        color={"indigo"}
        icon={<HiOutlineCalendarDays />}
        value={chekins}
      />
      <Stat
        title={"Occupancy rate "}
        color={"yellow"}
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}
Stats.propTypes = {
  bookings: PropTypes.any,
  confirmedStays: PropTypes.any,
  numDays: PropTypes.any,
  cabinCount: PropTypes.any,
};
export default Stats;
