import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().min(10).required(),
  email: Yup.string().email().required(),
  card: Yup.string().required(),
  security: Yup.string().required(),
  flag: Yup.string().required(),
});