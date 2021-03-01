import { MainLayout } from '../layouts/MainLayout';

export default function Portfolio() {
    return (
        <MainLayout headTitle="Portfolio">
            {/* <!--examples section--> */}
      <section className="examples">
        <div className="container">
          <h1 className="visually-hidden">Примеры работ</h1>

          {/* <!--radio button--> */}
          <ul className="filtr list">
            <li className="item">
              <button type="button" className="button">Все</button>
            </li>
            <li className="item">
              <button type="button" className="button">Приложения</button>
            </li>
            <li className="item">
              <button type="button" className="button">Веб-сайты</button>
            </li>
            <li className="item">
              <button type="button" className="button">Дизайн</button>
            </li>
            <li className="item">
              <button type="button" className="button">Маркетинг</button>
            </li>
          </ul>
          {/* <!-- EXAMPLES --> */}
          <ul className="examples-list list">
            <li className="item">
              <a href="" className="link">
                <div className="block-overlay">
                  <p className="text-overlay">
                    Технокряк это современная площадка распространения
                    коронавируса. Компании используют эту платформу для
                    цифрового шпионажа и атак на защищённые сервера конкурентов.
                  </p>
                  <picture>
                    <source
                      srcSet="./images/examples-1-450img@1x.webp 1x,
                              ./images/examples-1-450img@2x.webp 2x"
                      media="(max-width: 767px)"
                      type="image/webp"
                    />
                    <source
                      srcSet="./images/examples-1-354img@1x.webp 1x,
                              ./images/examples-1-354img@2x.webp 2x"
                      media="(min-width: 768px) and (max-width: 1199px)"
                      type="image/webp"
                    />
                    <source
                      srcSet="./images/examples-1-370img@1x.webp 1x,
                              ./images/examples-1-370img@2x.webp 2x"
                      media="(min-width: 1200px)"
                      type="image/webp"
                    />

                    <source
                      srcSet="./images/examples-1-450img@1x.jpg 1x,
                              ./images/examples-1-450img@2x.jpg 2x"
                      media="(max-width: 767px)"
                    />
                    <source
                    srcSet="./images/examples-1-354img@1x.jpg 1x,
                            ./images/examples-1-354img@2x.jpg 2x"
                      media="(min-width: 768px) and (max-width: 1199px)"
                    />
                    <source
                      srcSet="./images/examples-1-370img@1x.jpg 1x,
                              ./images/examples-1-370img@2x.jpg 2x"
                      media="(min-width: 1200px)"
                    />

                    <img loading="lazy" className="image"
                      src="./images/examples-1-354img@1x.jpg" alt="Аватар"  width="450"
                    />
                  </picture>
                </div>
                <div className="card-content">
                  <h2 className="title">Технокряк</h2>
                  <p className="text">Веб-сайт</p>
                </div>
              </a>
            </li>
            <li className="item">
              <a href="" className="link">
                <div className="block-overlay">
                  <p className="text-overlay">
                    Технокряк это современная площадка распространения
                    коронавируса. Компании используют эту платформу для
                    цифрового шпионажа и атак на защищённые сервера конкурентов.
                  </p>
                  <picture>
                    <source
                      srcSet="./images/examples-2-450img@1x.webp 1x,
                              ./images/examples-2-450img@2x.webp 2x"
                      media="(max-width: 767px)"
                      type="image/webp"
                    />
                    <source
                      srcSet="./images/examples-2-354img@1x.webp 1x,
                              ./images/examples-2-354img@2x.webp 2x"
                      media="(min-width: 768px) and (max-width: 1199px)"
                      type="image/webp"
                    />
                    <source
                      srcSet="./images/examples-2-370img@1x.webp 1x,
                              ./images/examples-2-370img@2x.webp 2x"
                      media="(min-width: 1200px)"
                      type="image/webp"
                    />

                    <source srcSet="./images/examples-2-450img@1x.jpg 1x,
                                    ./images/examples-2-450img@2x.jpg 2x"
                            media="(max-width: 767px)"
                   />
                    <source srcSet="./images/examples-2-354img@1x.jpg 1x,
                                              ./images/examples-2-354img@2x.jpg 2x"
                            media="(min-width: 768px) and (max-width: 1199px)"
                   />
                    <source srcSet="./images/examples-2-370img@1x.jpg 1x,
                                    ./images/examples-2-370img@2x.jpg 2x"
                            media="(min-width: 1200px)"
                    />

                    <img loading="lazy" className="image" src="./images/examples-2-354img@1x.jpg" alt="Аватар" width="450" />
                  </picture>
                </div>
                <div className="card-content">
                  <h2 className="title">Постер New Orlean vs Golden Star</h2>
                  <p className="text">Дизайн</p>
                </div>
              </a>
            </li>
            <li className="item">
              <a href="" className="link">
                <div className="block-overlay">
                  <p className="text-overlay">
                    Технокряк это современная площадка распространения
                    коронавируса. Компании используют эту платформу для
                    цифрового шпионажа и атак на защищённые сервера конкурентов.
                  </p>
                  <picture>
                    <source srcSet="./images/examples-3-450img@1x.webp 1x,
                                                ./images/examples-3-450img@2x.webp 2x" media="(max-width: 767px)" type="image/webp"
                        />
                    <source srcSet="./images/examples-3-354img@1x.webp 1x,
                                                ./images/examples-3-354img@2x.webp 2x"
                      media="(min-width: 768px) and (max-width: 1199px)" type="image/webp"
                        />
                    <source srcSet="./images/examples-3-370img@1x.webp 1x,
                                                ./images/examples-3-370img@2x.webp 2x" media="(min-width: 1200px)" type="image/webp"
                        />

                    <source srcSet="./images/examples-3-450img@1x.jpg 1x,
                                                ./images/examples-3-450img@2x.jpg 2x" media="(max-width: 767px)"
                        />
                    <source srcSet="./images/examples-3-354img@1x.jpg 1x,
                                              ./images/examples-3-354img@2x.jpg 2x" media="(min-width: 768px) and (max-width: 1199px)"
                        />
                    <source srcSet="./images/examples-3-370img@1x.jpg 1x,
                                                ./images/examples-3-370img@2x.jpg 2x" media="(min-width: 1200px)"
                        />

                    <img loading="lazy" className="image" src="./images/examples-3-354img@1x.jpg" alt="Аватар" width="450" />
                  </picture>
                </div>
                <div className="card-content">
                  <h2 className="title">Ресторан Seafood</h2>
                  <p className="text">Приложение</p>
                </div>
              </a>
            </li>
            <li className="item">
              <a href="" className="link">
                <div className="block-overlay">
                  <p className="text-overlay">
                    Технокряк это современная площадка распространения
                    коронавируса. Компании используют эту платформу для
                    цифрового шпионажа и атак на защищённые сервера конкурентов.
                  </p>
                  <picture>
                    <source srcSet="./images/examples-4-450img@1x.webp 1x,
                                                ./images/examples-4-450img@2x.webp 2x" media="(max-width: 767px)" type="image/webp"
                        />
                    <source srcSet="./images/examples-4-354img@1x.webp 1x,
                                                ./images/examples-4-354img@2x.webp 2x"
                      media="(min-width: 768px) and (max-width: 1199px)" type="image/webp"
                        />
                    <source srcSet="./images/examples-4-370img@1x.webp 1x,
                                                ./images/examples-4-370img@2x.webp 2x" media="(min-width: 1200px)" type="image/webp"
                        />

                    <source srcSet="./images/examples-4-450img@1x.jpg 1x,
                                                ./images/examples-4-450img@2x.jpg 2x" media="(max-width: 767px)"
                        />
                    <source srcSet="./images/examples-4-354img@1x.jpg 1x,
                                              ./images/examples-4-354img@2x.jpg 2x" media="(min-width: 768px) and (max-width: 1199px)"
                        />
                    <source srcSet="./images/examples-4-370img@1x.jpg 1x,
                                                ./images/examples-4-370img@2x.jpg 2x" media="(min-width: 1200px)"
                        />

                    <img loading="lazy" className="image" src="./images/examples-4-354img@1x.jpg" alt="Аватар" width="450" />
                  </picture>
                </div>
                <div className="card-content">
                  <h2 className="title">Проект Prime</h2>
                  <p className="text">Маркетинг</p>
                </div>
              </a>
            </li>
            <li className="item">
              <a href="" className="link">
                <div className="block-overlay">
                  <p className="text-overlay">
                    Технокряк это современная площадка распространения
                    коронавируса. Компании используют эту платформу для
                    цифрового шпионажа и атак на защищённые сервера конкурентов.
                  </p>
                  <picture>
                    <source srcSet="./images/examples-5-450img@1x.webp 1x,
                                                ./images/examples-5-450img@2x.webp 2x" media="(max-width: 767px)" type="image/webp"
                        />
                    <source srcSet="./images/examples-5-354img@1x.webp 1x,
                                                ./images/examples-5-354img@2x.webp 2x"
                      media="(min-width: 768px) and (max-width: 1199px)" type="image/webp"
                        />
                    <source srcSet="./images/examples-5-370img@1x.webp 1x,
                                                ./images/examples-5-370img@2x.webp 2x" media="(min-width: 1200px)" type="image/webp"
                        />

                    <source srcSet="./images/examples-5-450img@1x.jpg 1x,
                                                ./images/examples-5-450img@2x.jpg 2x" media="(max-width: 767px)"
                        />
                    <source srcSet="./images/examples-5-354img@1x.jpg 1x,
                                              ./images/examples-5-354img@2x.jpg 2x" media="(min-width: 768px) and (max-width: 1199px)"
                        />
                    <source srcSet="./images/examples-5-370img@1x.jpg 1x,
                                                ./images/examples-5-370img@2x.jpg 2x" media="(min-width: 1200px)"
                        />

                    <img loading="lazy" className="image" src="./images/examples-5-354img@1x.jpg" alt="Аватар" width="450" />
                  </picture>
                </div>
                <div className="card-content">
                  <h2 className="title">Проект Boxes</h2>
                  <p className="text">Приложение</p>
                </div>
              </a>
            </li>
            <li className="item">
              <a href="" className="link">
                <div className="block-overlay">
                  <p className="text-overlay">
                    Технокряк это современная площадка распространения
                    коронавируса. Компании используют эту платформу для
                    цифрового шпионажа и атак на защищённые сервера конкурентов.
                  </p>
                  <picture>
                    <source srcSet="./images/examples-6-450img@1x.webp 1x,
                                                ./images/examples-6-450img@2x.webp 2x" media="(max-width: 767px)" type="image/webp"
                        />
                    <source srcSet="./images/examples-6-354img@1x.webp 1x,
                                                ./images/examples-6-354img@2x.webp 2x"
                      media="(min-width: 768px) and (max-width: 1199px)" type="image/webp"
                        />
                    <source srcSet="./images/examples-6-370img@1x.webp 1x,
                                                ./images/examples-6-370img@2x.webp 2x" media="(min-width: 1200px)" type="image/webp"
                        />

                    <source srcSet="./images/examples-6-450img@1x.jpg 1x,
                                                ./images/examples-6-450img@2x.jpg 2x" media="(max-width: 767px)"
                        />
                    <source srcSet="./images/examples-6-354img@1x.jpg 1x,
                                              ./images/examples-6-354img@2x.jpg 2x" media="(min-width: 768px) and (max-width: 1199px)"
                        />
                    <source srcSet="./images/examples-6-370img@1x.jpg 1x,
                                                ./images/examples-6-370img@2x.jpg 2x" media="(min-width: 1200px)"
                        />

                    <img loading="lazy" className="image" src="./images/examples-6-354img@1x.jpg" alt="Аватар" width="450" />
                  </picture>
                </div>
                <div className="card-content">
                  <h2 className="title">Inspiration has no Borders</h2>
                  <p className="text">Веб-сайт</p>
                </div>
              </a>
            </li>
            <li className="item">
              <a href="" className="link">
                <div className="block-overlay">
                  <p className="text-overlay">
                    Технокряк это современная площадка распространения
                    коронавируса. Компании используют эту платформу для
                    цифрового шпионажа и атак на защищённые сервера конкурентов.
                  </p>
                  <picture>
                    <source srcSet="./images/examples-7-450img@1x.webp 1x,
                                                ./images/examples-7-450img@2x.webp 2x" media="(max-width: 767px)" type="image/webp"
                        />
                    <source srcSet="./images/examples-7-354img@1x.webp 1x,
                                                ./images/examples-7-354img@2x.webp 2x"
                      media="(min-width: 768px) and (max-width: 1199px)" type="image/webp"
                        />
                    <source srcSet="./images/examples-7-370img@1x.webp 1x,
                                                ./images/examples-7-370img@2x.webp 2x" media="(min-width: 1200px)" type="image/webp"
                        />

                    <source srcSet="./images/examples-7-450img@1x.jpg 1x,
                                                ./images/examples-7-450img@2x.jpg 2x" media="(max-width: 767px)"
                        />
                    <source srcSet="./images/examples-7-354img@1x.jpg 1x,
                                              ./images/examples-7-354img@2x.jpg 2x" media="(min-width: 768px) and (max-width: 1199px)"
                        />
                    <source srcSet="./images/examples-7-370img@1x.jpg 1x,
                                                ./images/examples-7-370img@2x.jpg 2x" media="(min-width: 1200px)"
                        />

                    <img loading="lazy" className="image" src="./images/examples-7-354img@1x.jpg" alt="Аватар" width="450" />
                  </picture>
                </div>
                <div className="card-content">
                  <h2 className="title">Издание Limited Edition</h2>
                  <p className="text">Дизайн</p>
                </div>
              </a>
            </li>
            <li className="item">
              <a href="" className="link">
                <div className="block-overlay">
                  <p className="text-overlay">
                    Технокряк это современная площадка распространения
                    коронавируса. Компании используют эту платформу для
                    цифрового шпионажа и атак на защищённые сервера конкурентов.
                  </p>
                  <picture>
                    <source srcSet="./images/examples-8-450img@1x.webp 1x,
                                                ./images/examples-8-450img@2x.webp 2x" media="(max-width: 767px)" type="image/webp"
                        />
                    <source srcSet="./images/examples-8-354img@1x.webp 1x,
                                                ./images/examples-8-354img@2x.webp 2x"
                      media="(min-width: 768px) and (max-width: 1199px)" type="image/webp"
                        />
                    <source srcSet="./images/examples-8-370img@1x.webp 1x,
                                                ./images/examples-8-370img@2x.webp 2x" media="(min-width: 1200px)" type="image/webp"
                        />

                    <source srcSet="./images/examples-8-450img@1x.jpg 1x,
                                                ./images/examples-8-450img@2x.jpg 2x" media="(max-width: 767px)"
                        />
                    <source srcSet="./images/examples-8-354img@1x.jpg 1x,
                                              ./images/examples-8-354img@2x.jpg 2x" media="(min-width: 768px) and (max-width: 1199px)"
                        />
                    <source srcSet="./images/examples-8-370img@1x.jpg 1x,
                                                ./images/examples-8-370img@2x.jpg 2x" media="(min-width: 1200px)"
                        />

                    <img loading="lazy" className="image" src="./images/examples-8-354img@1x.jpg" alt="Аватар" width="450" />
                  </picture>
                </div>
                <div className="card-content">
                  <h2 className="title">Проект LAB</h2>
                  <p className="text">Маркетинг</p>
                </div>
              </a>
            </li>
            <li className="item">
              <a href="" className="link">
                <div className="block-overlay">
                  <p className="text-overlay">
                    Технокряк это современная площадка распространения
                    коронавируса. Компании используют эту платформу для
                    цифрового шпионажа и атак на защищённые сервера конкурентов.
                  </p>
                  <picture>
                    <source
                      srcSet="./images/examples-9-450img@1x.webp 1x,
                              ./images/examples-9-450img@2x.webp 2x"
                      media="(max-width: 767px)"
                      type="image/webp"
                    />
                    <source
                      srcSet="./images/examples-9-354img@1x.webp 1x,
                              ./images/examples-9-354img@2x.webp 2x"
                      media="(min-width: 768px) and (max-width: 1199px)"
                      type="image/webp"
                    />
                    <source
                      srcSet="./images/examples-9-370img@1x.webp 1x,
                              ./images/examples-9-370img@2x.webp 2x"
                      media="(min-width: 1200px)" type="image/webp"
                    />

                    <source
                      srcSet="./images/examples-9-450img@1x.jpg 1x,
                              ./images/examples-9-450img@2x.jpg 2x"
                      media="(max-width: 767px)"
                    />
                    <source
                      srcSet="./images/examples-9-354img@1x.jpg 1x,
                              ./images/examples-9-354img@2x.jpg 2x"
                      media="(min-width: 768px) and (max-width: 1199px)"
                    />
                    <source
                      srcSet="./images/examples-9-370img@1x.jpg 1x,
                              ./images/examples-9-370img@2x.jpg 2x"
                      media="(min-width: 1200px)"
                    />

                    <img loading="lazy" className="image" src="./images/examples-9-354img@1x.jpg" alt="Аватар" width="450" />
                  </picture>
                </div>
                <div className="card-content">
                  <h2 className="title">Growing Business</h2>
                  <p className="text">Приложение</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
        </MainLayout>
    )
}