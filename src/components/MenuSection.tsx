import { useState, useEffect, useRef } from "react";
import sheeshaImg from "@/assets/sheesha.jpg";
import food1Img from "@/assets/food1.jpg";
import food2Img from "@/assets/food2.jpg";
import drinksImg from "@/assets/drinks.jpg";

type Category = "sheesha" | "food" | "drinks";

const menuData: Record<Category, { name: string; price: string; desc: string; img: string }[]> = {
  sheesha: [
    { name: "Double Apple Classic", price: "Rs 1,200", desc: "Rich, sweet double apple with smooth smoke", img: sheeshaImg },
    { name: "Grape Mint Fusion", price: "Rs 1,300", desc: "Cool mint with deep grape undertones", img: sheeshaImg },
    { name: "Blueberry Ice", price: "Rs 1,400", desc: "Refreshing blueberry with icy finish", img: sheeshaImg },
    { name: "Watermelon Chill", price: "Rs 1,200", desc: "Sweet watermelon with cooling effect", img: sheeshaImg },
    { name: "Pan Masala Premium", price: "Rs 1,500", desc: "Aromatic pan masala blend", img: sheeshaImg },
    { name: "Lemon Mint Fresh", price: "Rs 1,300", desc: "Zesty lemon with cool mint leaves", img: sheeshaImg },
  ],
  food: [
    { name: "Crave Burger Deluxe", price: "Rs 850", desc: "Double patty with special sauce & fries", img: food1Img },
    { name: "Grilled Steak Platter", price: "Rs 1,800", desc: "Premium cut with roasted vegetables", img: food2Img },
    { name: "Chicken Tikka Pizza", price: "Rs 1,200", desc: "Wood-fired with tandoori chicken", img: food1Img },
    { name: "BBQ Wings Bucket", price: "Rs 950", desc: "12 pcs with signature BBQ glaze", img: food2Img },
    { name: "Loaded Nachos", price: "Rs 750", desc: "Cheese, jalapeños & sour cream", img: food1Img },
    { name: "Pasta Alfredo", price: "Rs 900", desc: "Creamy white sauce with grilled chicken", img: food2Img },
  ],
  drinks: [
    { name: "Mango Lassi", price: "Rs 350", desc: "Traditional creamy mango yogurt drink", img: drinksImg },
    { name: "Mint Mojito", price: "Rs 400", desc: "Fresh mint, lime & soda", img: drinksImg },
    { name: "Oreo Shake", price: "Rs 450", desc: "Thick shake with crushed Oreo", img: drinksImg },
    { name: "Fresh Lime Soda", price: "Rs 250", desc: "Tangy & refreshing lime soda", img: drinksImg },
    { name: "Hot Cappuccino", price: "Rs 350", desc: "Rich espresso with steamed milk", img: drinksImg },
    { name: "Strawberry Smoothie", price: "Rs 400", desc: "Fresh berries blended smooth", img: drinksImg },
  ],
};

const categories: { key: Category; label: string }[] = [
  { key: "sheesha", label: "Sheesha" },
  { key: "food", label: "Food" },
  { key: "drinks", label: "Drinks" },
];

const MenuSection = () => {
  const [active, setActive] = useState<Category>("sheesha");
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu" className="py-20 md:py-32 bg-surface" ref={ref}>
      <div className={`container mx-auto px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-12">
          <p className="text-neon-purple-light text-sm tracking-[0.2em] uppercase mb-3 font-sans">Our Menu</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
            Explore Our Offerings
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                active === cat.key
                  ? "gradient-gold text-primary-foreground box-glow-gold"
                  : "bg-surface-light text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuData[active].map((item, i) => (
            <div
              key={item.name}
              className="group rounded-xl overflow-hidden bg-background border border-border hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif font-semibold text-foreground">{item.name}</h3>
                  <span className="text-primary font-bold text-sm whitespace-nowrap ml-3">{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
