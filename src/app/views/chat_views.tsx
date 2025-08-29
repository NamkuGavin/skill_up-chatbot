"use client";

import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { 
  PlusIcon, 
  MagnifyingGlassIcon, 
  SparklesIcon,
  MicrophoneIcon,
  PaperAirplaneIcon,
  PhotoIcon,
  ChatBubbleLeftRightIcon,
  EllipsisHorizontalIcon,
  AcademicCapIcon,
  DocumentTextIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import ReactMarkdown from 'react-markdown';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  category: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, category }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
    
    {/* Bagian icon + category di tengah */}
    <div className="flex flex-col items-center text-center mb-3">
      {icon}
      <h3 className="text-lg font-semibold text-gray-900 mt-2">{category}</h3>
    </div>

    {/* Deskripsi tetap rata kiri */}
    <p className="text-gray-600 text-sm leading-relaxed">{title}</p>
    <p className="text-gray-500 text-xs mt-1">{description}</p>
  </div>
);


// 🔹 Rotating Text
const RotatingText: React.FC = () => {
  const messages = [
    "Level up your career potential",
    "Keep growing your skills",
    "Discover more career opportunities"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = messages[index % messages.length];
    let speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        if (text === current) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(current.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, messages]);

  return (
    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-6 h-6">
      <SparklesIcon className="w-4 h-4" />
      <span>{text}</span>
      <span className="animate-pulse">|</span>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = "auto";
      const lineHeight = 24;
      const maxHeight = lineHeight * 10;
      textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + "px";
      textarea.style.overflowY = textarea.scrollHeight > maxHeight ? "auto" : "hidden";
    }
  }, [inputValue]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const callGeminiAPI = async (message: string) => {
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      
      return data.message || 'No response';
    } catch (err) {
      return 'Error contacting Gemini API';
    } finally {
      setLoading(false);
    }
  };

  const handleSend = async () => {
    if (inputValue.trim()) {
      const userMessage = inputValue.trim();
      setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);
      setInputValue('');
      const botReply = await callGeminiAPI(userMessage);
      setMessages((prev) => [...prev, { role: 'bot', text: botReply }]);
    }
  };

  const features = [
    {
      icon: (
        <div className="w-12 h-12 border border-gray-500 rounded-xl flex items-center justify-center mb-4">
          <AcademicCapIcon className="w-6 h-6 text-orange-500" />
        </div>
      ),
      title: "Discover in-demand skills for your target industry and get personalized learning paths",
      category: "First Steps",
      description: ""
    },
    {
      icon: (
        <div className="w-12 h-12 border border-gray-500 rounded-xl flex items-center justify-center mb-4">
          <DocumentTextIcon className="w-6 h-6 text-blue-600" />
        </div>
      ),
      title: "Get expert tips for creating compelling CVs and cover letters that stand out",
      category: "Career Boost",
      description: ""
    },
    {
      icon: (
        <div className="w-12 h-12 border border-gray-500 rounded-xl flex items-center justify-center mb-4">
          <ChartBarIcon className="w-6 h-6 text-green-600" />
        </div>
      ),
      title: "Explore career opportunities and industry insights to advance your professional growth",
      category: "Growth",
      description: ""
    }
  ];

  const actionButtons = [
    { icon: <SparklesIcon className="w-5 h-5" />, label: "Career Insights" },
    { icon: <PhotoIcon className="w-5 h-5" />, label: "Build Resume" },
    { icon: <MagnifyingGlassIcon className="w-5 h-5" />, label: "Job Search" },
    { icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />, label: "Interview Preparation" },
    { icon: <EllipsisHorizontalIcon className="w-5 h-5" />, label: "More Tools" }
  ];

  return (
    <>
      <Head>
        <title>Daily Nixtio - AI Assistant</title>
        <meta name="description" content="AI Assistant Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center space-x-2">
            <SparklesIcon className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-600">Powered by Gemini</span>
          </div>
          <h1 className="text-lg font-semibold text-gray-900">SKILL-UP</h1>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Hi User, Ready to<br />
              Level Up Your Career?
            </h2>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          {/* Bottom Section */}
          <div className="text-center mb-8">
            {/* 🔹 Rotating Text */}
            <RotatingText />

            {/* Chat Messages (pindahkan ke atas input area) */}
            <div className="mb-6">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`my-2 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl max-w-xs ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white text-left'
                        : 'bg-gray-200 text-gray-800 text-left'
                    }`}
                  >
                    {msg.role === 'bot' ? (
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="px-4 py-2 rounded-2xl bg-gray-200 text-gray-500 animate-pulse max-w-xs">
                    Gemini is typing...
                  </div>
                </div>
              )}
            </div>

            {/* Input Area (pindahkan ke bawah chat messages) */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-6">
              <textarea
                ref={textareaRef}
                placeholder='Example: "Explain quantum computing in simple terms"'
                className="w-full text-gray-600 placeholder-gray-400 bg-transparent outline-none resize-none h-12"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />

              <div className="flex items-center justify-between mt-2">
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <PlusIcon className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <MicrophoneIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleSend}
                    className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
                  >
                    <PaperAirplaneIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center flex-wrap gap-3">
              {actionButtons.map((button, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity flex items-center space-x-2"
                >
                  {button.icon}
                  <span>{button.label}</span>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-center space-x-2 text-xs text-gray-400 mt-8">
              <SparklesIcon className="w-4 h-4" />
              <span>Powered by Gemini v2.5</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;