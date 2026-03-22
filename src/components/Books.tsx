"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const books = [
  {
    title: "Educated",
    author: "Tara Westover",
    note: "A testament to the power of learning to remake yourself.",
    cover: "https://m.media-amazon.com/images/I/71-4MkLN5jL._AC_UF1000,1000_QL80_.jpg",
    bg: "#EEE8F5",
  },
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    note: "The series that made me fall in love with reading.",
    cover: "https://www.jkrowling.com/wp-content/uploads/2018/01/SorcerersStone_2017.png",
    bg: "#EAF0F5",
  },
  {
    title: "In Order to Live",
    author: "Yeonmi Park",
    note: "Courage and freedom, told without flinching.",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1437799970i/24611623.jpg",
    bg: "#F5EEE8",
  },
  {
    title: "Poor Economics",
    author: "Banerjee & Duflo",
    note: "Changed how I think about poverty and policy.",
    cover: "https://books.google.com/books/content?vid=ISBN9781610390408&printsec=frontcover&img=1&zoom=1",
    bg: "#EEF5EE",
  },
  {
    title: "Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    note: "A manual for thinking about wealth and happiness.",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYyICCNC1ATq8j_5cxdSAA749kTJ0SdFHz4g&s",
    bg: "#F0EEF8",
  },
];

function BookCard({ book, i }: { book: typeof books[0]; i: number }) {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Ambient float */}
      <motion.div
        className="h-full"
        animate={{ y: [0, -(3 + i), 0] }}
        transition={{ duration: 4 + i * 0.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: i * 0.5 }}
      >
        {/* Hover card */}
        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 280, damping: 20 }}
          className="group relative rounded-2xl overflow-hidden shadow-md cursor-default flex flex-col h-full"
          style={{ backgroundColor: book.bg, border: "1px solid rgba(32,64,200,0.1)" }}
        >
          {/* Cover image */}
          <div className="relative w-full overflow-hidden flex-shrink-0" style={{ height: "220px", backgroundColor: "rgba(149,128,204,0.05)" }}>
            <Image
              src={book.cover}
              alt={book.title}
              fill
              className="object-contain p-4 drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, 20vw"
            />
          </div>

          {/* Info */}
          <div className="p-4 flex flex-col flex-1">
            <h3 className="font-sans font-medium text-base mb-1 leading-snug" style={{ color: "#111111" }}>
              {book.title}
            </h3>
            <p className="text-xs font-sans mb-2" style={{ color: "#666666" }}>{book.author}</p>
            <p className="text-xs font-sans italic leading-relaxed" style={{ color: "rgba(17,17,17,0.45)" }}>
              &ldquo;{book.note}&rdquo;
            </p>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ backgroundColor: "rgba(149,128,204,0.04)" }} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Books() {
  return (
    <section className="section-padding" id="books">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-sans text-xs tracking-[0.25em] uppercase mb-3" style={{ color: "#2040C8" }}>
            Favourite Reads
          </p>
          <h2 className="font-sans font-normal leading-tight mb-2" style={{ color: "#111111", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
            Books I always come back to.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch">
          {books.map((book, i) => (
            <BookCard key={i} book={book} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
