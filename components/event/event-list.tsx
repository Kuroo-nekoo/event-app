import { IEvent } from "../../interface/IEvent";
import EventItem from "./event-item";
import classes from "./event-list.module.scss";

const EventList = ({ items }: { items: IEvent[] }) => {
  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          title={item.title}
          date={item.date}
          image={item.image}
          location={item.location}
        ></EventItem>
      ))}
    </ul>
  );
};

export default EventList;
