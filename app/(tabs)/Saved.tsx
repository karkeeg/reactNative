import { Ionicons } from "@expo/vector-icons";
import { useState } from 'react';
import { FlatList, Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Qualifications = () => {
  const [activeTab, setActiveTab] = useState('certifications');

  const certifications = [
    
    {
      id: 1,
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2024",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=200&fit=crop",
      credential: "Evolve IT Hub",
      status: "Active"
    },
    {
      id: 2,
      name: "Node.js Backend Development",
      issuer: "OpenJS Foundation",
      date: "2024",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=200&fit=crop",
      credential: "Evolve IT Hub",
      status: "Active"
    },
    {
      id: 3,
      name: "MongoDB Database Administrator",
      issuer: "MongoDB University",
      date: "2024",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=200&h=200&fit=crop",
      credential: "Evolve IT Hub",
      status: "Active"
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Computer Application",
      university: "Tribhuvan University",
      college: "Asian College of Higher Studies(ACHS)",
      year: "2018 - 2021",
      location: "Kathmandu, Nepal",
      gpa: "3.4/4.0",
      description: "Specialized in Software Engineering and Database Management Systems"
    },
    {
      id: 2,
      degree: "Higher Secondary Education",
      university: "National Examination Board",
      college: "Kathmandu Bernhardt College",
      year: "2020 - 2022",
      location: "Kathmandu, Nepal",
      gpa: "3.6/4.0",
      description: "Science Stream with Computer Science as major subject"
    },
    {
      id: 3,
      degree: "Secondary Education",
      university: "National Examination Board",
      school: "Sainik Awasiya Mahavidhyalaya",
      year: "2014 - 2020",
      location: "Kathmandu, Nepal",
      gpa: "3.6/4.0",
      description: "Science Stream with Computer Science as major subject"
    }
  ];

  const personalExperience = [
    {
      id: 1,
      title: "Full Stack Developer ",
      organization: "Evolve IT Hub",
      duration: "2025 May - Present",
      description: "Active contributor to various open source projects including React, Node.js, and community libraries",
      achievements: ["10+ repositories", "200+ commits", "50+ pull requests merged"]
    },
    {
      id: 2,
      title: "Frontend Developer",  
      organization: "Evolve IT Hub",
      duration: "2025 Jan - 2025 May",
      description: "Organizing tech meetups, workshops, and mentoring junior developers",
      achievements: ["20+ events organized", "500+ developers mentored", "Community growth 200%"]
    },
    {
      id: 3,
      title: "UI/UX Designer Training",
      organization: "Asian College of Higher Studies(ACHS)",
      duration: "2023 Feb - 2023 March",
      description: "Building custom solutions for clients across various industries",
      achievements: ["1 projects completed", "98% client satisfaction", "Diverse tech stack experience"]
    }
  ];

  const socialMedia = [
    {
      id: 1,
      name: "GitHub",
      username: "@karkeeg",
      url: "https://github.com/karkeeg",
      icon: "logo-github",
      color: "#333",
      followers: "2 followers"
    },
    {
      id: 2,
      name: "LinkedIn",
      username: "bibek-karki-b41703272",
      url: "https://linkedin.com/in/bibek-karki-b41703272",
      icon: "logo-linkedin",
      color: "#0077B5",
      followers: "LinkedIn"
    },
    {
      id: 3,
      name: "Facebook",
      username: "bibek.karki.90475",
      url: "https://facebook.com/bibek.karki.90475",
      icon: "logo-facebook",
      color: "#1877F2",
      followers: "Facebook"
    },
    {
      id: 4,
      name: "Instagram",
      username: "bibek_karki8",
      url: "https://instagram.com/bibek_karki8",
      icon: "logo-instagram",
      color: "#E4405F",
      followers: "Instagram"
    },
    {
      id: 5,
      name: "Portfolio",
      username: "karkibibek.netlify.app",
      url: "https://karkibibek.netlify.app",
      icon: "globe-outline",
      color: "#6366F1",
      followers: "Portfolio"
    }
  ];

  const renderCertification = ({ item }: { item: any }) => (
    <TouchableOpacity className="w-full mb-4">
      <View className="bg-gray-800 rounded-2xl p-4">
        <View className="flex-row items-center mb-3">
          <Image source={{ uri: item.image }} className="w-16 h-16 rounded-xl mr-4" />
          <View className="flex-1">
            <Text className="text-white font-semibold text-lg">{item.name}</Text>
            <Text className="text-blue-400 text-sm">{item.issuer}</Text>
            <Text className="text-gray-400 text-xs">{item.date}</Text>
          </View>
          <View className="bg-green-600 rounded-full px-3 py-1">
            <Text className="text-white text-xs font-semibold">{item.status}</Text>
          </View>
        </View>
        <Text className="text-gray-300 text-sm">Credential: {item.credential}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderEducation = ({ item }: { item: any }) => (
    <TouchableOpacity className="w-full mb-4">
      <View className="bg-gray-800 rounded-2xl p-4">
        <View className="flex-row justify-between items-start mb-2">
          <Text className="text-white font-semibold text-lg">{item.degree}</Text>
          <Text className="text-blue-400 text-sm">{item.gpa}</Text>
        </View>
        <Text className="text-blue-400 font-medium mb-1">{item.university}</Text>
        <Text className="text-gray-400 text-sm mb-1">{item.college || item.school}</Text>
        <Text className="text-gray-400 text-sm mb-2">{item.year} • {item.location}</Text>
        <Text className="text-gray-300 text-sm">{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderExperience = ({ item }: { item: any }) => (
    <TouchableOpacity className="w-full mb-4">
      <View className="bg-gray-800 rounded-2xl p-4">
        <View className="flex-row justify-between items-start mb-2">
          <Text className="text-white font-semibold text-lg">{item.title}</Text>
          <Text className="text-gray-400 text-sm">{item.duration}</Text>
        </View>
        <Text className="text-blue-400 font-medium mb-2">{item.organization}</Text>
        <Text className="text-gray-300 text-sm mb-3">{item.description}</Text>
        <View>
          {item.achievements.map((achievement: string, index: number) => (
            <View key={index} className="flex-row items-center mb-1">
              <Ionicons name="checkmark-circle" size={16} color="#10B981" />
              <Text className="text-gray-300 text-sm ml-2">{achievement}</Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderSocialMedia = ({ item }: { item: any }) => (
    <TouchableOpacity 
      className="w-[48%] mb-4"
      onPress={() => Linking.openURL(item.url)}
    >
      <View className="bg-gray-800 rounded-2xl p-4 items-center">
        <View 
          className="w-12 h-12 rounded-full items-center justify-center mb-3"
          style={{ backgroundColor: `${item.color}20` }}
        >
          <Ionicons name={item.icon as any} size={24} color={item.color} />
        </View>
        <Text className="text-white font-semibold text-center mb-1">{item.name}</Text>
        <Text className="text-gray-400 text-xs text-center mb-2">{item.username}</Text>
        <Text className="text-blue-400 text-xs text-center">{item.followers}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      {/* Header */}
      <View className="px-6 pt-4 pb-6">
        <Text className="text-3xl font-bold text-white mb-6">Qualifications</Text>
        
        {/* Tab Buttons */}
        <View className="flex-row bg-gray-800 rounded-2xl p-1 mb-6">
          <TouchableOpacity
            onPress={() => setActiveTab('certifications')}
            className={`flex-1 py-3 rounded-xl ${
              activeTab === 'certifications' ? 'bg-gray-700' : ''
            }`}
          >
            <Text
              className={`text-center font-semibold ${
                activeTab === 'certifications' ? 'text-white' : 'text-gray-400'
              }`}
            >
              Certifications
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab('education')}
            className={`flex-1 py-3 rounded-xl ${
              activeTab === 'education' ? 'bg-gray-700' : ''
            }`}
          >
            <Text
              className={`text-center font-semibold ${
                activeTab === 'education' ? 'text-white' : 'text-gray-400'
              }`}
            >
              Education
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab('experience')}
            className={`flex-1 py-3 rounded-xl ${
              activeTab === 'experience' ? 'bg-gray-700' : ''
            }`}
          >
            <Text
              className={`text-center font-semibold ${
                activeTab === 'experience' ? 'text-white' : 'text-gray-400'
              }`}
            >
              Experience
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab('social')}
            className={`flex-1 py-3 rounded-xl ${
              activeTab === 'social' ? 'bg-gray-700' : ''
            }`}
          >
            <Text
              className={`text-center font-semibold ${
                activeTab === 'social' ? 'text-white' : 'text-gray-400'
              }`}
            >
              Social
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      {activeTab === 'certifications' && (
        <View className="px-6">
          <Text className="text-lg font-semibold text-white mb-4">Professional Certifications</Text>
          <FlatList
            data={certifications}
            renderItem={renderCertification}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <View className="flex-1 items-center justify-center py-20">
                <Ionicons name="ribbon-outline" size={64} color="#6b7280" />
                <Text className="text-gray-400 text-lg mt-4">No certifications yet</Text>
              </View>
            }
          />
          <View className="h-20" />
        </View>
      )}

      {activeTab === 'education' && (
        <View className="px-6">
          <Text className="text-lg font-semibold text-white mb-4">Academic Background</Text>
          <FlatList
            data={education}
            renderItem={renderEducation}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <View className="flex-1 items-center justify-center py-20">
                <Ionicons name="school-outline" size={64} color="#6b7280" />
                <Text className="text-gray-400 text-lg mt-4">No education details</Text>
              </View>
            }
          />
          <View className="h-20" />
        </View>
      )}

      {activeTab === 'experience' && (
        <View className="px-6">
          <Text className="text-lg font-semibold text-white mb-4">Personal Experience</Text>
          <FlatList
            data={personalExperience}
            renderItem={renderExperience}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <View className="flex-1 items-center justify-center py-20">
                <Ionicons name="briefcase-outline" size={64} color="#6b7280" />
                <Text className="text-gray-400 text-lg mt-4">No experience details</Text>
              </View>
            }
          />
          <View className="h-20" />
        </View>
      )}

      {activeTab === 'social' && (
        <View className="px-6">
          <Text className="text-lg font-semibold text-white mb-4">Social Media & Links</Text>
          <View className="flex-row flex-wrap justify-between">
            {socialMedia.map((social) => renderSocialMedia({ item: social }))}
          </View>
          <View className="h-20" />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Qualifications;