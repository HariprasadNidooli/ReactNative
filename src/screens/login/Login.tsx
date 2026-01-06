import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Formik } from 'formik';
import { loginSchema } from '../../schemas/login/loginSchema';
import { loginStyle } from './loginStyle';
import { useAppDispatch } from '../../hooks/app/appHook';
import {
  authenticateUserAction,
  createSessionAction,
  getAccountDetailsAction,
  guestSessionAction,
  validateWithLoginAction,
} from '../../store/actions/authActions';
import { ValidateWithLoginRequest } from '../../types/authType';

interface LoginFormValues {
  username: string;
  password: string;
}
export default function Login() {
  const initialValues: LoginFormValues = {
    username: '',
    password: '',
  };
  const dispatch = useAppDispatch();

  const handleLogin = async (values: LoginFormValues) => {
    const { success, request_token: token } = await dispatch(
      authenticateUserAction(),
    ).unwrap();
    if (success) {
      const credentials: ValidateWithLoginRequest = {
        username: values.username,
        password: values.password,
        request_token: token,
      };
      const { request_token } = await dispatch(
        validateWithLoginAction(credentials),
      ).unwrap();
      if (request_token) {
        dispatch(createSessionAction(request_token));
        dispatch(getAccountDetailsAction());
      } else {
        Alert.alert('Login failed', 'Invalid username or password');
      }
    }
  };
  return (
    <View style={loginStyle.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <View style={loginStyle.formContainer}>
            <TextInput
              style={loginStyle.input}
              placeholder="Username"
              onChangeText={handleChange('username')}
              value={values.username}
            />
            {errors.username && (
              <Text style={loginStyle.errorText}>{errors.username}</Text>
            )}
            <TextInput
              style={loginStyle.input}
              placeholder="Password"
              onChangeText={handleChange('password')}
              value={values.password}
              secureTextEntry
            />
            {errors.password && (
              <Text style={loginStyle.errorText}>{errors.password}</Text>
            )}
            <Pressable style={loginStyle.button} onPress={handleSubmit}>
              <Text style={loginStyle.buttonText}>Login</Text>
            </Pressable>
          </View>
        )}
      </Formik>
      <TouchableOpacity
        onPress={() => {
          dispatch(guestSessionAction());
        }}
      >
        <Text style={loginStyle.guestText}>Continue as guest</Text>
      </TouchableOpacity>
    </View>
  );
}
