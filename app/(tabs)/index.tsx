import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, Image, Linking, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Developer portfolio data
const portfolioData = {
  "hero": {
    "name": "Bibek Karki",
    "title": "Full-Stack Web Developer",
    "subtitle": "MERN Stack | Building web apps with purpose and performance",
    "avatar": require("../../assets/images/139469612.jpeg"),
    "location": "Kathmandu",
    "description": "Full-Stack Web Developer | MERN Stack. Building web apps with purpose and performance. Currently working at Evolve IT Hub, building scalable applications and creating meaningful digital experiences."
  },
  "skills": [
    {
      "name": "Frontend",
      "icon": "logo-react",
      "technologies": ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      "color": "#61DAFB"
    },
    {
      "name": "Backend",
      "icon": "server",
      "technologies": ["Node.js", "Express", "MongoDB", "PostgreSQL"],
      "color": "#68A063"
    },
    {
      "name": "Mobile",
      "icon": "phone-portrait",
      "technologies": ["React Native", "Expo", "NativeWind"],
      "color": "#007AFF"
    },
    {
      "name": "Tools",
      "icon": "construct",
      "technologies": ["Git", "Docker", "AWS", "Vercel"],
      "color": "#FF6B35"
    }
  ],
  "featuredProjects": [
    {
      "id": 1,
      "title": "E-Commerce Platform",
      "description": "Full-stack e-commerce solution with MERN Stack",
      "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      "technologies": ["React", "Node.js", "MongoDB", "Express"],
      "github": "https://github.com/karkeeg/ecommerce-using-FullStack",
      "live": "https://ecommerce-demo.netlify.app"
    },
    {
      "id": 2,
      "title": "MyPortfolio",
      "description": "Modern portfolio website built with React",
      "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      "technologies": ["React", "JavaScript", "CSS"],
      "github": "https://github.com/karkeeg/MyPortfolio",
      "live": "https://karkibibek.netlify.app"
    },
    {
      "id": 3,
      "title": "KarkeeAirlines",
      "description": "Modern, responsive airline booking application",
      "image": "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      "technologies": ["ReactJS", "JavaScript", "CSS"],
      "github": "https://github.com/karkeeg/KarkeeAirlines",
      "live": "https://karkeeairlines.netlify.app"
    },
    {
      "id": 4,
      "title": "CEC Website",
      "description": "Website for CEC organization",
      "image": "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop",
      "technologies": ["JavaScript", "HTML", "CSS"],
      "github": "https://github.com/karkeeg/CEC",
      "live": "https://cec-website.netlify.app"
    }
  ],
  "stats": {
    "projects": 14,
    "experience": "1+ year",
    "technologies": 12,
    "satisfaction": "98%"
  }
};

