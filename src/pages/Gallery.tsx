import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { properties } from "@/data/properties";
import galleryHero from "@/assets/gallery-hero.jpg";

const Gallery = () => (
  <Layout>
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
            A world worth exploring
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Discover stunning properties captured through the lens of our community.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          {/* Featured large */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
            className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-card cursor-pointer"
          >
            <img src={galleryHero} alt="Featured destination" className="h-full w-full object-cover" />
          </motion.div>

          {properties.map((p, i) => (
            <motion.div
              key={p.title}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ transitionDelay: `${i * 40}ms` }}
              className={`rounded-2xl overflow-hidden shadow-card cursor-pointer ${
                i === 3 ? "col-span-2" : ""
              }`}
            >
              <img src={p.image} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Gallery;
