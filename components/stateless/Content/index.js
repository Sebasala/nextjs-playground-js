import Link from 'next/link'

export default function Content({ pages }) {
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