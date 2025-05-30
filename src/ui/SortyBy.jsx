import PropTypes from "prop-types"
import Select from "./Select"
import { useSearchParams } from "react-router-dom"
function SortyBy({options}) {
    const [searchParams,setSearchParams]=useSearchParams()

    const sortBy=searchParams.get('sortBy') || "";
    function handleChange(e){
searchParams.set('sortBy',e.target.value)
setSearchParams(searchParams)
    }
  return (
    <Select options={options} type='white' onChange={handleChange} value={sortBy} />
    
  )
}
SortyBy.propTypes={
    options:PropTypes.any,
}

export default SortyBy
