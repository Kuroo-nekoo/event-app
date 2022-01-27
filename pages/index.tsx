import EventList from "../components/event/event-list";
import { getFeaturedEvents } from "../dummy-data";

const HomePage = () => {
  const featuresEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuresEvents}></EventList>
    </div>
  );
};

export default HomePage;
