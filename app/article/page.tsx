"use client";
import Image from "next/image";
import "./globals.css";

const articles = [
  {
    title: "An Introduction to Audio Classification",
    description:
      "Created in 2025, introducing how audio is collected, preprocessing and how to collect data for audio classification.",
    time: "4 mins read",
    date: "Jan 12, 2026",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*0e698npX7dUGnxw2",
    link: "https://medium.com/@sahanhansaja026/an-introduction-to-audio-classification-using-machine-learning-0dac09361b2f",
  },
  {
    title: "Smart Parking Detection using ESP32, FastAPI & PostgreSQL",
    description:
      "Connected an ESP32 with an ultrasonic sensor, sent data via WiFi to a FastAPI backend, and stored it in PostgreSQL — backend & IoT only.",
    time: "3 mins read",
    date: "Sep 7, 2025",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*DE9PLw_NhBXXFLgc538jtw.png",
    link: "https://medium.com/@sahanhansaja026/️-smart-parking-detection-using-esp32-fastapi-postgresql-0cf20c1e64fe",
  },
  {
    title: "Creating a Backend with MongoDB and Firebase: File Storage Meets Data Management",
    description:
      "Guide on using Firebase Storage for files and MongoDB for metadata in modern web apps for efficient and secure data management.",
    time: "3 mins read",
    date: "May 6, 2025",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*DL5kWTkXsaBLRlTrcZBkhA.png",
    link: "https://medium.com/@sahanhansaja026/creating-a-backend-with-mongodb-and-firebase-6f192a1abfc9",
  },
];

export default function ArticlePage() {
  return (
    <main>
      <div className="articlerow">
        <div className="articletitle">
          <h1>Articles</h1>
        </div>
        <div className="article-list">
          {articles.map((article, index) => (
            <div className="article-card" key={index}>
              <div className="article-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <div className="article-meta">
                  {article.date} • {article.time}
                </div>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-link"
                >
                  Read on Medium →
                </a>
              </div>
              <div className="article-image">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={150}
                  height={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}