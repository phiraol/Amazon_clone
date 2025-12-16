import React, { useEffect, useContext} from 'react'
import { DataContext } from "../dataProvider/DataProvider"
import { useNavigate } from 'react-router-dom'
const ProtectedRoute = ({ children, msg, redirect }) => {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth", { state: { msg, redirect } })
    }
  }, [user])
  return children;
}

export default ProtectedRoute
