import EventList from "../../components/event/event-list";
import EventSearch from "../../components/event/event-search";
import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year: string, month: string) => {
    router.push({
      pathname: `/events/${year}/${month}`,
    });
  };

  return (
    <>
      <EventSearch onSearch={findEventsHandler}></EventSearch>
      <EventList items={events}></EventList>
    </>
  );
};

export default AllEventsPage;
