import {useContext} from 'react'
import AuthContext from '@/context/AuthProvider'

function useAuthContext(argument) {
 return useContext(AuthContext)
}

export default useAuthContext
