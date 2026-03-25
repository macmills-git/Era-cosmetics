import { motion } from 'motion/react';

const cards = [
  {
    id: 1,
    type: 'image',
    content: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=600',
    className: 'w-40 h-56 top-20 -left-10 z-30',
    delay: 0.1,
    floatDuration: 6,
  },
  {
    id: 2,
    type: 'stat',
    title: '98%',
    subtitle: 'Radiance boost',
    className: 'w-36 h-36 bottom-10 left-0 bg-white/90 backdrop-blur-md p-6 z-40 border border-gold/10',
    delay: 0.3,
    floatDuration: 8,
  },
  {
    id: 3,
    type: 'product',
    name: 'ERA RADIANCE',
    tag: 'Glow Complex',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=400',
    className: 'w-48 h-64 top-1/4 right-0 bg-ivory z-30 border border-gold/5',
    delay: 0.2,
    floatDuration: 7,
  },
  {
    id: 4,
    type: 'image',
    content: 'https://images.unsplash.com/photo-1552046122-03184de85e08?auto=format&fit=crop&q=80&w=600',
    className: 'w-56 h-72 bottom-20 right-10 z-20',
    delay: 0.4,
    floatDuration: 9,
  },
  {
    id: 5,
    type: 'text',
    content: 'Timeless beauty, scientifically proven.',
    className: 'w-44 h-28 top-10 right-1/4 bg-charcoal text-ivory p-6 z-40',
    delay: 0.5,
    floatDuration: 5,
  }
];

export default function FloatingCards() {
  return (
    <div className="relative w-full h-full">
      {cards.map((card) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
          }}
          transition={{ 
            duration: 1.2, 
            delay: card.delay, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className={`absolute rounded-3xl overflow-hidden card-shadow ${card.className}`}
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: card.floatDuration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full"
          >
            {card.type === 'image' && (
              <img 
                src={card.content} 
                alt="Skincare model" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            )}
            {card.type === 'stat' && (
              <div className="flex flex-col justify-center h-full">
                <span className="text-4xl font-serif text-gold">{card.title}</span>
                <span className="text-xs uppercase tracking-widest mt-2 text-charcoal/60">{card.subtitle}</span>
              </div>
            )}
            {card.type === 'product' && (
              <div className="flex flex-col h-full">
                <div className="h-2/3 overflow-hidden">
                  <img src={card.image} alt={card.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="p-4 flex flex-col justify-center">
                  <span className="text-sm font-serif">{card.name}</span>
                  <span className="text-[10px] uppercase tracking-tighter text-charcoal/40">{card.tag}</span>
                </div>
              </div>
            )}
            {card.type === 'text' && (
              <div className="flex items-center h-full">
                <p className="text-sm font-serif italic leading-relaxed">{card.content}</p>
              </div>
            )}
            {card.type === 'cta' && (
              <button className="text-xs uppercase tracking-[0.2em] font-bold">
                {card.content}
              </button>
            )}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
