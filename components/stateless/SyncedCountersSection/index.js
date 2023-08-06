import Section from '@/components/stateless/Section'
import SyncedCounterButtonsProvider from '@/components/stateful/SyncedCounterButtonsProvider'

export default function SyncedCountersSection() {
    return (
        <Section title="Synced counter buttons">
            <SyncedCounterButtonsProvider />
        </Section>
    )
}