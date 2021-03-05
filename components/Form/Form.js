import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { Checkbox } from "@material-ui/core";

export default function Form({ onClose }) {
    const { register, handleSubmit, errors, reset } = useForm();

    const formSubmit = (data) => {
      axios.post(`${process.env.API_URL}/form`, data)
        .then((res) => {
          reset();
          onClose();
          toast("Your info have been sent");
        })
        .catch(err => toast(err.message))
    }

    return (
      <>
        <h2 className="section-title">Оставьте свои данные, мы вам перезвоним</h2>

        <form className="modal-form" autoComplete="on" onSubmit={handleSubmit(formSubmit)}>

          <label className="form-field">
            <span className="form-text">Имя{errors.name && ". Длина от 3 до 30 символов. Только буквы"}</span>
            <span className="form__input-wrapper">
              <input className="form-input" type="text" name="name" ref={register({ pattern: /^[a-zA-ZА-Яа-яЁё\s]+$/i, minLength: 3, maxLength: 30 })} required/>
              <svg className="form-icon">
                <use href="./images/sprite.svg#modal-form-1-name" />
              </svg>
            </span>
          </label>

          <label className="form-field">
            <span className="form-text">Телефон{errors.tel && ". Пример: 380XXXXXXXXX"}</span>
            <span className="form__input-wrapper">
              <input className="form-input" type="tel" name="tel" ref={register({ pattern: /^380[0-9]{9}(\s*)?$/ })} required />
              <svg className="form-icon">
                <use href="./images/sprite.svg#modal-form-2-phone" />
              </svg>
            </span>
          </label>

          <label className="form-field">
            <span className="form-text">Почта{errors.email && ". Пример: email@mail.com"}</span>
            <span className="form__input-wrapper">
              <input className="form-input" type="email" name="email" ref={register({ pattern: /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/ })} required/>
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
              ref={register}
            ></textarea>
          </label>

          <label className="form-checkbox">
            <Checkbox
                inputProps={{ 'aria-label': 'checkbox' }}
                color="default"
                required
            />
            <span className="form__text-checkbox">Соглашаюсь с рассылкой и принимаю <a className="checkbox__text-link" href="#!">Условия договора</a>
            {errors.checkbox && ". Нужно принять условия договора!"}
            </span>
          </label>

          <button type="submit" className="button--primary">Отправить</button>
        </form>
      </>
    )
}