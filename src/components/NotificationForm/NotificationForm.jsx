import { useForm } from 'react-hook-form';
import { useQuery, useMutation } from '@apollo/client';

import Button from 'components/Button/Button';
import Toggle from 'components/Toggle/Toggle';

import {
  PHOTOGRAPHER_NOTIFICATION_SETTINGS_GET,
  PHOTOGRAPHER_NOTIFICATION_SETTINGS_UPDATE,
} from 'query/photographer';

import './notification-form.scss';

function NotificationForm({ onSubmitHandler }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const [updateSettings] = useMutation(
    PHOTOGRAPHER_NOTIFICATION_SETTINGS_UPDATE
  );

  const { loading, error, data } = useQuery(
    PHOTOGRAPHER_NOTIFICATION_SETTINGS_GET
  );

  if (loading) return <p>Loading...</p>;
  console.dir(data);

  const onSubmit = async (formData) => {
    console.log(formData);
    const { imageRequests, jobRequests } = formData;

    const user = await updateSettings({
      variables: {
        briefings: imageRequests,
        showrooms: jobRequests,
      },
    });

    console.log(user);
    // const {
    //   data: {
    //     login: { success, errors, data },
    //   },
    // } = user;

    onSubmitHandler();
  };

  return (
    <div className="notification-form">
      <h2 className="notification-form__title">Notification Settings</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="notification-form__item">
          <Toggle title="Job Requests" register={register('jobRequests')} />
        </div>
        <div className="notification-form__item">
          <Toggle title="Image Requests" register={register('imageRequests')} />
        </div>

        <div className="notification-form__button">
          <Button type="primary" text="Confirm" btnType="submit" size="big" />
        </div>
      </form>
    </div>
  );
}

export default NotificationForm;
