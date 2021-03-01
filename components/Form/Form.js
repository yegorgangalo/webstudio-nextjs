import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form({onClose}) {
    const takeFormData = event => {
        event.preventDefault();
        const formRef = event.target;
        const formData = new FormData(formRef);
        const submittedData = {};

        formData.forEach((value, key) => {
          submittedData[key] = value;
        });

      axios.post(`${process.env.API_URL}/form`, submittedData)
        .then((res) => {
          onClose();
          toast("Your info have been sent");
        })
        .catch(err => toast(err.message))
    };

    return (
      <>
        <h2 className="section-title">Оставьте свои данные, мы вам перезвоним</h2>

        <form className="modal-form" autoComplete="on" onSubmit={takeFormData}>

          <label className="form-field">
            <span className="form-text">Имя</span>
            <span className="form__input-wrapper">
              <input className="form-input" type="text" name="name" pattern="^[a-zA-ZА-Яа-яЁё\s]+$" required />
              <svg className="form-icon">
                <use href="./images/sprite.svg#modal-form-1-name" />
              </svg>
            </span>
          </label>

          <label className="form-field">
            <span className="form-text">Телефон</span>
            <span className="form__input-wrapper">
              <input className="form-input" type="tel" name="tel" pattern="^380[0-9]{9}(\s*)?$" required />
              <svg className="form-icon">
                <use href="./images/sprite.svg#modal-form-2-phone" />
              </svg>
            </span>
          </label>

          <label className="form-field">
            <span className="form-text">Почта</span>
            <span className="form__input-wrapper">
              <input className="form-input" type="email" name="email" pattern="^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$"
                required />
              <svg className="form-icon">
                <use href="./images/sprite.svg#modal-form-3-email" />
              </svg>
            </span>
          </label>

          <label className="form-field">
            <span className="form-text">Комментарий</span>
            <textarea
              className="form-textarea"
              name="message"
              placeholder="Введите текст"
              rows="7"
            ></textarea>
          </label>

          <span className="form-checkbox" data-checkbox-label>
            <input
              className="form-checkbox__input visually-hidden"
              type="checkbox"
              name="checkbox"
              tabIndex="-1"
              data-checkbox-input
            />
            <svg className="checkbox-icon" tabIndex="0" data-checkbox-icon>
              <use href="./images/sprite.svg#modal-checkbox-icon" />
            </svg>
            <span className="form__text-checkbox">Соглашаюсь с рассылкой и принимаю <a className="checkbox__text-link" href="#!">Условия договора</a>
            </span>
          </span>

          <button type="submit" className="button--primary">Отправить</button>
        </form>
      </>
    )
}