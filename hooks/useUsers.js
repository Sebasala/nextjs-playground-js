import { useState, useEffect } from 'react'
import fetchApi from '@/utils/fetchApi'

const usersEndpoint = 'https://random-data-api.com/api/v2/users?size=5users'

export default function useUsers() {
    const [users, setUsers] = useState([])

    const fetchUsers = () => {
        fetchApi(usersEndpoint, setUsers)
    }

    useEffect(fetchUsers, [])
    
    return users
}