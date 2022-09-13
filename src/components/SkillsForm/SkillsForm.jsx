import { useForm, Controller } from 'react-hook-form';

import Button from 'components/Button/Button';
import Dropdown from 'components/Dropdown/Dropdown';

import './skills-form.scss';

const dropdownSkillLevelList = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'amatour', label: 'Amatour' },
  { value: 'professional', label: 'Professional' },
];

const dropdownAssetsList = [
  { value: 'own studio', label: 'Own Studio' },
  { value: 'own equipment', label: 'Own equipment' },
  { value: 'drivers license', label: 'Drivers License' },
  { value: 'own car', label: 'Own Car' },
];

const dropdownServicesList = [
  { value: 'retouch', label: 'Retouch' },
  { value: 'will travel', label: 'Will travel' },
];

const dropdownSkillsList = [
  { value: 'english language', label: 'English language' },
  { value: 'german language', label: 'German language' },
];

function SkillsForm({ requestAdditionHandler, onSubmitHandler }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    onSubmitHandler();
  };

  return (
    <div className="skills-form">
      <h2 className="skills-form__title">Skills</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="skills-form__item">
          <Controller
            control={control}
            name="skillLevel"
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <Dropdown
                  placeholder="Select Skill Level"
                  list={dropdownSkillLevelList}
                  onChange={(name, value) => {
                    onChange(value);
                  }}
                  value={value}
                  label="Skill Level"
                />
              );
            }}
          />
        </div>
        <div className="skills-form__item">
          <Controller
            control={control}
            name="assets"
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <Dropdown
                  label="Assets"
                  placeholder="Select Assets"
                  list={dropdownAssetsList}
                  onChange={(name, value) => {
                    onChange(value);
                  }}
                  isMulti
                  buttonHandler={requestAdditionHandler}
                />
              );
            }}
          />
        </div>
        <div className="skills-form__item">
          <Controller
            control={control}
            name="additionalServices"
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <Dropdown
                  list={dropdownServicesList}
                  onChange={(name, value) => {
                    onChange(value);
                  }}
                  label="Additional Services"
                  placeholder="Select Addittion Services"
                  isMulti
                  buttonHandler={requestAdditionHandler}
                />
              );
            }}
          />
        </div>
        <div className="skills-form__item">
          <Controller
            control={control}
            name="additionalSkills"
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <Dropdown
                  placeholder="Select Additional Skills"
                  list={dropdownSkillsList}
                  onChange={(name, value) => {
                    onChange(value);
                  }}
                  label="Additional Skills"
                  isMulti
                  buttonHandler={requestAdditionHandler}
                />
              );
            }}
          />
        </div>
        <div className="about-form__button">
          <Button
            type="primary"
            text="Update Skills"
            btnType="submit"
            size="big"
          />
        </div>
      </form>
    </div>
  );
}

export default SkillsForm;
