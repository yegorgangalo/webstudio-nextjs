export default function ExampleItem({ example}) {
    const { title, text, type, picture: { webp, jpg } } = example;
    return (
        <li className="item">
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
                          height="350"
                        />
                      </picture>
                    </div>
                    <div className="card-content">
                      <h2 className="title">{title}</h2>
                      <p className="text">{type}</p>
                    </div>
                  </a>
                </li>
    )
}