import { useState, useEffect } from 'react';
import axios from 'axios';
import { MainLayout } from '../layouts/MainLayout';


export default function Portfolio({ serverTypes, serverExamples }) {
    const [types, setTypes] = useState(serverTypes);
    const [examples, setExamples] = useState(serverExamples);

    useEffect(() => {
        async function load() {
          const {data: portfolioTypes} = await axios.get(`${process.env.API_URL}/portfolio-types`);
          setTypes(portfolioTypes);
          const {data: portfolioExamples} = await axios.get(`${process.env.API_URL}/examples`);
          setExamples(portfolioExamples);
        }
        !serverTypes && !serverExamples && load();
    }, [])

    if (!types || !examples) {
        return (
            <MainLayout headTitle="Portfolio">
                <p>Loading...</p>
            </MainLayout>
        )
    }

    return (
        <MainLayout headTitle="Portfolio">
            {/* <!--examples section--> */}
      <section className="examples">
        <div className="container">
          <h1 className="visually-hidden">Примеры работ</h1>

          {/* <!--radio button--> */}
            <ul className="filtr list">
              {types && types.map((type, index) => (
                <li className="item" key={index}>
              <button type="button" className="button">{type}</button>
            </li>)
              )}
          </ul>
          {/* <!-- EXAMPLES --> */}
          <ul className="examples-list list">
              {examples && examples.map(({ id, title, text, type, picture:{webp, jpg} }) => (
                <li className="item" key={id}>
                  <a href="" className="link">
                    <div className="block-overlay">
                      <p className="text-overlay">
                        {text}
                      </p>
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
                        />
                      </picture>
                    </div>
                    <div className="card-content">
                      <h2 className="title">{title}</h2>
                      <p className="text">{type}</p>
                    </div>
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
        </MainLayout>
    )
}

Portfolio.getInitialProps = async ({ req }) => {
    if (!req) {
      return {
        serverTypes: null,
        serverExamples: null
      }
    }
    const {data: types} = await axios.get(`${process.env.API_URL}/portfolio-types`);
    const {data: examples} = await axios.get(`${process.env.API_URL}/examples`);
    return {
        serverTypes: types,
        serverExamples: examples
    }
}