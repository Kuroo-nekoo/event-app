import { useRouter } from "next/router";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import { getEventById } from "../../dummy-data";
import { IEvent } from "../../interface/IEvent";
import Head from "next/head";

const EventDetailPage = () => {
  const router = useRouter();
  let event: IEvent | undefined;

  if (router.query.eventId && typeof router.query.eventId === "string") {
    console.log(router.query.eventId);
    event = getEventById(router.query.eventId);
  }

  if (!event) {
    return <div>event not found</div>;
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
      </Head>
      <EventSummary title={event.title}></EventSummary>
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      ></EventLogistics>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
