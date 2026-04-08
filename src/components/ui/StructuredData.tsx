export default function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["FoodEstablishment", "LocalBusiness"],
    name: "Taylor's Tacos Chicago",
    description:
      "Building CommuniTAY one taco at a time. Premium taco catering for corporate events, weddings, parties & more across Chicagoland.",
    url: "https://www.taylorstacoschicago.com",
    telephone: "+17732261596",
    email: "info@taylorstacoschicago.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "135 N. Kedzie",
      addressLocality: "Chicago",
      addressRegion: "IL",
      postalCode: "60612",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "41.8781",
      longitude: "-87.6298",
    },
    areaServed: [
      { "@type": "City", name: "Chicago", sameAs: "https://www.wikidata.org/wiki/Q1297" },
      { "@type": "State", name: "Illinois" },
      { "@type": "AdministrativeArea", name: "Chicagoland" },
    ],
    servesCuisine: ["Mexican", "Tacos", "Catering", "Street Food"],
    priceRange: "$$ - $$$",
    image: "https://www.taylorstacoschicago.com/images/logo/taylors-tacos-chicago-logo-stacked.webp",
    logo: "https://www.taylorstacoschicago.com/images/logo/taylors-tacos-chicago-logo-stacked.webp",
    sameAs: [
      "https://www.instagram.com/taylorstacoschicago",
      "https://www.facebook.com/taylorstacoschicago",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "500",
    },
    hasMenuItem: [
      {
        "@type": "MenuItem",
        name: "Street Tacos",
        description: "Taylor's Tacos Chicago signature street tacos served in newspaper wrap.",
      },
      {
        "@type": "MenuItem",
        name: "Carne Asada Taco",
        description: "Classic carne asada taco with colorful fresh toppings.",
      },
      {
        "@type": "MenuItem",
        name: "Birria Tacos",
        description: "Fan-favorite birria tacos served in a basket with house hot sauce — a Taylor's Tacos Chicago staple.",
      },
      {
        "@type": "MenuItem",
        name: "Asparagus Taco",
        description: "Must-try vegetarian asparagus taco with pickled onions — fresh, bold, and plant-based.",
        suitableForDiet: "https://schema.org/VeganDiet",
      },
      {
        "@type": "MenuItem",
        name: "Catering Tray",
        description: "Full catering tray loaded with tacos, purple cabbage, and all the toppings for your event.",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Taco Catering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Delivery & Pick-Up Taco Catering",
            description:
              "Self-serve taco bars, taco trays & individual lunches for delivery or pick-up across Chicagoland.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Staffed Event Catering",
            description:
              "Live action taco stations, buffet setups & taco bite tables with full staff for corporate events, weddings, and parties.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Food Truck Rental",
            description:
              "Book the Taylor's Tacos food truck for your event in Chicago. $499 booking fee, 125 taco minimum.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Corporate Event Catering",
            description:
              "Professional taco catering for corporate lunches, team events, and company parties in Chicago.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wedding Taco Catering",
            description:
              "Memorable taco bar catering for weddings and receptions across Chicagoland.",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I book Taylor's Tacos Chicago for my event?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book Taylor's Tacos Chicago by filling out our online booking form at taylorstacoschicago.com, calling us at (773) 226-1596, or emailing info@taylorstacoschicago.com. We cater events across Chicagoland.",
        },
      },
      {
        "@type": "Question",
        name: "What types of events does Taylor's Tacos Chicago cater?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Taylor's Tacos Chicago caters a wide range of events including corporate lunches, weddings, birthday parties, Taco Tuesday events, school events, nonprofit fundraisers, and block parties. We offer delivery & pick-up, staffed event catering, and food truck rental.",
        },
      },
      {
        "@type": "Question",
        name: "Does Taylor's Tacos Chicago offer food truck rental?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! You can rent the Taylor's Tacos Chicago food truck for your event. There is a $499 booking fee with a 125 taco minimum. Contact us at (773) 226-1596 to check availability.",
        },
      },
      {
        "@type": "Question",
        name: "What is the minimum order for Taylor's Tacos Chicago catering?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For food truck rentals, there is a minimum of 125 tacos. For other catering packages (delivery, staffed events), please contact us directly for pricing based on your guest count and event type.",
        },
      },
      {
        "@type": "Question",
        name: "Does Taylor's Tacos Chicago serve birria tacos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Birria tacos are one of our fan favorites. We serve birria tacos alongside street tacos, carne asada, asparagus tacos, and more. Contact us to discuss your full menu options for catering.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Taylor's Tacos Chicago located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Taylor's Tacos Chicago is located at 135 N. Kedzie, Chicago, IL 60612. We also travel across Chicagoland for catering events.",
        },
      },
      {
        "@type": "Question",
        name: "Does Taylor's Tacos Chicago do wedding catering?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! Taylor's Tacos Chicago provides full wedding catering services including staffed taco bars, buffet-style setups, and food truck rentals. We make your wedding day delicious and unforgettable.",
        },
      },
      {
        "@type": "Question",
        name: "Can Taylor's Tacos Chicago accommodate dietary restrictions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Taylor's Tacos Chicago offers vegetarian and vegan options including our Asparagus Taco. Please mention any dietary needs when booking and we will customize the menu accordingly.",
        },
      },
      {
        "@type": "Question",
        name: "How many guests can Taylor's Tacos Chicago cater for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Taylor's Tacos Chicago can cater events of all sizes — from intimate gatherings of 20 to large corporate or wedding events of 500+ guests. Contact us with your guest count for a custom quote.",
        },
      },
      {
        "@type": "Question",
        name: "Does Taylor's Tacos Chicago have a Taco Tuesday special?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Taylor's Tacos Chicago hosts weekly Taco Tuesday specials at our 135 N. Kedzie location in Chicago. We also offer Taco Tuesday corporate catering packages for offices across Chicagoland.",
        },
      },
      {
        "@type": "Question",
        name: "What areas does Taylor's Tacos Chicago serve for catering?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Taylor's Tacos Chicago serves all of Chicagoland including the city of Chicago, suburbs, and surrounding areas in Illinois. Contact us to confirm availability for your specific location.",
        },
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Book Taylor's Tacos Chicago for Your Event",
    description: "Steps to book taco catering or food truck rental from Taylor's Tacos Chicago.",
    step: [
      {
        "@type": "HowToStep",
        name: "Choose Your Service",
        text: "Select from delivery & pick-up, staffed catering, or food truck rental based on your event size and type.",
      },
      {
        "@type": "HowToStep",
        name: "Fill Out the Booking Form",
        text: "Visit taylorstacoschicago.com and fill out the online booking form with your event date, guest count, and event type.",
      },
      {
        "@type": "HowToStep",
        name: "Confirm Your Date",
        text: "Call (773) 226-1596 or email info@taylorstacoschicago.com to confirm availability and discuss menu options.",
      },
      {
        "@type": "HowToStep",
        name: "Enjoy Your Event",
        text: "Taylor's Tacos Chicago arrives at your event fully prepared to serve Chicago's best tacos to your guests.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  );
}
