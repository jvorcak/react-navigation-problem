import React from 'react'
import { Platform, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('Event', {eventId: 'test'})
        }}>
          <Text>Go to event 'test'</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class EventNavigator extends React.Component {
  static navigationOptions = {
    title: 'Event',
  }

  render() {
    return (
      <ScrollView>
        <Text>{JSON.stringify(this.props)}</Text>
      </ScrollView>
    )
  }
}

const SimpleApp = StackNavigator({
  Home: {
    screen: HomeScreen,
    path: 'home'
  },
  Event: {
    screen: TabNavigator({
      Main: { screen: EventNavigator, path: 'main' },
    }),
    path: 'event/:eventId'
  }
})

// on Android, the URI prefix typically contains a host in addition to scheme
const prefix = Platform.OS == 'android' ? 'myapp://myapp/' : 'myapp://'

const MainApp = () => <SimpleApp uriPrefix={prefix} />

export default MainApp

