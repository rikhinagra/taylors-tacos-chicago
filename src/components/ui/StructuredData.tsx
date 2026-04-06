export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
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
    servesCuisine: ["Mexican", "Tacos", "Catering"],
    priceRange: "$$ - $$$",
    image: "https://www.taylorstacoschicago.com/images/logo/main logo full.webp",
    sameAs: [
      "https://www.instagram.com/taylorstacoschicago",
      "https://www.facebook.com/taylorstacoschicago",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Catering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Delivery & Pick-Up Taco Catering",
            description: "Self-serve taco bars, taco trays & individual lunches for delivery or pick-up.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Staffed Event Catering",
            description: "Live action taco stations, buffet setups & taco bite tables with full staff.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Food Truck Rental",
            description: "Book the Taylor's Tacos food truck for your event. $499 booking fee, 125 taco minimum.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
