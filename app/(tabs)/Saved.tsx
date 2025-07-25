import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const saved = () => {
  return (
   <SafeAreaView className="flex-1 bg-[#B1AB86]">
         <View>
           <Text>Saved</Text>
         </View>
       </SafeAreaView>
  )
}

export default saved