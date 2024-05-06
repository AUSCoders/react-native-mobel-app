import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack} from "expo-router"
import React from 'react'

const RootLayot = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{HeadersShown: false}}/>
    </Stack>
  )
}

export default RootLayot

const styles = StyleSheet.create({})