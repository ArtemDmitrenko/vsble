import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import "./social-links-form.scss";

const socialsSchema = Joi.object({
  facebook: Joi.string().uri().empty("").messages({
    "string.url": "Invalid url",
  }),
  instagram: Joi.string().uri().empty("").messages({
    "string.url": "Invalid url",
  }),
  twitter: Joi.string().uri().empty("").messages({
    "string.url": "Invalid url",
  }),
  linkedIn: Joi.string().uri().empty("").messages({
    "string.url": "Invalid url",
  }),
  vimeo: Joi.string().uri().empty("").messages({
    "string.url": "Invalid url",
  }),
});

function SocialLinksForm({ onSubmitHandler }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(socialsSchema),
  });

  const onSubmit = (formData) => {
    console.log(formData);
    onSubmitHandler();
  };

  return (
    <div className="social-links-form">
      <h2 className="social-links-form__title">Social Links</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="social-links-form__item">
          <Input
            type="url"
            label="Facebook"
            placeholder="Account Link"
            register={register("facebook")}
            error={errors.facebook?.message}
          />
        </div>
        <div className="about-form__item">
          <Input
            type="url"
            label="Instagram"
            placeholder="Account Link"
            register={register("instagram")}
            error={errors.instagram?.message}
          />
        </div>
        <div className="about-form__item">
          <Input
            type="url"
            label="Twitter"
            placeholder="Account Link"
            register={register("twitter")}
            error={errors.twitter?.message}
          />
        </div>
        <div className="about-form__item">
          <Input
            type="url"
            label="Linked In"
            placeholder="Account Link"
            register={register("linkedIn")}
            error={errors.linkedIn?.message}
          />
        </div>
        <div className="about-form__item">
          <Input
            type="url"
            label="Vimeo"
            placeholder="Account Link"
            register={register("vimeo")}
            error={errors.vimeo?.message}
          />
        </div>
        <div className="about-form__button">
          <Button
            type="primary"
            text="Update Social Profiles"
            btnType="submit"
            size="big"
          />
        </div>
      </form>
    </div>
  );
}

export default SocialLinksForm;
