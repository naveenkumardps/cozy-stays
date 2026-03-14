import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { services } from "@/data/properties";

const Services = () => (
  <Layout>
    <section className="py-24">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Services designed around you
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            From luxury accommodations to curated local experiences — everything you need for an unforgettable journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.2, 0, 0, 1] }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <span className="text-3xl mb-4 block">{s.icon}</span>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-primary text-primary-foreground font-medium transition-all hover:brightness-110 active:scale-95"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
