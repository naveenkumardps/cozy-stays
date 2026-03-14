import { motion } from "framer-motion";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  rating?: string;
}

const PropertyCard = ({ image, title, location, price, rating }: PropertyCardProps) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
    className="group cursor-pointer"
  >
    <div className="relative aspect-square overflow-hidden rounded-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      {rating && (
        <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm rounded-lg px-2.5 py-1 text-xs font-medium text-foreground">
          ★ {rating}
        </div>
      )}
    </div>
    <div className="mt-3 space-y-1">
      <h3 className="text-base font-medium text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{location}</p>
      <p className="text-sm font-semibold tabular-nums text-foreground">{price}</p>
    </div>
  </motion.div>
);

export default PropertyCard;
