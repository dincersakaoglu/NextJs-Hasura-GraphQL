import Head from "next/head";

import { getAllEvents, getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";
import NewsletterRegistration from "../components/input/newsletter-registration";


function HomePage(props) {
  // const featuredEvents = getFeaturedEvents();

  async function processResult() {
    const allEvents = await getAllEvents();
    console.log(allEvents);
  }
  processResult();

  return (
    <div>
      <Head>
        <title>Nextjs Events</title>
        <meta name="description" content="Find great events..." />
      </Head>
      <NewsletterRegistration />
      <EventList items={props.featuredEvents} />
    
    </div>
  );
}

export async function getStaticProps() {
  const data = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: data.events,
    },
    revalidate: 1800,
  };
}

export default HomePage;
