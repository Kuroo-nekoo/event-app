import EventList from "../components/event/event-list";
import { getFeaturedEvents } from "../dummy-data";
import Head from "next/head";

const HomePage = () => {
  const featuresEvents = getFeaturedEvents();

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
      </Head>
      <EventList items={featuresEvents}></EventList>
    </div>
  );
};

export default HomePage;
