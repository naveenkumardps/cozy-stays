import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

const categories = ["Beach", "Mountain", "City", "Countryside", "Tropical", "Desert"];

const Index = () => (
  <Layout>
    {/* Hero / Search */}
    <section className="pt-12 pb-8">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
          className="text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-4"
        >
          Find your place in the world
        </motion.h1>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Curated stays for the intentional traveler
        </p>

        {/* Search bar */}
        <div className="flex items-center bg-background rounded-2xl shadow-card border border-border p-2 max-w-2xl mx-auto">
          <div className="flex-1 flex items-center gap-3 px-4">
            <Search size={20} className="text-muted-foreground shrink-0" />
            <input
              type="text"
              placeholder="Search destinations, properties..."
              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none py-2.5"
            />
          </div>
          <button className="h-11 px-6 rounded-xl bg-primary text-primary-foreground text-sm font-medium transition-all hover:brightness-110 active:scale-95 shrink-0">
            Search
          </button>
        </div>
      </div>
    </section>

    {/* Categories */}
    <section className="pb-8">
      <div className="container">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-5 py-2.5 rounded-xl bg-secondary text-secondary-foreground text-sm font-medium whitespace-nowrap transition-colors hover:bg-foreground hover:text-background"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>

    {/* Property grid */}
    <section className="pb-20">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {properties.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: [0.2, 0, 0, 1] }}
            >
              <PropertyCard {...p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="pb-24">
      <div className="container">
        <div className="bg-secondary rounded-2xl p-12 md:p-16 text-center">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Ready to explore?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
            Browse our full collection of curated properties and unique experiences around the world.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-primary text-primary-foreground font-medium transition-all hover:brightness-110 active:scale-95"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
