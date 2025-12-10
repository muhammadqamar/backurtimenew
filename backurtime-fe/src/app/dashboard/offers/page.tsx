import OfferCard from "@/components/cards/offer_card";
const data = [
  {
    image: "/components/offers-bg.png",
    title: "sea of conquest",
    progress: 50,
    stats1: 4,
    stats2: 56,
    stats3: "TS 4.6",
  },
];
export default function OffersPage() {
  return (
    <div>
      offer pageß
      {data.map((d) => (
        <OfferCard {...d} />
      ))}
    </div>
  );
}
