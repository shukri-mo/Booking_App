import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Filter({ filteredField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter=searchParams.get(filteredField || options.value.at[0])
  function handleClick(value) {

    if(searchParams.get('page'))
    searchParams.set('page',1)
    
    searchParams.set(filteredField, value,options.value);
    console.log("filtered Vlue",filteredField,value,options.value)
    setSearchParams(searchParams);
  }
  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          onClick={() => handleClick(option.value)}
          key={option.value} active={option.value===currentFilter}
         disabled ={option.value===currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

Filter.propTypes = {
  map: PropTypes.any,
  value: PropTypes.any,
  filteredField: PropTypes.any,
  options: PropTypes.any,
};
export default Filter;
