import Filter from "../../ui/Filter"
import SortyBy from "../../ui/SortyBy"
import TableOperations from "../../ui/TableOperations"
export default function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter filteredField='discount' options={[
        {value:'all', label:'all'},
        {value:'no-discount', label:'No-discount'},
        {value:'with-discount', label:'Have-discount'},
      ]}/>
      <SortyBy options={[
        {value:'name-asc',label:'Sort by name (A-Z)'},
        {value:'name-desc',label:'Sort by name (Z-A)'},
        {value:'regularPrice-asc',label:'Sort by name price (low first)'},
        {value:'regularPrice-desc',label:'Sort by name price (high first)'},
        {value:'maxCapacity-asc',label:'Sort by capacity (low first)'},
        {value:'maxCapacity-desc',label:'Sort by capacity (high first)'},
      ]}/>
    </TableOperations>
  )
}
