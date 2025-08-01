import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { Animated, Image, Linking, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Projects data - All GitHub repositories
const projectsData = {
  "projects": [
    {
      "id": 1,
      "title": "React Native Portfolio",
      "description": "Photography portfolio mobile application built with React Native and Expo",
      "image": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop",
      "technologies": ["React Native", "TypeScript", "Expo", "NativeWind"],
      "type": "Mobile",
      "github": "https://github.com/karkeeg/reactNative",
      "live": "https://expo.dev"
    },
    {
      "id": 2,
      "title": "E-Commerce FullStack",
      "description": "Full-stack e-commerce solution using MERN Stack with complete CRUD operations",
      "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
      "technologies": ["React", "Node.js", "MongoDB", "Express"],
      "type": "Full Stack",
      "github": "https://github.com/karkeeg/ecommerce-using-FullStack",
      "live": "https://ecommerce-demo.netlify.app"
    },
    {
      "id": 3,
      "title": "NextWave AI Website",
      "description": "Modern AI company website with responsive design and animations",
      "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop",
      "technologies": ["React", "JavaScript", "CSS", "Framer Motion"],
      "type": "Frontend",
      "github": "https://github.com/karkeeg/nextwave-ai",
      "live": "https://nextwave-ai.netlify.app"
    },
    {
      "id": 4,
      "title": "MyPortfolio",
      "description": "Personal portfolio website showcasing projects and skills",
      "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop",
      "technologies": ["React", "JavaScript", "CSS"],
      "type": "Frontend",
      "github": "https://github.com/karkeeg/MyPortfolio",
      "live": "https://karkibibek.netlify.app"
    },
    {
      "id": 5,
      "title": "KarkeeAirlines",
      "description": "Modern, responsive airline booking application with clean UI",
      "image": "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=400&fit=crop",
      "technologies": ["ReactJS", "JavaScript", "CSS"],
      "type": "Frontend",
      "github": "https://github.com/karkeeg/KarkeeAirlines",
      "live": "https://karkeeairlines.netlify.app"
    },
    {
      "id": 6,
      "title": "CEC Website",
      "description": "Official website for CEC organization with modern design",
      "image": "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=400&fit=crop",
      "technologies": ["JavaScript", "HTML", "CSS"],
      "type": "Frontend",
      "github": "https://github.com/karkeeg/CEC",
      "live": "https://cec-website.netlify.app"
    },
    {
      "id": 7,
      "title": "Bus Reservation System",
      "description": "Complete bus reservation system with admin panel",
      "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop",
      "technologies": ["PHP", "MySQL", "HTML", "CSS"],
      "type": "Full Stack",
      "github": "https://github.com/karkeeg/bus-reservation",
      "live": "https://bus-reservation-demo.netlify.app"
    },
    {
      "id": 8,
      "title": "Task Management App",
      "description": "Simple task management application with local storage",
      "image": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=400&fit=crop",
      "technologies": ["JavaScript", "HTML", "CSS"],
      "type": "Frontend",
      "github": "https://github.com/karkeeg/task-management",
      "live": "https://task-management-demo.netlify.app"
    },
    {
      "id": 9,
      "title": "Weather App",
      "description": "Weather application with real-time API integration",
      "image": "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=400&fit=crop",
      "technologies": ["JavaScript", "HTML", "CSS", "API"],
      "type": "Frontend",
      "github": "https://github.com/karkeeg/weather-app",
      "live": "https://weather-app-demo.netlify.app"
    },
    {
      "id": 10,
      "title": "Calculator App",
      "description": "Modern calculator with scientific functions",
      "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
      "technologies": ["JavaScript", "HTML", "CSS"],
      "type": "Frontend",
      "github": "https://github.com/karkeeg/calculator",
      "live": "https://calculator-demo.netlify.app"
    },
    {
      "id": 11,
      "title": "Quiz App",
      "description": "Interactive quiz application with score tracking",
      "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop",
      "technologies": ["JavaScript", "HTML", "CSS"],
      "type": "Frontend",
      "github": "https://github.com/karkeeg/quiz-app",
      "live": "https://quiz-app-demo.netlify.app"
    },
    {
      "id": 12,
      "title": "Todo List",
      "description": "Simple todo list application with CRUD operations",
      "image": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=400&fit=crop",
      "technologies": ["JavaScript", "HTML", "CSS"],
      "type": "Frontend",
      "github": "https://github.com/karkeeg/todo-list",
      "live": "https://todo-list-demo.netlify.app"
    },
    {
      "id": 13,
      "title": "Password Generator",
      "description": "Secure password generator with customizable options",
      "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
      "technologies": ["JavaScript", "HTML", "CSS"],
      "type": "Frontend",
      "github": "https://github.com/karkeeg/password-generator",
      "live": "https://password-generator-demo.netlify.app"
    },
    {
      "id": 14,
      "title": "Currency Converter",
      "description": "Real-time currency converter with API integration",
      "image": "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=400&fit=crop",
      "technologies": ["JavaScript", "HTML", "CSS", "API"],
      "type": "Frontend",
      "github": "https://github.com/karkeeg/currency-converter",
      "live": "https://currency-converter-demo.netlify.app"
    }
  ]
};

const projectTypes = ["All", "Frontend", "Full Stack", "Mobile"];
const technologies = ["All", "React", "Node.js", "MongoDB", "Express", "JavaScript", "PHP", "React Native", "TypeScript", "HTML", "CSS", "Expo", "NativeWind", "Framer Motion", "API"];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedTech, setSelectedTech] = useState("All");

  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const filteredProjects = projectsData.projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "All" || project.type === selectedType;
    const matchesTech = selectedTech === "All" || project.technologies.includes(selectedTech);
    return matchesSearch && matchesType && matchesTech;
  });

  const renderProject = ({ item }: { item: any }) => (
    <TouchableOpacity 
      className="w-full"
      onPress={() => Linking.openURL(item.github)}
    >
      <View className="bg-gray-800 rounded-2xl overflow-hidden">
        <Image source={{ uri: String(item.image) }} className="w-full h-56" />
        <View className="p-3">
          <View className="flex-row justify-between items-start mb-2">
            <Text className="text-white font-semibold text-sm flex-1 mr-2" numberOfLines={1}>
              {item.title}
            </Text>
            <View className="bg-blue-600 rounded-full px-2 py-1">
              <Text className="text-white text-xs font-semibold">{item.type}</Text>
            </View>
          </View>
          <Text className="text-gray-400 text-xs mb-2" numberOfLines={2}>
            {item.description}
          </Text>
          <View className="flex-row flex-wrap mb-2">
            {item.technologies.slice(0, 2).map((tech: string, techIndex: number) => (
              <View key={techIndex} className="bg-gray-700 rounded-full px-2 py-1 mr-1 mb-1">
                <Text className="text-gray-300 text-xs">{tech}</Text>
              </View>
            ))}
            {item.technologies.length > 2 && (
              <View className="bg-gray-700 rounded-full px-2 py-1 mr-1 mb-1">
                <Text className="text-gray-300 text-xs">+{item.technologies.length - 2}</Text>
              </View>
            )}
          </View>
          <View className="flex-row space-x-2">
            <TouchableOpacity 
              className="flex-1 bg-blue-600 rounded-lg py-1 items-center"
              onPress={() => Linking.openURL(item.live)}
            >
              <Text className="text-white font-semibold text-xs">Live</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className="flex-1 bg-gray-700 rounded-lg py-1 items-center"
              onPress={() => Linking.openURL(item.github)}
            >
              <Text className="text-white font-semibold text-xs">GitHub</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <Animated.View
        style={{
          flex: 1,
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        }}
      >
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
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <View className="px-6">
          {filteredProjects.length === 0 ? (
            <View className="flex-1 items-center justify-center py-20">
              <Ionicons name="code-slash-outline" size={64} color="#6b7280" />
              <Text className="text-gray-400 text-lg mt-4">No projects found</Text>
              <Text className="text-gray-500 text-sm">Try adjusting your search or filters</Text>
            </View>
          ) : (
            <View>
              {/* Row 1: First 3 projects */}
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                className="mb-4"
                contentContainerStyle={{ paddingHorizontal: 0 }}
              >
                {filteredProjects.slice(0, 3).map((project) => (
                  <View key={project.id} className="w-56 mr-4">
                    {renderProject({ item: project })}
                  </View>
                ))}
              </ScrollView>

              {/* Row 2: Next 3 projects */}
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                className="mb-4"
                contentContainerStyle={{ paddingHorizontal: 0 }}
              >
                {filteredProjects.slice(3, 6).map((project) => (
                  <View key={project.id} className="w-56 mr-4">
                    {renderProject({ item: project })}
                  </View>
                ))}
              </ScrollView>

              {/* Row 3: Remaining projects */}
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                className="mb-4"
                contentContainerStyle={{ paddingHorizontal: 0 }}
              >
                {filteredProjects.slice(6).map((project) => (
                  <View key={project.id} className="w-56 mr-4">
                    {renderProject({ item: project })}
                  </View>
                ))}
              </ScrollView>
            </View>
          )}
          <View className="h-20" />
        </View>
      </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Search;
