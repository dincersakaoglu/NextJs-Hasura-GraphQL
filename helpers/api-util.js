export async function getFeaturedEvents() {
  const apiUrl = "http://localhost:8080/v1/graphql";
  const query = `
  {
    events(where: {isfeatured: {_eq: true}}) {
      id
      title
      location
      isfeatured
      image
      description
      date
    }
  }
  `;
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();

  return data;
}

export async function getAllEvents() {
  const apiUrl = "http://localhost:8080/v1/graphql";
  const query = `
    {
        events {
          id
          title
          location
          isfeatured
          image
          description
          date
        }
      }
    `;
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();
  return data;
}
export async function getEventById(id) {
  const apiUrl = "http://localhost:8080/v1/graphql";
  const query = `
    {
        events(where: {id: {_eq: "${id}"}}) {
          id
          title
          location
          isfeatured
          image
          description
          date
        }
      }
      `;
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();
  return data;
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export async function saveNewsletterEmail(email) {
  const apiUrl = "http://localhost:8080/v1/graphql";
  const query = `
  mutation {
    insert_email_one(object: {email: "${email}"}) {
      id
    }
  }
  `;
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();

  return data;
}

export async function saveComments2(comments2) {
  const apiUrl = "http://localhost:8080/v1/graphql";
  const query = `
  
  mutation {
    insert_comments2_one(object: {email: "${comments2.email}", event_id: "${comments2.event_id}", name: "${comments2.name}", text: "${comments2.text}"}){id}
    
  }
  `;
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();
  console.log(response.status);
  return data;
}

export async function getSpecifiedComments2(eventId) {
  const apiUrl = "http://localhost:8080/v1/graphql";
  const query = `
  {
    comments2(where: {event_id: {_eq: "${eventId}"}}) {
      id
      email
      event_id
      name
      text
    }
  }
  `;
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();

  return data;
}
