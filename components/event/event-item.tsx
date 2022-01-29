import classes from "./event-item.module.scss";
import Button from "../ui/Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import Image from "next/image";

const EventItem = ({
  title,
  image,
  location,
  date,
  id,
}: {
  title: string;
  image: string;
  date: string;
  location: string;
  id: string;
}) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `events/${id}`;

  return (
    <li className={classes.item}>
      <Image src={`/${image}`} alt="image" width={240} height={150} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon></DateIcon>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon></AddressIcon>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon></ArrowRightIcon>
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
