import { pages } from '@/constants'
import Content from '@/components/Content'

export default function Home() {
  return (
    <main>
      <h1>Next JS Playground with JS</h1>
      <Content pages={pages} />
    </main>
  )
}
