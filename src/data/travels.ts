export type TransportType = "Bus" | "Train" | "Flight";

export interface Destination {
  id: string;
  slug: string;
  name: string;
  state: string;
  description: string;
  image: string;
  startingPrice?: number;
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  destination: string;
  destinationSlug: string;
  duration: string;
  days: number;
  nights: number;
  startingPrice?: number;
  transportTypes: TransportType[];
  category: string;
  image: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  featured: boolean;
}

export const destinations: Destination[] = [
  {
    id: "1",
    slug: "kashmir",
    name: "Kashmir",
    state: "Jammu & Kashmir",
    description:
      "Discover beautiful valleys, mountain views, lakes, and unforgettable Himalayan landscapes.",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "2",
    slug: "rajasthan",
    name: "Rajasthan",
    state: "Rajasthan",
    description:
      "Explore magnificent forts, royal palaces, colourful markets, and rich cultural heritage.",
    image:
      "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "3",
    slug: "kerala",
    name: "Kerala",
    state: "Kerala",
    description:
      "Experience peaceful backwaters, lush greenery, beautiful beaches, and scenic landscapes.",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "4",
    slug: "goa",
    name: "Goa",
    state: "Goa",
    description:
      "Enjoy beautiful beaches, coastal scenery, local cuisine, and relaxing holiday experiences.",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "5",
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    state: "Himachal Pradesh",
    description:
      "Discover mountain towns, beautiful valleys, winding roads, and peaceful hill stations.",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "6",
    slug: "uttarakhand",
    name: "Uttarakhand",
    state: "Uttarakhand",
    description:
      "Explore Himalayan scenery, peaceful retreats, nature trails, and spiritual destinations.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",
  },
];

