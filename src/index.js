import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';

const AppFlow = createStackNavigator({
    SignIn,
    SignUp,
});

const Trioplaza = createStackNavigator(
    {
        Main: {
            screen: AppFlow,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    },
);

export default createAppContainer(Trioplaza);