export default function Index() {
  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSendEmail = () => {
    const { name, email, subject, message } = contactForm;
    
    if (!name || !email || !subject || !message) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const emailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:hello@bibekkarki.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    Linking.openURL(mailtoUrl);
    setContactModalVisible(false);
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-6 pt-4 pb-6">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-3xl font-bold text-white">
                Bibek Karki
              </Text>
              <Text className="text-xl text-gray-300">Developer</Text>
            </View>
            <TouchableOpacity 
              className="w-10 h-10 bg-gray-800 rounded-full items-center justify-center"
              onPress={() => setContactModalVisible(true)}
            >
              <Ionicons name="mail-outline" size={20} color="#9ca3af" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Hero Section */}
        <View className="px-6 mb-8">
          <View className="bg-gray-800 rounded-3xl p-6 mb-6 relative overflow-hidden">
            {/* Background Image */}
            <Image 
              source={{ uri: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop" }}
              className="absolute inset-0 w-full h-full opacity-20"
            />
            <View className="relative z-10">
              <View className="flex-row items-center mb-4">
                <Image 
                  source={{ uri: portfolioData.hero.avatar }} 
                  className="w-20 h-20 rounded-full mr-4 border-4 border-gray-700"
                />
                <View className="flex-1">
                  <Text className="text-2xl font-bold text-white">{portfolioData.hero.name}</Text>
                  <Text className="text-lg text-blue-400 font-semibold">{portfolioData.hero.title}</Text>
                  <Text className="text-gray-400 text-sm">{portfolioData.hero.location}</Text>
                </View>
              </View>
              <Text className="text-gray-300 leading-6">{portfolioData.hero.description}</Text>
            </View>
          </View>

          {/* Stats */}
          <View className="flex-row justify-between bg-gray-800 rounded-2xl p-4">
            <View className="items-center">
              <Text className="text-2xl font-bold text-white">{portfolioData.stats.projects}</Text>
              <Text className="text-gray-400 text-sm">Projects</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-white">{portfolioData.stats.experience}</Text>
              <Text className="text-gray-400 text-sm">Experience</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-white">{portfolioData.stats.technologies}</Text>
              <Text className="text-gray-400 text-sm">Technologies</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-white">{portfolioData.stats.satisfaction}</Text>
              <Text className="text-gray-400 text-sm">Satisfaction</Text>
            </View>
          </View>
        </View>

        {/* Skills Section */}
        <View className="px-6 mb-8">
          <Text className="text-2xl font-bold text-white mb-4">Skills & Technologies</Text>
          <View className="flex-row flex-wrap justify-between">
            {portfolioData.skills.map((skill, index) => (
              <TouchableOpacity
                key={index}
                className="w-[48%] bg-gray-800 rounded-2xl p-6 mb-4 items-center"
              >
                <View 
                  className="w-16 h-16 rounded-2xl items-center justify-center mb-4"
                  style={{ backgroundColor: `${skill.color}20` }}
                >
                  <Ionicons name={skill.icon as any} size={28} color={skill.color} />
                </View>
                <Text className="font-semibold text-white text-center mb-2">{skill.name}</Text>
                <View className="flex-row flex-wrap justify-center">
                  {skill.technologies.map((tech, techIndex) => (
                    <Text key={techIndex} className="text-gray-400 text-xs mr-1">
                      {tech}{techIndex < skill.technologies.length - 1 ? ',' : ''}
                    </Text>
                  ))}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Featured Projects */}
        <View className="px-6 mb-8">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-2xl font-bold text-white">Featured Projects</Text>
            <TouchableOpacity>
              <Text className="text-gray-300 font-semibold">View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={{ paddingHorizontal: 0 }}
          >
            {portfolioData.featuredProjects.map((project, index) => (
              <TouchableOpacity 
                key={project.id}
                className="w-80 bg-gray-800 rounded-2xl overflow-hidden mr-4"
                style={{ marginRight: index === portfolioData.featuredProjects.length - 1 ? 0 : 16 }}
              >
                <Image source={{ uri: project.image }} className="w-full h-48" />
                <View className="p-4">
                  <Text className="text-white font-semibold text-lg mb-2">{project.title}</Text>
                  <Text className="text-gray-400 text-sm mb-3">{project.description}</Text>
                  <View className="flex-row flex-wrap mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <View key={techIndex} className="bg-gray-700 rounded-full px-3 py-1 mr-2 mb-1">
                        <Text className="text-gray-300 text-xs">{tech}</Text>
                      </View>
                    ))}
                  </View>
                  <View className="flex-row space-x-3">
                    <TouchableOpacity 
                      className="flex-1 bg-blue-600 rounded-lg py-2 items-center"
                      onPress={() => Linking.openURL(project.live)}
                    >
                      <Text className="text-white font-semibold text-sm">View Live</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      className="flex-1 bg-gray-700 rounded-lg py-2 items-center"
                      onPress={() => Linking.openURL(project.github)}
                    >
                      <Text className="text-white font-semibold text-sm">GitHub</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Bottom spacing */}
        <View className="h-20" />
      </ScrollView>

      {/* Contact Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={contactModalVisible}
        onRequestClose={() => setContactModalVisible(false)}
      >
        <View className="flex-1 bg-black bg-opacity-50 justify-center items-center px-6">
          <View className="bg-gray-800 rounded-3xl p-6 w-full max-w-md">
            <View className="flex-row items-center justify-between mb-6">
              <Text className="text-2xl font-bold text-white">Contact Me</Text>
              <TouchableOpacity onPress={() => setContactModalVisible(false)}>
                <Ionicons name="close" size={24} color="#9ca3af" />
              </TouchableOpacity>
            </View>

            <TextInput
              placeholder="Your Name"
              value={contactForm.name}
              onChangeText={(text) => setContactForm({...contactForm, name: text})}
              className="bg-gray-700 rounded-xl px-4 py-3 text-white mb-4"
              placeholderTextColor="#9ca3af"
            />

            <TextInput
              placeholder="Your Email"
              value={contactForm.email}
              onChangeText={(text) => setContactForm({...contactForm, email: text})}
              className="bg-gray-700 rounded-xl px-4 py-3 text-white mb-4"
              placeholderTextColor="#9ca3af"
              keyboardType="email-address"
            />

            <TextInput
              placeholder="Subject"
              value={contactForm.subject}
              onChangeText={(text) => setContactForm({...contactForm, subject: text})}
              className="bg-gray-700 rounded-xl px-4 py-3 text-white mb-4"
              placeholderTextColor="#9ca3af"
            />

            <TextInput
              placeholder="Your Message"
              value={contactForm.message}
              onChangeText={(text) => setContactForm({...contactForm, message: text})}
              className="bg-gray-700 rounded-xl px-4 py-3 text-white mb-6"
              placeholderTextColor="#9ca3af"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />

            <TouchableOpacity
              className="bg-blue-600 rounded-xl py-3 items-center"
              onPress={handleSendEmail}
            >
              <Text className="text-white font-semibold text-lg">Send Email</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
