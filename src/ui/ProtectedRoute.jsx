import PropTypes from 'prop-types'
import { useUser } from '../features/authentication/Useuser'
import Spinner from './Spinner'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const FullPage=styled.div`
height:100vh;
background-color: var(--color-grey-50);
display: flex;

align-items:center;
justify-content:center;
`
function ProtectedRoute({children}) {
    const navigate=useNavigate()
    //1. Load authenticated User
   
    const{isAuthenticated,isLoading}=useUser()

     //3. if no authenticated redirect to login page
   useEffect(()=>{
if(!isAuthenticated && !isLoading) navigate('/login')
    },[isAuthenticated,navigate,isLoading])

    //2. shows spinner
    if(isLoading) return(<FullPage><Spinner/></FullPage>)

 
// if(!user.isAuthenticated) navigate('/login')

    //4. if user render the app
    
    if(isAuthenticated) return   children
    
  
}

export default ProtectedRoute

ProtectedRoute.propTypes={
    children:PropTypes.any,
}