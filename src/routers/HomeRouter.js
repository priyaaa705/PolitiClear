import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import HomeBottomTab from '../components/navigation/HomeBottomTab';
import ConstituencyScreen from '../screens/ConstituencyScreen';
import TDScreen from '../screens/TDScreen';
import TDListScreen from '../screens/TDListScreen';
import LearnScreen from '../screens/LearnScreen';
import LocalScreen from '../screens/LocalScreen';
import LearnActivity from '../screens/LearnActivity';
import LearnEligibilityActivity from '../screens/LearnEligibilityActivity';

const Tab = createBottomTabNavigator();

export default function HomeRouter() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                autoHideHomeIndicator: true,
            }}
            tabBar={HomeBottomTab}
        >
            {/* <Tab.Screen name="TD" component={TDScreen} initialParams={{td: "Chris-Andrews.D.2007-06-14"}}/> */}
            {/* <Tab.Screen name="Constituency" component={ConstituencyScreen} initialParams={{constituency: "Donegal"}}/> */}
            {/* <Tab.Screen name="LearnActivity" component={LearnActivity} initialParams={{activity: "basic_questions"}} /> */}

            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Constituency" component={ConstituencyScreen} />
            <Tab.Screen name="TD" component={TDScreen} />

            <Tab.Screen name="TDList" component={TDListScreen} />
            <Tab.Screen name="LearnActivity" component={LearnActivity}/>
            <Tab.Screen name="LearnElibilityActivity" component={LearnEligibilityActivity}/>
            <Tab.Screen name="Learn" component={LearnScreen} />
            <Tab.Screen name="Local" component={LocalScreen} />

        </Tab.Navigator>
    );
}