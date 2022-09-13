import { useForm, Controller } from "react-hook-form";
import { useQuery } from "@apollo/client";

import Button from "components/Button/Button";
import Dropdown from "components/Dropdown/Dropdown";
import Input from "components/Input/Input";
import { COUNTRIES } from "query/common";
import createCountriesList from "helpers/createCountriesList";

import "./about-form.scss";

const dropdownRoleList = [
  { value: "photographer", label: "Photographer" },
  { value: "model", label: "Model" },
  { value: "makeUpArtist", label: "MakeUp Artist" },
  { value: "stylist", label: "Stylist" },
  { value: "illustrator", label: "Illustrator" },
];

function AboutForm({ onSubmitHandler }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onChange",
  });

  const watchFields = watch(["shortDescriptionTitle", "aboutMe"]);

  const { loading, error, data } = useQuery(COUNTRIES);

  let dataForDropdown;
  if (!loading) {
    const {
      countries: { data: countriesArr },
    } = data;

    dataForDropdown = createCountriesList(countriesArr);
  }

  const onSubmit = (formData) => {
    console.log(formData);
    onSubmitHandler();
  };

  return (
    <div className="about-form">
      <h2 className="about-form__title">About me</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="about-form__item">
          <Input type="text" label="Name" register={register("name")} />
        </div>
        <div className="about-form__item">
          <Input type="text" label="Surname" register={register("surname")} />
        </div>
        <div className="about-form__item">
          <Controller
            control={control}
            name="role"
            // rules={{
            //   required: "Country is required",
            // }}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <Dropdown
                  placeholder="Select your role"
                  list={dropdownRoleList}
                  value={value}
                  onChange={(name, value) => onChange(value)}
                  label="Role"
                  error={error && error.message}
                />
              );
            }}
          />
        </div>
        <div className="about-form__item">
          <Input
            type="text"
            label="Website"
            placeholder="Link"
            register={register("website", {
              pattern: {
                value:
                  /^((http|https|ftp):\/\/)?(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)/i,
                message: "URL is not valid",
              },
            })}
            error={errors.website?.message}
          />
          <span className="about-form__description">
            Your home page, blog, or company site.
          </span>
        </div>
        <div className="about-form__item">
          <div className="about-form__double-item">
            <div className="about-form__double-item-half1">
              <Controller
                control={control}
                name="countryId"
                // rules={{
                //   required: "Country is required",
                // }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  return (
                    <Dropdown
                      placeholder="Select Country"
                      list={dataForDropdown}
                      label="Home Base"
                      value={value}
                      onChange={(name, value) => onChange(value)}
                      error={error && error.message}
                    />
                  );
                }}
              />
            </div>
            <div className="about-form__double-item-half2">
              <Input
                type="text"
                placeholder="Town"
                register={register("town")}
              />
            </div>
          </div>
        </div>
        <div className="about-form__item">
          <Input
            register={register("shortDescriptionTitle")}
            type="text"
            label="Short Description / Title"
            placeholder="Ex. Aspring Fashion Photographer"
            symbolsLimit={100 - watchFields[0]?.length}
            isTextarea
            rowsNumber={2}
            maxLength={100}
          />
        </div>
        <div className="about-form__item">
          <Input
            register={register("aboutMe")}
            type="text"
            label="Description / About me"
            placeholder="Ex. I am based in ... working since ..."
            symbolsLimit={500 - watchFields[1]?.length}
            isTextarea
            rowsNumber={4}
            maxLength={500}
          />
          <span className="about-form__description">
            Brief description for your profile. URLs are hyperlinked.
          </span>
        </div>
        <div className="about-form__button">
          <Button
            type="primary"
            text="Update Information"
            btnType="submit"
            size="big"
          />
        </div>
      </form>
    </div>
  );
}

export default AboutForm;
