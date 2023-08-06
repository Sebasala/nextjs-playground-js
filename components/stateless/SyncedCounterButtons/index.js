import CounterButton from "@/components/stateless/CounterButton";

export default function SyncedCounterButtons({ clicks, onClick }) {
  return (
    <>
      <div>
        <CounterButton clicks={clicks} onClick={onClick} />
      </div>
      <div>
        <CounterButton clicks={clicks} onClick={onClick} />
      </div>
    </>
  );
}
