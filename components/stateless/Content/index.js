import Link from 'next/link'

const Content = ({ pages }) => {
    return (
        <nav>
            <ul>
                {pages.map(page => (
                    <li key={page.id}>
                        <Link href={page.path}>
                            {page.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Content;