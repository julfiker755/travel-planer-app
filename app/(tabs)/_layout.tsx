import React from 'react'
import { Tabs } from 'expo-router'

const TabLayout = () => {
    return (
        <Tabs screenOptions={{ headerShown:false }}>
            <Tabs.Screen name="trip" />
            <Tabs.Screen name="discover" />
            <Tabs.Screen name="profile" />
        </Tabs>
    )
}

export default TabLayout