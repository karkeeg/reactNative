import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get('window');

const PhotoDetails = () => {
  const { id } = useLocalSearchParams();
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Sample photo data - in a real app, you'd fetch this based on the ID
  const photo = {
    id: id,
    title: "Sunset at Golden Gate",
    description: "Captured during golden hour at the iconic Golden Gate Bridge. The warm light creates a magical atmosphere that transforms this architectural marvel into a work of art.",
    category: "Landscape",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    photographer: {
      name: "Karkee Photography",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      location: "San Francisco, CA",
    },
    stats: {
      likes: 1247,
      views: 8920,
      shares: 156,
    },
    camera: {
      model: "Canon EOS R5",
      lens: "RF 24-70mm f/2.8L",
      settings: "f/8, 1/125s, ISO 100",
    },
    tags: ["landscape", "sunset", "golden gate", "san francisco", "architecture"],
    comments: [
      {
        id: 1,
        user: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
        comment: "Absolutely stunning! The colors are incredible.",
        time: "2 hours ago",
      },
      {
        id: 2,
        user: "Mike Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        comment: "Perfect timing with the golden hour light!",
        time: "5 hours ago",
      },
    ],
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image */}
        <View className="relative">
          <Image 
            source={{ uri: photo.image }} 
            className="w-full h-96"
            resizeMode="cover"
          />
          
          {/* Header Overlay */}
          <LinearGradient
            colors={['rgba(0,0,0,0.6)', 'transparent']}
            className="absolute top-0 left-0 right-0 h-20"
          />
          
          {/* Back Button */}
          <TouchableOpacity 
            onPress={() => router.back()}
            className="absolute top-12 left-4 w-10 h-10 bg-black bg-opacity-50 rounded-full items-center justify-center"
          >
            <Ionicons name="arrow-back" size={20} color="white" />
          </TouchableOpacity>

          {/* Action Buttons */}
          <View className="absolute top-12 right-4 space-y-3">
            <TouchableOpacity 
              onPress={() => setIsLiked(!isLiked)}
              className="w-10 h-10 bg-black bg-opacity-50 rounded-full items-center justify-center"
            >
              <Ionicons 
                name={isLiked ? "heart" : "heart-outline"} 
                size={20} 
                color={isLiked ? "#ef4444" : "white"} 
              />
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setIsSaved(!isSaved)}
              className="w-10 h-10 bg-black bg-opacity-50 rounded-full items-center justify-center"
            >
              <Ionicons 
                name={isSaved ? "bookmark" : "bookmark-outline"} 
                size={20} 
                color={isSaved ? "#3b82f6" : "white"} 
              />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 bg-black bg-opacity-50 rounded-full items-center justify-center">
              <Ionicons name="share-outline" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Content */}
        <View className="bg-white rounded-t-3xl -mt-6 px-6 pt-6">
          {/* Photo Info */}
          <View className="mb-6">
            <Text className="text-2xl font-bold text-gray-900 mb-2">{photo.title}</Text>
            <Text className="text-gray-600 leading-6 mb-4">{photo.description}</Text>
            
            {/* Tags */}
            <View className="flex-row flex-wrap mb-4">
              {photo.tags.map((tag, index) => (
                <TouchableOpacity
                  key={index}
                  className="bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2"
                >
                  <Text className="text-gray-700 text-sm">#{tag}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Stats */}
            <View className="flex-row space-x-6 mb-6">
              <View className="flex-row items-center">
                <Ionicons name="heart" size={16} color="#ef4444" />
                <Text className="text-gray-700 ml-1">{photo.stats.likes}</Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons name="eye" size={16} color="#6b7280" />
                <Text className="text-gray-700 ml-1">{photo.stats.views}</Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons name="share" size={16} color="#6b7280" />
                <Text className="text-gray-700 ml-1">{photo.stats.shares}</Text>
              </View>
            </View>
          </View>

          {/* Photographer Info */}
          <View className="bg-gray-50 rounded-2xl p-4 mb-6">
            <View className="flex-row items-center mb-3">
              <Image 
                source={{ uri: photo.photographer.avatar }} 
                className="w-12 h-12 rounded-full mr-3"
              />
              <View className="flex-1">
                <Text className="font-semibold text-gray-900">{photo.photographer.name}</Text>
                <Text className="text-gray-600 text-sm">{photo.photographer.location}</Text>
              </View>
              <TouchableOpacity className="bg-blue-600 rounded-full px-4 py-2">
                <Text className="text-white font-semibold text-sm">Follow</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Camera Settings */}
          <View className="mb-6">
            <Text className="text-lg font-bold text-gray-900 mb-3">Camera Settings</Text>
            <View className="bg-gray-50 rounded-2xl p-4">
              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-600">Camera</Text>
                <Text className="text-gray-900 font-medium">{photo.camera.model}</Text>
              </View>
              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-600">Lens</Text>
                <Text className="text-gray-900 font-medium">{photo.camera.lens}</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-600">Settings</Text>
                <Text className="text-gray-900 font-medium">{photo.camera.settings}</Text>
              </View>
            </View>
          </View>

          {/* Comments */}
          <View className="mb-6">
            <Text className="text-lg font-bold text-gray-900 mb-3">Comments</Text>
            {photo.comments.map((comment) => (
              <View key={comment.id} className="flex-row mb-4">
                <Image 
                  source={{ uri: comment.avatar }} 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <View className="flex-1">
                  <View className="flex-row items-center mb-1">
                    <Text className="font-semibold text-gray-900 mr-2">{comment.user}</Text>
                    <Text className="text-gray-500 text-sm">{comment.time}</Text>
                  </View>
                  <Text className="text-gray-700">{comment.comment}</Text>
                </View>
              </View>
            ))}
            
            {/* Add Comment */}
            <View className="flex-row items-center bg-gray-50 rounded-2xl p-3">
              <Image 
                source={{ uri: photo.photographer.avatar }} 
                className="w-8 h-8 rounded-full mr-3"
              />
              <Text className="flex-1 text-gray-500">Add a comment...</Text>
              <TouchableOpacity>
                <Ionicons name="send" size={20} color="#3b82f6" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Bottom spacing */}
          <View className="h-20" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PhotoDetails;

const styles = StyleSheet.create({});
