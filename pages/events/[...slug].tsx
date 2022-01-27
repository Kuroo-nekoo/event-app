import { useRouter } from "next/router";
import EventList from "../../components/event/event-list";
import ResultsTitle from "../../components/event/results-title";
import { getFilteredEvents } from "../../dummy-data";
import { IEvent } from "../../interface/IEvent";

const FilteredEventPage = () => {
  const router = useRouter();
  let filteredEvents: IEvent[] = [];

  if (
    router.query.slug &&
    !isNaN(+router.query.slug[0]) &&
    !isNaN(+router.query.slug[1]) &&
    1 <= +router.query.slug[1] &&
    +router.query.slug[1] <= 12
  ) {
    filteredEvents = getFilteredEvents({
      year: +router.query.slug[0],
      month: +router.query.slug[1],
    });
  } else {
    return <div>Invalid filter</div>;
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return <div>No event match the filter</div>;
  }
  return (
    <>
      <ResultsTitle
        date={new Date(+router.query.slug[0], +router.query.slug[1] - 1)}
      ></ResultsTitle>
      <EventList items={filteredEvents}></EventList>
    </>
  );
};

export default FilteredEventPage;
