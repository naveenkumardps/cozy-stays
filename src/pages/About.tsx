import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import aboutTeam from "@/assets/about-team.jpg";

const stats = [
  { value: "10M+", label: "Guests hosted" },
  { value: "190+", label: "Countries" },
  { value: "98%", label: "Satisfaction" },
  { value: "24/7", label: "Support" },
];

const About = () => (
  <Layout>
    {/* Narrative */}
    <section className="py-24">
      <div className="max-w-2xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
          className="text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-8"
        >
          We believe the best stays are felt, not just seen
        </motion.h1>
        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <p>
            Founded in 2018, Hearth was born from a simple belief: travel should feel like coming home. We connect discerning travelers with exceptional properties and hosts who share a passion for hospitality.
          </p>
          <p>
            Every property on our platform is personally vetted by our team. We look beyond amenities — we seek out the warmth of a host, the character of a neighborhood, and the intangible feeling that makes a stay unforgettable.
          </p>
          <p>
            Today, our community spans over 190 countries, and we remain committed to the craft of meaningful travel — one extraordinary stay at a time.
          </p>
        </div>
      </div>
    </section>

    {/* Team image */}
    <section className="pb-16">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden shadow-card"
        >
          <img src={aboutTeam} alt="The Hearth team" className="w-full h-auto object-cover" />
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-semibold text-foreground tabular-nums">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-16 pb-24">
      <div className="container max-w-3xl">
        <h2 className="text-2xl font-semibold text-foreground mb-10 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Authenticity", desc: "We champion real connections between hosts and guests over transactional stays." },
            { title: "Craft", desc: "Every detail matters — from the listing photography to the check-in experience." },
            { title: "Trust", desc: "Transparent reviews, verified hosts, and a guarantee that backs every booking." },
          ].map((v) => (
            <div key={v.title} className="text-center md:text-left">
              <h3 className="text-base font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
