'use client'
import useUsers from '@/hooks/useUsers'
import Image from 'next/image'
import UserThumbnail from '@/components/UserThumbnail'

const Users = () => {
    const users = useUsers()

    const usersMarkup = users.map(user => {
        return (
            <UserThumbnail user={user} key={user.id} />
        )
    })

    return (
        <main>
            <h1>Users</h1>
            <ul>{usersMarkup}</ul>
        </main>
    )
}

export default Users