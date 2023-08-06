import SyncedCounterButtonsProvider from "@/components/stateful/SyncedCounterButtonsProvider"

export default function DependentCounterButtons() {
    return (
        <section>
            <h2>Synced counter buttons</h2>
            <SyncedCounterButtonsProvider />
        </section>
    )
}