export const tourPackages: TourPackage[] = [
  {
    id: "1",
    slug: "kashmir-holiday",
    title: "Kashmir Holiday Experience",
    destination: "Kashmir",
    destinationSlug: "kashmir",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    transportTypes: ["Bus", "Train", "Flight"],
    category: "Family",
    image: destinations[0].image,
    description:
      "Explore Kashmir's beautiful landscapes, mountain views, local attractions, and scenic valleys.",
    highlights: [
      "Explore Srinagar",
      "Discover scenic valleys",
      "Enjoy local sightseeing",
      "Experience Himalayan landscapes",
    ],
    inclusions: [
      "Sightseeing as per the confirmed itinerary",
      "Accommodation, if included in the final quotation",
      "Travel assistance",
    ],
    exclusions: [
      "Personal expenses",
      "Optional activities",
      "Services not mentioned in the final quotation",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        description:
          "Arrive in Srinagar and explore the city according to your confirmed travel arrangements.",
      },
      {
        day: 2,
        title: "Explore Srinagar",
        description:
          "Discover local attractions and enjoy the beautiful surroundings.",
      },
      {
        day: 3,
        title: "Scenic Valley Excursion",
        description:
          "Explore a nearby scenic destination, subject to weather and travel arrangements.",
      },
      {
        day: 4,
        title: "Local Experiences",
        description:
          "Enjoy sightseeing and explore the local culture.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Complete your trip and depart according to your confirmed schedule.",
      },
    ],
    featured: true,
  },

  {
    id: "2",
    slug: "rajasthan-heritage",
    title: "Royal Rajasthan Tour",
    destination: "Rajasthan",
    destinationSlug: "rajasthan",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    transportTypes: ["Bus", "Train"],
    category: "Culture",
    image: destinations[1].image,
    description:
      "Discover Rajasthan's royal heritage, historic architecture, colourful markets, and local culture.",
    highlights: [
      "Explore Jaipur",
      "Discover historic forts",
      "Experience local culture",
      "Visit traditional markets",
    ],
    inclusions: [
      "Sightseeing as per the confirmed itinerary",
      "Travel assistance",
    ],
    exclusions: [
      "Personal expenses",
      "Optional activities",
      "Services not included in the final quotation",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jaipur",
        description: "Arrive and explore the city as per your itinerary.",
      },
      {
        day: 2,
        title: "Heritage Exploration",
        description: "Explore historic landmarks and local attractions.",
      },
      {
        day: 3,
        title: "Culture and Markets",
        description: "Discover local culture, crafts, and traditional markets.",
      },
      {
        day: 4,
        title: "Scenic Excursion",
        description: "Explore additional destinations according to your package.",
      },
      {
        day: 5,
        title: "Departure",
        description: "Complete your trip and depart as scheduled.",
      },
    ],
    featured: true,
  },

  {
    id: "3",
    slug: "kerala-nature",
    title: "Kerala Nature Escape",
    destination: "Kerala",
    destinationSlug: "kerala",
    duration: "6 Days / 5 Nights",
    days: 6,
    nights: 5,
    transportTypes: ["Train", "Flight"],
    category: "Nature",
    image: destinations[2].image,
    description:
      "Discover Kerala's natural beauty, green landscapes, peaceful backwaters, and coastal scenery.",
    highlights: [
      "Explore Kerala's landscapes",
      "Discover local attractions",
      "Enjoy scenic surroundings",
      "Experience local cuisine",
    ],
    inclusions: [
      "Sightseeing as per the confirmed itinerary",
      "Travel assistance",
    ],
    exclusions: [
      "Personal expenses",
      "Optional activities",
      "Services not included in the final quotation",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kerala",
        description: "Arrive and begin your journey according to your itinerary.",
      },
      {
        day: 2,
        title: "Nature and Local Sightseeing",
        description: "Explore local attractions and scenic surroundings.",
      },
      {
        day: 3,
        title: "Discover the Landscape",
        description: "Experience Kerala's greenery and natural beauty.",
      },
      {
        day: 4,
        title: "Backwater Experience",
        description: "Explore backwater attractions if included in your package.",
      },
      {
        day: 5,
        title: "Local Exploration",
        description: "Enjoy additional sightseeing and local experiences.",
      },
      {
        day: 6,
        title: "Departure",
        description: "Depart according to your confirmed schedule.",
      },
    ],
    featured: true,
  },

  {
    id: "4",
    slug: "goa-beach-holiday",
    title: "Goa Beach Holiday",
    destination: "Goa",
    destinationSlug: "goa",
    duration: "4 Days / 3 Nights",
    days: 4,
    nights: 3,
    transportTypes: ["Bus", "Train", "Flight"],
    category: "Beach",
    image: destinations[3].image,
    description:
      "Explore Goa's beaches, coastal scenery, local markets, and relaxed holiday atmosphere.",
    highlights: [
      "Explore coastal attractions",
      "Discover local markets",
      "Enjoy beach scenery",
      "Experience local cuisine",
    ],
    inclusions: [
      "Sightseeing as per the confirmed itinerary",
      "Travel assistance",
    ],
    exclusions: [
      "Personal expenses",
      "Optional activities",
      "Services not included in the final quotation",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Goa",
        description: "Arrive and settle in according to your travel arrangements.",
      },
      {
        day: 2,
        title: "Beach Exploration",
        description: "Discover beaches and coastal attractions.",
      },
      {
        day: 3,
        title: "Local Sightseeing",
        description: "Explore local landmarks and markets.",
      },
      {
        day: 4,
        title: "Departure",
        description: "Complete your trip and depart as scheduled.",
      },
    ],
    featured: true,
  },

  {
    id: "5",
    slug: "himachal-mountain-escape",
    title: "Himachal Mountain Escape",
    destination: "Himachal Pradesh",
    destinationSlug: "himachal-pradesh",
    duration: "6 Days / 5 Nights",
    days: 6,
    nights: 5,
    transportTypes: ["Bus", "Train"],
    category: "Adventure",
    image: destinations[4].image,
    description:
      "Discover mountain scenery, peaceful hill stations, and beautiful Himalayan landscapes.",
    highlights: [
      "Explore hill stations",
      "Discover mountain viewpoints",
      "Experience local culture",
      "Enjoy scenic drives",
    ],
    inclusions: [
      "Sightseeing as per the confirmed itinerary",
      "Travel assistance",
    ],
    exclusions: [
      "Personal expenses",
      "Optional activities",
      "Services not included in the final quotation",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        description: "Begin your journey according to the confirmed itinerary.",
      },
      {
        day: 2,
        title: "Hill Station Exploration",
        description: "Explore the local hill station and its attractions.",
      },
      {
        day: 3,
        title: "Mountain Excursion",
        description: "Discover scenic viewpoints, subject to conditions.",
      },
      {
        day: 4,
        title: "Local Experiences",
        description: "Enjoy sightseeing and explore local culture.",
      },
      {
        day: 5,
        title: "Scenic Exploration",
        description: "Discover additional attractions on your trip.",
      },
      {
        day: 6,
        title: "Departure",
        description: "Depart according to your confirmed schedule.",
      },
    ],
    featured: true,
  },

  {
    id: "6",
    slug: "uttarakhand-discovery",
    title: "Uttarakhand Discovery",
    destination: "Uttarakhand",
    destinationSlug: "uttarakhand",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    transportTypes: ["Bus", "Train"],
    category: "Nature",
    image: destinations[5].image,
    description:
      "Discover beautiful landscapes, mountain scenery, and peaceful destinations in Uttarakhand.",
    highlights: [
      "Explore scenic landscapes",
      "Discover local attractions",
      "Experience mountain culture",
      "Enjoy peaceful surroundings",
    ],
    inclusions: [
      "Sightseeing as per the confirmed itinerary",
      "Travel assistance",
    ],
    exclusions: [
      "Personal expenses",
      "Optional activities",
      "Services not included in the final quotation",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        description: "Begin your trip according to your itinerary.",
      },
      {
        day: 2,
        title: "Local Exploration",
        description: "Discover local attractions and surroundings.",
      },
      {
        day: 3,
        title: "Nature Excursion",
        description: "Explore scenic locations subject to conditions.",
      },
      {
        day: 4,
        title: "Local Experiences",
        description: "Enjoy additional sightseeing and local culture.",
      },
      {
        day: 5,
        title: "Departure",
        description: "Complete your trip and depart as scheduled.",
      },
    ],
    featured: true,
  },
];