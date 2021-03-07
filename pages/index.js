import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { MainLayout } from '../layouts/MainLayout';
import Form from '../components/Form';
import Spinner from '../components/Spinner';
const Modal = dynamic(() => import('../components/Modal'))


export default function Home({serverAdvantages, serverWork, serverCommand, serverClients}) {
  const [showModal, setShowModal] = useState(false);
  const [advantages, setAdvantages] = useState(serverAdvantages);
  const [work, setWork] = useState(serverWork);
  const [command, setCommand] = useState(serverCommand);
  const [clients, setClients] = useState(serverClients);

  useEffect(() => {
        async function load() {
          const {data: advantagesCSR} = await axios.get(`${process.env.API_URL}/advantages`);
          setAdvantages(advantagesCSR);
          const {data: commandCSR} = await axios.get(`${process.env.API_URL}/command`);
          setCommand(commandCSR);
          const {data: workCSR} = await axios.get(`${process.env.API_URL}/work`);
          setWork(workCSR);
          const {data: clientsCSR} = await axios.get(`${process.env.API_URL}/clients`);
          setClients(clientsCSR);
        }
        !serverAdvantages && !serverWork && !serverCommand && !serverClients && load();
    }, [])

    if (!advantages || !work || !command || !clients) {
        return (
            <MainLayout headTitle="Home">
                <Spinner/>
            </MainLayout>
        )
    }

    const toggleModal = () => {
      setShowModal(value => !value);
    }

    return (
      <MainLayout headTitle="Home">
        {showModal &&
          <Modal onClose={toggleModal}>
            <Form onClose={toggleModal}/>
          </Modal>
        }
        {/* <!--hero section--> */}
        <section className="hero hero-overlay">
          <div className="container">
            <h1 className="hero-title"> Эффективные решения для вашего бизнеса </h1>
            <button className="button--primary" onClick={toggleModal}>Заказать услугу</button>
          </div>
        </section>

        {/* <!--advantages section--> */}
        <section className="advantages">
          <div className="container">
            <h2 className="visually-hidden">Преимущества</h2>
            <ul className="advantages-list list">
                {advantages.map(({id, title, text, image }) => (
                  <li className="item" key={id}>
                    <div className="advantages-background">
                      <svg className="advantages-icon">
                        <use href={image} />
                      </svg>
                    </div>
                    <h3 className="title">{title}</h3>
                    <p className="text"> {text} </p>
                  </li>
                  ))
                }
            </ul>
          </div>
        </section>

        {/* <!--work section--> */}
        <section className="work">
          <div className="container">
            <h2 className="section-title">Чем мы занимаемся</h2>
            <ul className="work-list list">
                {work.map(({ id, title, alt, picture: { webp, jpg }}) => (
                  <li className="item" key={id}>
                    <picture>
                      <source
                        srcSet={`${webp[0]} 370w, ${webp[1]} 740w, ${webp[2]} 1110w`}
                        sizes="(min-width: 1200px) 370px"
                        type="image/webp"
                      />
                      <img
                        loading="lazy"
                        className="image"
                        srcSet={`${jpg[0]} 370w, ${jpg[1]} 740w, ${jpg[2]} 1110w`}
                        src={jpg[0]}
                        alt={alt}
                        sizes="(min-width: 1200px) 370px"
                        width="370"
                      />
                    </picture>
                    <h3 className="title">{title}</h3>
                  </li>
                ))}
            </ul>
          </div>
        </section>

      {/* <!--Our command section--> */}
      <section className="command">
        <div className="container">
          <h2 className="section-title">Наша команда</h2>
          <ul className="command-list list">
              {command.map(({ id, title, text, picture:{webp, jpg}, socLinks }) => (
                <li className="item" key={id}>
                  <picture>
                        <source
                          srcSet={`${webp.mobile[0]} 1x, ${webp.mobile[1]} 2x`}
                          media="(max-width: 767px)"
                          type="image/webp"
                        />
                        <source
                          srcSet={`${webp.tablet[0]} 1x, ${webp.tablet[1]} 2x`}
                          media="(min-width: 768px) and (max-width: 1199px)"
                          type="image/webp"
                        />
                        <source
                          srcSet={`${webp.desktop[0]} 1x, ${webp.desktop[1]} 2x`}
                          media="(min-width: 1200px)"
                          type="image/webp"
                        />

                        <source
                          srcSet={`${jpg.mobile[0]} 1x, ${jpg.mobile[1]} 2x`}
                          media="(max-width: 767px)"
                        />
                        <source
                          srcSet={`${jpg.tablet[0]} 1x, ${jpg.tablet[1]} 2x`}
                          media="(min-width: 768px) and (max-width: 1199px)"
                        />
                        <source
                          srcSet={`${jpg.desktop[0]} 1x, ${jpg.desktop[1]} 2x`}
                          media="(min-width: 1200px)"
                        />

                        <img loading="lazy" className="image"
                          src={`${jpg.tablet[0]}`}
                          alt="Аватар"
                          width="450"
                          height="350"
                        />
                  </picture>
                  <div className="command-card-content">
                    <h3 className="title">{title}</h3>
                    <p className="text">{text}</p>
                    <ul className="social-list list">
                      {socLinks.map(({ name, image, href }) => (
                        <li className="social-item" key={name}>
                          <a href={href} className="social-link link" aria-label={`ссылка на ${name}`} target="_blank" rel="noopener noreferrer">
                          <svg className="social-icon">
                            <use href={image} />
                          </svg>
                        </a>
                      </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </section>

      {/* <!--Our Clients--> */}
      <section className="clients">
        <div className="container">
          <h2 className="section-title">Постоянные клиенты</h2>
          <ul className="clients-list list">
              {clients.map(({ id, image, href, width, height }) => (
                <li className="item" key={id}>
                  <a className="clients-link" href={href} aria-label="ссылка на сайт клиента" target="_blank" rel="noopener noreferrer">
                    <svg className="clients-icon" width={width} height={height}>
                      <use href={image} />
                    </svg>
                  </a>
                </li>
              ))}
          </ul>
        </div>
        </section>
        </MainLayout>
    )
}

Home.getInitialProps = async ({ req }) => {
    if (!req) {
      return {
        serverAdvantages: null,
        serverCommand: null,
        serverWork: null,
        serverClients: null
      }
    }
    const {data: advantages} = await axios.get(`${process.env.API_URL}/advantages`);
    const {data: command} = await axios.get(`${process.env.API_URL}/command`);
    const {data: work} = await axios.get(`${process.env.API_URL}/work`);
    const {data: clients} = await axios.get(`${process.env.API_URL}/clients`);
    return {
      serverAdvantages: advantages,
      serverCommand: command,
      serverWork: work,
      serverClients: clients
    }
}