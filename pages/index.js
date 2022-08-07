import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import profilePhoto from "../assets/profile.jpeg";
import waves from "../assets/waves.svg";
import projects from "../assets/projects.json";
import resume from "../assets/resume.json";
import { useState, useEffect } from "react";
import { addRequestMeta } from "next/dist/server/request-meta";
import Card from "../components/Card"


export default function Home() {
  const [page, setPage] = useState(0);
  
  
  return (
    <div>
      <Image src={waves} layout="fill" alt="waves" objectFit="cover" />
      <Head>
        <title>Charles Inwald</title>
        <meta name="description" content="Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="card card-compact w-96 bg-base-100 shadow-xl m-3">
          <figure>
            <Image src={profilePhoto} alt="Profile" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Charles Inwald</h2>
            <p>Frontend Developer.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Contact</button>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2	">
          {page == 0 && projects.map((project, index) => (
            Card(index, project.title, project.photo, project.url)
          ))}
          {page == 1 && resume.map((project, index) => (
            <div
              key={index}
              className="card card-compact bg-base-100 shadow-xl m-3"
            >
              <figure>{/* Image Will Go Here */}</figure>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Visit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
