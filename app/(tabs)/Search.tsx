import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Image, Linking, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Projects data
const projectsData = {
  "projects": [
    {
      "id": 1,
      "title": "E-Commerce Platform",
      "description": "Full-stack e-commerce solution using MERN Stack",
      "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
      "technologies": ["React", "Node.js", "MongoDB", "Express"],
      "type": "Full Stack",
      "github": "https://github.com/karkeeg/ecommerce-using-FullStack",
      "live": "https://ecommerce-demo.netlify.app"
    },
    {
      "id": 2,
      "title": "MyPortfolio",
      "description": "Modern portfolio website built with React",
      "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop",
      "technologies": ["React", "JavaScript", "CSS"],
      "type": "Frontend",
      "github": "https://github.com/karkeeg/MyPortfolio",
      "live": "https://karkibibek.netlify.app"
    },
    {
      "id": 3,
      "title": "KarkeeAirlines",
      "description": "Modern, responsive airline booking application",
      "image": "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=400&fit=crop",
      "technologies": ["ReactJS", "JavaScript", "CSS"],
      "type": "Frontend",
      "github": "https://github.com/karkeeg/KarkeeAirlines",
      "live": "https://karkeeairlines.netlify.app"
    },
    {
      "id": 4,
      "title": "CEC Website",
      "description": "Website for CEC organization",
      "image": "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=400&fit=crop",
      "technologies": ["JavaScript", "HTML", "CSS"],
      "type": "Frontend",
      "github": "https://github.com/karkeeg/CEC",
      "live": "https://cec-website.netlify.app"
    },
    {
      "id": 5,
      "title": "Bus Reservation",
      "description": "Bus reservation system built with PHP",
      "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop",
      "technologies": ["PHP", "MySQL", "HTML", "CSS"],
      "type": "Full Stack",
      "github": "https://github.com/karkeeg/bus-reservation",
      "live": "https://bus-reservation-demo.netlify.app"
    },
    {
      "id": 6,
      "title": "React Native App",
      "description": "Photography portfolio mobile application",
      "image": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop",
      "technologies": ["React Native", "TypeScript", "Expo"],
      "type": "Mobile",
      "github": "https://github.com/karkeeg/reactNative",
      "live": "https://expo.dev"
    }
  ]
};

const projectTypes = ["All", "Frontend", "Backend", "Full Stack", "Mobile"];
const technologies = ["All", "React", "Node.js", "MongoDB", "Express", "JavaScript", "PHP", "React Native", "TypeScript"];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedTech, setSelectedTech] = useState("All");

  const filteredProjects = projectsData.projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "All" || project.type === selectedType;
    const matchesTech = selectedTech === "All" || project.technologies.includes(selectedTech);
    return matchesSearch && matchesType && matchesTech;
  });

  const renderProject = ({ item }: { item: any }) => (
    <TouchableOpacity className="w-full mb-4">
      <View className="bg-gray-800 rounded-2xl overflow-hidden">
        <Image source={{ uri: item.image }} className="w-full h-48" />
        <View className="p-4">
          <View className="flex-row justify-between items-start mb-2">
            <Text className="text-white font-semibold text-lg flex-1 mr-2">{item.title}</Text>
            <View className="bg-blue-600 rounded-full px-3 py-1">
              <Text className="text-white text-xs font-semibold">{item.type}</Text>
            </View>
          </View>
          <Text className="text-gray-400 text-sm mb-3" numberOfLines={2}>
            {item.description}
          </Text>
          <View className="flex-row flex-wrap mb-3">
            {item.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
              <View key={techIndex} className="bg-gray-700 rounded-full px-3 py-1 mr-2 mb-1">
                <Text className="text-gray-300 text-xs">{tech}</Text>
              </View>
            ))}
            {item.technologies.length > 3 && (
              <View className="bg-gray-700 rounded-full px-3 py-1 mr-2 mb-1">
                <Text className="text-gray-300 text-xs">+{item.technologies.length - 3}</Text>
              </View>
            )}
          </View>
          <View className="flex-row space-x-3">
            <TouchableOpacity 
              className="flex-1 bg-blue-600 rounded-lg py-2 items-center"
              onPress={() => Linking.openURL(item.live)}
            >
              <Text className="text-white font-semibold text-sm">View Live</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className="flex-1 bg-gray-700 rounded-lg py-2 items-center"
              onPress={() => Linking.openURL(item.github)}
            >
              <Text className="text-white font-semibold text-sm">GitHub</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      {/* Header */}
      <View className="px-6 pt-4 pb-6">
        <Text className="text-3xl font-bold text-white mb-4">Projects</Text>
        
        {/* Search Bar */}
        <View className="flex-row items-center bg-gray-800 rounded-2xl px-4 py-3 mb-6">
          <Ionicons name="search" size={20} color="#9ca3af" />
          <TextInput
            placeholder="Search projects..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            className="flex-1 ml-3 text-white"
            placeholderTextColor="#9ca3af"
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <Ionicons name="close-circle" size={20} color="#9ca3af" />
            </TouchableOpacity>
          )}
        </View>

        {/* Project Type Filters */}
        <Text className="text-white font-semibold mb-3">Project Type</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
          {projectTypes.map((type) => (
            <TouchableOpacity
              key={type}
              onPress={() => setSelectedType(type)}
              className={`mr-3 px-4 py-2 rounded-full ${
                selectedType === type
                  ? "bg-blue-600"
                  : "bg-gray-800"
              }`}
            >
              <Text
                className={`font-medium ${
                  selectedType === type ? "text-white" : "text-gray-400"
                }`}
              >
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Technology Filters */}
        <Text className="text-white font-semibold mb-3">Technologies</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
          {technologies.map((tech) => (
            <TouchableOpacity
              key={tech}
              onPress={() => setSelectedTech(tech)}
              className={`mr-3 px-4 py-2 rounded-full ${
                selectedTech === tech
                  ? "bg-green-600"
                  : "bg-gray-800"
              }`}
            >
              <Text
                className={`font-medium ${
                  selectedTech === tech ? "text-white" : "text-gray-400"
                }`}
              >
                {tech}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Projects Grid */}
      <FlatList
        data={filteredProjects}
        renderItem={renderProject}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center py-20">
            <Ionicons name="code-slash-outline" size={64} color="#6b7280" />
            <Text className="text-gray-400 text-lg mt-4">No projects found</Text>
            <Text className="text-gray-500 text-sm">Try adjusting your search or filters</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Search;
