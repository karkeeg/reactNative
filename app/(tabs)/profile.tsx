import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, Image, Linking, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
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

  const developer = {
    name: "Bibek Karki",
    title: "Full-Stack Web Developer",
    bio: "Full-Stack Web Developer | MERN Stack. Building web apps with purpose and performance. Currently working at Evolve IT Hub, specializing in React, Node.js, and modern web technologies. Always eager to learn new technologies and solve complex problems.",
    avatar: require("../../assets/images/139469612.jpeg"),
    location: "Kathmandu",
    website: "karkibibek.netlify.app",
    email: "hello@bibekkarki.com",
    github: "github.com/karkeeg",
    linkedin: "linkedin.com/in/bibek-karki-b41703272",
    facebook: "facebook.com/bibek.karki.90475",
    instagram: "instagram.com/bibek_karki8",
    stats: {
      projects: 14,
      experience: "1+ year",
      technologies: 12,
      clients: 5
    },
    experience: [
      {
        id: 1,
        company: "Evolve IT Hub",
        position: "Full Stack Developer",
        duration: "May 2025 - Present",
        description: "Leading development of enterprise applications using React, Node.js, and modern web technologies."
      },
      {
        id: 2,
        company: "Evolve IT Hub",
        position: "Frontend Developer",
        duration: "Jan 2025 - May 2025",
        description: "Built responsive user interfaces and implemented modern UI/UX designs using React and related technologies."
      },
      {
        id: 3,
        company: "Asian College of Higher Studies (ACHS)",
        position: "UI/UX Designer Training",
        duration: "Feb 2023 - March 2023",
        description: "Completed intensive training program in UI/UX design principles and modern design tools."
      }
    ],
    education: {
      degree: "Bachelor of Computer Application",
      university: "Tribhuvan University",
      college: "Asian College of Higher Studies (ACHS)",
      year: "2018 - 2021",
      location: "Kathmandu, Nepal",
      gpa: "3.4/4.0"
    },
    recentProjects: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=200&fit=crop",
        title: "E-Commerce Platform",
        github: "github.com/karkeeg/ecommerce-using-FullStack"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=200&fit=crop",
        title: "MyPortfolio",
        github: "github.com/karkeeg/MyPortfolio"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=200&h=200&fit=crop",
        title: "KarkeeAirlines",
        github: "github.com/karkeeg/KarkeeAirlines"
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=200&h=200&fit=crop",
        title: "CEC Website",
        github: "github.com/karkeeg/CEC"
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=200&fit=crop",
        title: "Bus Reservation",
        github: "github.com/karkeeg/bus-reservation"
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=200&fit=crop",
        title: "React Native App",
        github: "github.com/karkeeg/reactNative"
      },
    ],
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-6 pt-4 pb-6">
          <View className="flex-row items-center justify-between mb-6">
            <Text className="text-3xl font-bold text-white">Profile</Text>
            <TouchableOpacity className="w-10 h-10 bg-gray-800 rounded-full items-center justify-center">
              <Ionicons name="settings-outline" size={20} color="#9ca3af" />
            </TouchableOpacity>
          </View>

          {/* Profile Info */}
          <View className="items-center mb-6">
            <View className="relative">
              <Image
                source={{ uri: developer.avatar }}
                className="w-24 h-24 rounded-full mb-4 border-4 border-gray-700"
              />
              <View className="absolute bottom-4 right-4 w-6 h-6 bg-green-400 rounded-full border-2 border-gray-900"></View>
            </View>
            <Text className="text-2xl font-bold text-white mb-2">{developer.name}</Text>
            <Text className="text-lg text-blue-400 font-semibold mb-1">{developer.title}</Text>
            <Text className="text-gray-300 mb-4">{developer.location}</Text>
            
            {/* Stats */}
            <View className="flex-row space-x-8 mb-6">
              <View className="items-center">
                <Text className="text-xl font-bold text-white">{developer.stats.projects}</Text>
                <Text className="text-gray-400 text-sm">Projects</Text>
              </View>
              <View className="items-center">
                <Text className="text-xl font-bold text-white">{developer.stats.experience}</Text>
                <Text className="text-gray-400 text-sm">Experience</Text>
              </View>
              <View className="items-center">
                <Text className="text-xl font-bold text-white">{developer.stats.technologies}</Text>
                <Text className="text-gray-400 text-sm">Technologies</Text>
              </View>
              <View className="items-center">
                <Text className="text-xl font-bold text-white">{developer.stats.clients}</Text>
                <Text className="text-gray-400 text-sm">Clients</Text>
              </View>
            </View>

            {/* Bio */}
            <View className="bg-gray-800 rounded-2xl p-4 w-full mb-6">
              <Text className="text-gray-300 leading-6">{developer.bio}</Text>
            </View>

            {/* Action Buttons */}
            <View className="flex-row space-x-3 w-full">
              <TouchableOpacity className="flex-1 bg-blue-600 rounded-2xl py-3 items-center">
                <Text className="text-white font-semibold">Download CV</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                className="flex-1 bg-gray-700 rounded-2xl py-3 items-center"
                onPress={() => setContactModalVisible(true)}
              >
                <Text className="text-white font-semibold">Contact</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Experience */}
        <View className="px-6 mb-6">
          <Text className="text-xl font-bold text-white mb-4">Work Experience</Text>
          {developer.experience.map((exp) => (
            <View key={exp.id} className="bg-gray-800 rounded-2xl p-4 mb-4">
              <View className="flex-row justify-between items-start mb-2">
                <Text className="text-white font-semibold text-lg">{exp.position}</Text>
                <Text className="text-gray-400 text-sm">{exp.duration}</Text>
              </View>
              <Text className="text-blue-400 font-medium mb-2">{exp.company}</Text>
              <Text className="text-gray-300 text-sm">{exp.description}</Text>
            </View>
          ))}
        </View>

        {/* Education */}
        <View className="px-6 mb-6">
          <Text className="text-xl font-bold text-white mb-4">Education</Text>
          <View className="bg-gray-800 rounded-2xl p-4">
            <Text className="text-white font-semibold text-lg mb-2">{developer.education.degree}</Text>
            <Text className="text-blue-400 font-medium mb-1">{developer.education.university}</Text>
            <Text className="text-gray-400 text-sm mb-1">{developer.education.college}</Text>
            <Text className="text-gray-400 text-sm mb-1">{developer.education.year} • {developer.education.location}</Text>
            <Text className="text-gray-400 text-sm">GPA: {developer.education.gpa}</Text>
          </View>
        </View>

        {/* Contact Info */}
        <View className="px-6 mb-6">
          <Text className="text-xl font-bold text-white mb-4">Contact Information</Text>
          <View className="bg-gray-800 rounded-2xl p-4">
            <TouchableOpacity 
              className="flex-row items-center mb-3"
              onPress={() => Linking.openURL(`mailto:${developer.email}`)}
            >
              <Ionicons name="mail-outline" size={20} color="#9ca3af" />
              <Text className="text-gray-300 ml-3">{developer.email}</Text>
            </TouchableOpacity>
            <View className="flex-row items-center mb-3">
              <Ionicons name="location-outline" size={20} color="#9ca3af" />
              <Text className="text-gray-300 ml-3">{developer.location}</Text>
            </View>
            <TouchableOpacity 
              className="flex-row items-center mb-3"
              onPress={() => Linking.openURL(`https://${developer.website}`)}
            >
              <Ionicons name="globe-outline" size={20} color="#9ca3af" />
              <Text className="text-gray-300 ml-3">{developer.website}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className="flex-row items-center mb-3"
              onPress={() => Linking.openURL(`https://${developer.github}`)}
            >
              <Ionicons name="logo-github" size={20} color="#9ca3af" />
              <Text className="text-gray-300 ml-3">{developer.github}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className="flex-row items-center mb-3"
              onPress={() => Linking.openURL(`https://${developer.linkedin}`)}
            >
              <Ionicons name="logo-linkedin" size={20} color="#9ca3af" />
              <Text className="text-gray-300 ml-3">{developer.linkedin}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className="flex-row items-center mb-3"
              onPress={() => Linking.openURL(`https://${developer.facebook}`)}
            >
              <Ionicons name="logo-facebook" size={20} color="#9ca3af" />
              <Text className="text-gray-300 ml-3">{developer.facebook}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className="flex-row items-center"
              onPress={() => Linking.openURL(`https://${developer.instagram}`)}
            >
              <Ionicons name="logo-instagram" size={20} color="#9ca3af" />
              <Text className="text-gray-300 ml-3">{developer.instagram}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Projects */}
        <View className="px-6 mb-8">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-xl font-bold text-white">Recent Projects</Text>
            <TouchableOpacity>
              <Text className="text-gray-300 font-semibold">View All</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row flex-wrap justify-between">
            {developer.recentProjects.map((project) => (
              <TouchableOpacity key={project.id} className="w-[48%] mb-4">
                <View className="relative">
                  <Image source={{ uri: project.image }} className="w-full h-32 rounded-xl" />
                </View>
                <Text className="text-white text-sm mt-2">{project.title}</Text>
                <Text className="text-gray-400 text-xs">{project.github}</Text>
              </TouchableOpacity>
            ))}
          </View>
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
};

export default Profile;
