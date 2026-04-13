import { MapPin, Phone, Clock, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = encodeURIComponent(
      `Hi! I'm ${form.name}.\nPhone: ${form.phone}\n${form.message}`
    );
    window.open(`https://wa.me/923177787789?text=${whatsappMsg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-neon-purple-light text-sm tracking-[0.2em] uppercase mb-3 font-sans">Get in Touch</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
            Contact & Location
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info + Map */}
          <div>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Address</p>
                  <p className="text-muted-foreground text-sm">Building 165 Basement, Civic Center Bahria Town, Rawalpindi</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg gradient-purple flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <a href="tel:+923177787789" className="text-muted-foreground text-sm hover:text-primary transition-colors">+92 317 7787789</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Hours</p>
                  <p className="text-muted-foreground text-sm">Open 24 Hours — Every Day</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border h-64">
              <iframe
                title="Crave Lounge Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.5!2d73.06!3d33.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBahria+Town+Civic+Center+Rawalpindi!5e0!3m2!1sen!2spk!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-2xl p-8 border border-border">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Book a Table</h3>
            <p className="text-muted-foreground text-sm mb-6">Send us a message via WhatsApp</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                <input
                  type="tel"
                  required
                  maxLength={20}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                  placeholder="+92 XXX XXXXXXX"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                <textarea
                  required
                  maxLength={500}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
                  placeholder="Table for 4, Friday at 9 PM..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity box-glow-gold"
              >
                <Send className="w-4 h-4" />
                {submitted ? "Sent! ✓" : "Send via WhatsApp"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
