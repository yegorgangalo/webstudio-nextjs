import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";

export default function Footer() {
  const { register, handleSubmit, errors, reset } = useForm();

  const formSubmit = (data) => {
      axios.post(`${process.env.API_URL}/mailing`, data)
        .then((res) => {
          reset();
          toast("Your email have been added");
        })
        .catch(err => toast(err.message))
  }

    return (
        <footer className="footer" id="footer">
              <div className="container footer-list">

                  <section className="item">
                    <h2 className="visually-hidden">Контакты</h2>
                    <Link href={`/`}>
                        <a lang="en-us" className="logo link inverse"
                        >Web<span className="logo-studio">Studio</span>
                        </a>
                    </Link>
                    <address className="address">
                      <a href="https://goo.gl/maps/X6AFB3z5vsqxh6cL6" target="_blank" rel="noopener noreferrer" className="link">г. Киев, пр-т Леси Украинки, 26</a>
                      <a href="mailto:info@devstudio.com" lang="en-us" className="link">info@devstudio.com</a>
                      <a href="tel:+380961111111" className="link">+380 96 111 11 11</a>
                    </address>
                  </section>

                  <section className="item">
                    <h2 className="title">Присоединяйтесь</h2>
                    <ul className="social-list list">
                      <li className="social-item">
                        <a href="" className="social-link link" aria-label="ссылка на соцсеть" target="_blank" rel="noopener noreferrer">
                          <svg className="social-icon">
                            <use href="./images/sprite.svg#command-card-instagram-1" />
                          </svg>
                        </a>
                      </li>
                      <li className="social-item">
                        <a href="" className="social-link link" aria-label="ссылка на соцсеть" target="_blank" rel="noopener noreferrer">
                          <svg className="social-icon">
                            <use href="./images/sprite.svg#command-card-twitter-2" />
                          </svg>
                        </a>
                      </li>
                      <li className="social-item">
                        <a href="" className="social-link link" aria-label="ссылка на соцсеть" target="_blank" rel="noopener noreferrer">
                          <svg className="social-icon">
                            <use href="./images/sprite.svg#command-card-facebook-3" />
                          </svg>
                        </a>
                      </li>
                      <li className="social-item">
                        <a href="" className="social-link link" aria-label="ссылка на соцсеть" target="_blank" rel="noopener noreferrer">
                          <svg className="social-icon">
                            <use href="./images/sprite.svg#command-card-linkedin-4" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </section>

                  <section className="item">
                    <h2 className="title">Подпишитесь на рассылку</h2>
                    <form className="footer-form" onSubmit={handleSubmit(formSubmit)}>
                      <input className="footer-input" type="email" name="email" placeholder="E-mail" ref={register({ pattern: /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/ })} required />
                      {errors.email && "wrong email"}
                      <button className="button--primary" type="submit">
                        Подписаться
                        <svg className="button-icon">
                          <use href="./images/sprite.svg#button-send-icon" />
                        </svg>
                      </button>
                    </form>
                  </section>

              </div>
            </footer>
    )
}