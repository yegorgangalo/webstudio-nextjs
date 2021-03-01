import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'
import { MainLayout } from '../layouts/MainLayout';
import Form from '../components/Form';
const Modal = dynamic(() => import('../components/Modal'))


export default function Home() {
    const [showModal, setShowModal] = useState(false);

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
          <h1 className="hero-title">
            Эффективные решения для вашего бизнеса
          </h1>
          <button className="button--primary" data-modal-open onClick={toggleModal}>Заказать услугу</button>
        </div>
      </section>

      {/* <!--advantages section--> */}
      <section className="advantages">
        <div className="container">
          <h2 className="visually-hidden">Преимущества</h2>
          <ul className="advantages-list list">
            <li className="item">
              <div className="advantages-background">
                <svg className="advantages-icon">
                  <use href="./images/sprite.svg#adv-antenna-1" />
                </svg>
              </div>
              <h3 className="title">Внимание к деталям</h3>
              <p className="text">
                Идейные соображения, а также начало повседневной работы по
                формированию позиции.
              </p>
            </li>
            <li className="item">
              <div className="advantages-background">
                <svg className="advantages-icon">
                  <use href="./images/sprite.svg#adv-clock-2" />
                </svg>
              </div>
              <h3 className="title">Пунктуальность</h3>
              <p className="text">
                Задача организации, в особенности же рамки и место обучения
                кадров влечет за собой.
              </p>
            </li>
            <li className="item">
              <div className="advantages-background">
                <svg className="advantages-icon">
                  <use href="./images/sprite.svg#adv-diagram-3" />
                </svg>
              </div>
              <h3 className="title">Планирование</h3>
              <p className="text">
                Равным образом консультация с широким активом в значительной
                степени обуславливает.
              </p>
            </li>
            <li className="item">
              <div className="advantages-background">
                <svg className="advantages-icon">
                  <use href="./images/sprite.svg#adv-astronaut-4" />
                </svg>
              </div>
              <h3 className="title">Современные технологии</h3>
              <p className="text">
                Значимость этих проблем настолько очевидна, что реализация
                плановых заданий.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* <!--work section--> */}
      <section className="work">
        <div className="container">
          <h2 className="section-title">Чем мы занимаемся</h2>
          <ul className="work-list list">
            <li className="item">
              <picture>
                <source
                  srcSet="./images/work-1-img-370@1x.webp 370w,
                          ./images/work-1-img-370@2x.webp 740w,
                          ./images/work-1-img-370@3x.webp 1110w"
                  sizes="(min-width: 1200px) 370px"
                  type="image/webp"
                />
                <img
                  loading="lazy"
                  className="image"
                  srcSet="./images/work-1-img-370@1x.jpg 370w,
                          ./images/work-1-img-370@2x.jpg 740w,
                          ./images/work-1-img-370@3x.jpg 1110w"
                  src="./images/work-1-img-370@1x.jpg"
                  alt="Программируем"
                  sizes="(min-width: 1200px) 370px"
                  width="370"
                />
              </picture>
              <h3 className="title">Десктопные приложения</h3>
            </li>
            <li className="item">
              <picture>
                <source
                  srcSet="./images/work-2-img-370@1x.webp 370w,
                          ./images/work-2-img-370@2x.webp 740w,
                          ./images/work-2-img-370@3x.webp 1110w"
                  sizes="(min-width: 1200px) 370px"
                  type="image/webp"
                />
                <img loading="lazy" className="image"
                  srcSet="./images/work-2-img-370@1x.jpg 370w,
                          ./images/work-2-img-370@2x.jpg 740w,
                          ./images/work-2-img-370@3x.jpg 1110w"
                  src="./images/work-2-img-370@1x.jpg"
                  alt="Верстаем"
                  sizes="(min-width: 1200px) 370px"
                  width="370"
                />
              </picture>
              <h3 className="title">Мобильные приложения</h3>
            </li>
            <li className="item">
              <picture>
                <source
                  srcSet="./images/work-3-img-370@1x.webp 370w,
                          ./images/work-3-img-370@2x.webp 740w,
                          ./images/work-3-img-370@3x.webp 1110w"
                  sizes="(min-width: 1200px) 370px"
                  type="image/webp"
                />
                <img loading="lazy" className="image"
                  srcSet="./images/work-3-img-370@1x.jpg 370w,
                          ./images/work-3-img-370@2x.jpg 740w,
                          ./images/work-3-img-370@3x.jpg 1110w"
                  src="./images/work-3-img-370@1x.jpg"
                  alt="Рисуем"
                  sizes="(min-width: 1200px) 370px"
                  width="370"
                />
              </picture>
              <h3 className="title">Дизайнерские решения</h3>
            </li>
          </ul>
        </div>
      </section>

      {/* <!--Our command section--> */}
      <section className="command">
        <div className="container">
          <h2 className="section-title">Наша команда</h2>
          <ul className="command-list list">
            <li className="item">
                <picture>
                  <source
                    srcSet="./images/comand-1-450img@1x.webp 1x,
                            ./images/comand-1-450img@2x.webp 2x"
                    media="(max-width: 767px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="./images/comand-1-354img@1x.webp 1x,
                            ./images/comand-1-354img@2x.webp 2x"
                    media="(min-width: 768px) and (max-width: 1199px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="./images/comand-1-270img@1x.webp 1x,
                            ./images/comand-1-270img@2x.webp 2x"
                    media="(min-width: 1200px)"
                    type="image/webp"
                  />

                  <source
                    srcSet="./images/comand-1-450img@1x.jpg 1x,
                            ./images/comand-1-450img@2x.jpg 2x"
                    media="(max-width: 767px)"
                  />
                  <source
                    srcSet="./images/comand-1-354img@1x.jpg 1x,
                            ./images/comand-1-354img@2x.jpg 2x"
                    media="(min-width: 768px) and (max-width: 1199px)"
                  />
                  <source
                    srcSet="./images/comand-1-270img@1x.jpg 1x,
                            ./images/comand-1-270img@2x.jpg 2x"
                    media="(min-width: 1200px)"
                  />

                  <img loading="lazy" className="image"
                    src="./images/comand-1-354img@1x.jpg" alt="Аватар"
                    width="450"
                  />
                </picture>
              <div className="command-card-content">
                <h3 className="title">Игорь Демьяненко</h3>
                <p className="text">Product Designer</p>
                <ul className="social-list list">
                  <li className="social-item">
                    <a href="" className="social-link link" aria-label="ссылка на соцсеть" target="_blank" rel="noopener noreferrer">
                      <svg className="social-icon">
                        <use
                          href="./images/sprite.svg#command-card-instagram-1"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="social-item">
                    <a href="" className="social-link link" aria-label="ссылка на соцсеть" target="_blank" rel="noopener noreferrer">
                      <svg className="social-icon">
                        <use
                          href="./images/sprite.svg#command-card-twitter-2"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="social-item">
                    <a href="" className="social-link link" aria-label="ссылка на соцсеть" target="_blank" rel="noopener noreferrer">
                      <svg className="social-icon">
                        <use
                          href="./images/sprite.svg#command-card-facebook-3"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="social-item">
                    <a href="" className="social-link link" aria-label="ссылка на соцсеть" target="_blank" rel="noopener noreferrer">
                      <svg className="social-icon">
                        <use
                          href="./images/sprite.svg#command-card-linkedin-4"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="item">
              <picture>
                  <source
                    srcSet="./images/comand-2-450img@1x.webp 1x,
                            ./images/comand-2-450img@2x.webp 2x"
                    media="(max-width: 767px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="./images/comand-2-354img@1x.webp 1x,
                            ./images/comand-2-354img@2x.webp 2x"
                    media="(min-width: 768px) and (max-width: 1199px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="./images/comand-2-270img@1x.webp 1x,
                            ./images/comand-2-270img@2x.webp 2x"
                    media="(min-width: 1200px)"
                    type="image/webp"
                  />

                  <source
                    srcSet="./images/comand-2-450img@1x.jpg 1x,
                            ./images/comand-2-450img@2x.jpg 2x"
                    media="(max-width: 767px)"
                  />
                  <source
                    srcSet="./images/comand-2-354img@1x.jpg 1x,
                            ./images/comand-2-354img@2x.jpg 2x"
                    media="(min-width: 768px) and (max-width: 1199px)"
                  />
                  <source
                    srcSet="./images/comand-2-270img@1x.jpg 1x,
                            ./images/comand-2-270img@2x.jpg 2x"
                    media="(min-width: 1200px)"
                  />

                  <img loading="lazy" className="image"
                    src="./images/comand-2-354img@1x.jpg" alt="Аватар"
                    width="450"
                  />
                </picture>
              <div className="command-card-content">
                <h3 className="title">Ольга Репина</h3>
                <p className="text">Frontend Developer</p>
                <ul className="social-list list">
                  <li className="social-item">
                    <a href="" className="social-link link" aria-label="ссылка на соцсеть" target="_blank" rel="noopener noreferrer">
                      <svg className="social-icon">
                        <use
                          href="./images/sprite.svg#command-card-instagram-1"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="social-item">
                    <a href="" className="social-link link" aria-label="ссылка на соцсеть" target="_blank" rel="noopener noreferrer">
                      <svg className="social-icon">
                        <use
                          href="./images/sprite.svg#command-card-twitter-2"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="social-item">
                    <a href="" className="social-link link" aria-label="ссылка на соцсеть" target="_blank" rel="noopener noreferrer">
                      <svg className="social-icon">
                        <use
                          href="./images/sprite.svg#command-card-facebook-3"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="social-item">
                    <a href="" className="social-link link" aria-label="ссылка на соцсеть" target="_blank" rel="noopener noreferrer">
                      <svg className="social-icon">
                        <use
                          href="./images/sprite.svg#command-card-linkedin-4"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="item">
              <picture>
                  <source
                    srcSet="./images/comand-3-450img@1x.webp 1x,
                            ./images/comand-3-450img@2x.webp 2x"
                    media="(max-width: 767px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="./images/comand-3-354img@1x.webp 1x,
                            ./images/comand-3-354img@2x.webp 2x"
                    media="(min-width: 768px) and (max-width: 1199px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="./images/comand-3-270img@1x.webp 1x,
                            ./images/comand-3-270img@2x.webp 2x"
                    media="(min-width: 1200px)"
                    type="image/webp"
                  />

                  <source
                    srcSet="./images/comand-3-450img@1x.jpg 1x,
                            ./images/comand-3-450img@2x.jpg 2x"
                    media="(max-width: 767px)"
                  />
                  <source
                    srcSet="./images/comand-3-354img@1x.jpg 1x,
                            ./images/comand-3-354img@2x.jpg 2x"
                    media="(min-width: 768px) and (max-width: 1199px)"
                  />
                  <source
                    srcSet="./images/comand-3-270img@1x.jpg 1x,
                            ./images/comand-3-270img@2x.jpg 2x"
                    media="(min-width: 1200px)"
                  />

                  <img loading="lazy" className="image"
                    src="./images/comand-3-354img@1x.jpg" alt="Аватар"
                    width="450"
                  />
                </picture>
              <div className="command-card-content">
                <h3 className="title">Николай Тарасов</h3>
                <p className="text">Marketing</p>
                <ul className="social-list list">
                  <li className="social-item">
                    <a href="" className="social-link link" aria-label="ссылка на соцсеть" target="_blank" rel="noopener noreferrer">
                      <svg className="social-icon">
                        <use
                          href="./images/sprite.svg#command-card-instagram-1"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="social-item">
                    <a href="" className="social-link link" aria-label="ссылка на соцсеть" target="_blank" rel="noopener noreferrer">
                      <svg className="social-icon">
                        <use
                          href="./images/sprite.svg#command-card-twitter-2"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="social-item">
                    <a href="" className="social-link link" aria-label="ссылка на соцсеть" target="_blank" rel="noopener noreferrer">
                      <svg className="social-icon">
                        <use
                          href="./images/sprite.svg#command-card-facebook-3"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="social-item">
                    <a href="" className="social-link link" aria-label="ссылка на соцсеть" target="_blank" rel="noopener noreferrer">
                      <svg className="social-icon">
                        <use
                          href="./images/sprite.svg#command-card-linkedin-4"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="item">
              <picture>
                  <source
                    srcSet="./images/comand-4-450img@1x.webp 1x,
                            ./images/comand-4-450img@2x.webp 2x"
                    media="(max-width: 767px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="./images/comand-4-354img@1x.webp 1x,
                            ./images/comand-4-354img@2x.webp 2x"
                    media="(min-width: 768px) and (max-width: 1199px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="./images/comand-4-270img@1x.webp 1x,
                            ./images/comand-4-270img@2x.webp 2x"
                    media="(min-width: 1200px)"
                    type="image/webp"
                  />

                  <source
                    srcSet="./images/comand-4-450img@1x.jpg 1x,
                            ./images/comand-4-450img@2x.jpg 2x"
                    media="(max-width: 767px)"
                  />
                  <source
                    srcSet="./images/comand-4-354img@1x.jpg 1x,
                            ./images/comand-4-354img@2x.jpg 2x"
                    media="(min-width: 768px) and (max-width: 1199px)"
                  />
                  <source
                    srcSet="./images/comand-4-270img@1x.jpg 1x,
                            ./images/comand-4-270img@2x.jpg 2x"
                    media="(min-width: 1200px)"
                  />

                  <img loading="lazy" className="image"
                    src="./images/comand-4-354img@1x.jpg" alt="Аватар"
                    width="450"
                  />
                </picture>
              <div className="command-card-content">
                <h3 className="title">Михаил Ермаков</h3>
                <p className="text">UI Designer</p>
                <ul className="social-list list">
                  <li className="social-item">
                    <a href="" className="social-link link" aria-label="ссылка на соцсеть" target="_blank" rel="noopener noreferrer">
                      <svg className="social-icon">
                        <use
                          href="./images/sprite.svg#command-card-instagram-1"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="social-item">
                    <a href="" className="social-link link" aria-label="ссылка на соцсеть" target="_blank" rel="noopener noreferrer">
                      <svg className="social-icon">
                        <use
                          href="./images/sprite.svg#command-card-twitter-2"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="social-item">
                    <a href="" className="social-link link" aria-label="ссылка на соцсеть" target="_blank" rel="noopener noreferrer">
                      <svg className="social-icon">
                        <use
                          href="./images/sprite.svg#command-card-facebook-3"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="social-item">
                    <a href="" className="social-link link" aria-label="ссылка на соцсеть" target="_blank" rel="noopener noreferrer">
                      <svg className="social-icon">
                        <use
                          href="./images/sprite.svg#command-card-linkedin-4"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* <!--Our Clients--> */}
      <section className="clients">
        <div className="container">
          <h2 className="section-title">Постоянные клиенты</h2>
          <ul className="clients-list list">
            <li className="item">
              <a className="clients-link" href="" aria-label="ссылка на сайт клиента" target="_blank" rel="noopener noreferrer">
                <svg className="clients-icon" width="44" height="49">
                  <use href="./images/sprite.svg#clients-logo-1" />
                </svg>
              </a>
            </li>
            <li className="item">
              <a className="clients-link" href="" aria-label="ссылка на сайт клиента" target="_blank" rel="noopener noreferrer">
                <svg className="clients-icon" width="40" height="52">
                  <use href="./images/sprite.svg#clients-logo-2" />
                </svg>
              </a>
            </li>
            <li className="item">
              <a className="clients-link" href="" aria-label="ссылка на сайт клиента" target="_blank" rel="noopener noreferrer">
                <svg className="clients-icon" width="41" height="43">
                  <use href="./images/sprite.svg#clients-logo-3" />
                </svg>
              </a>
            </li>
            <li className="item">
              <a className="clients-link" href="" aria-label="ссылка на сайт клиента" target="_blank" rel="noopener noreferrer">
                <svg className="clients-icon" width="80" height="42">
                  <use href="./images/sprite.svg#clients-logo-4" />
                </svg>
              </a>
            </li>
            <li className="item">
              <a className="clients-link" href="" aria-label="ссылка на сайт клиента" target="_blank" rel="noopener noreferrer">
                <svg className="clients-icon" width="59" height="47">
                  <use href="./images/sprite.svg#clients-logo-5" />
                </svg>
              </a>
            </li>
            <li className="item">
              <a className="clients-link" href="" aria-label="ссылка на сайт клиента" target="_blank" rel="noopener noreferrer">
                <svg className="clients-icon" width="88" height="45">
                  <use href="./images/sprite.svg#clients-logo-6" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        </section>
        </MainLayout>
    )
}