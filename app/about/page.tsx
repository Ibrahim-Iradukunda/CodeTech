"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    ArrowLeft,
    Code,
    BookOpen,
    Trophy,
    Users,
    TrendingUp,
    Star,
    Brain,
    Zap,
    Target,
    CheckCircle,
    Award,
    Lightbulb,
    Globe,
    Shield,
    Clock,
    BarChart3,
    BookMarked,
    GraduationCap,
    Rocket
} from "lucide-react"

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState("overview")

    const features = [
        {
            icon: <Brain className="w-6 h-6" />,
            title: "Structured Learning Paths",
            description: "Carefully designed levels that build upon each other for comprehensive understanding of technical concepts."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Instant Feedback",
            description: "Get immediate results with detailed explanations and additional resources for failed questions."
        },
        {
            icon: <Trophy className="w-6 h-6" />,
            title: "Competitive Learning",
            description: "Track your progress on leaderboards and compete with peers to stay motivated."
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Goal Setting",
            description: "Set personal learning goals and track your progress towards achieving them."
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Progress Analytics",
            description: "Detailed insights into your learning patterns, strengths, and areas for improvement."
        },
        {
            icon: <BookMarked className="w-6 h-6" />,
            title: "Comprehensive Subjects",
            description: "Covering Python, Machine Learning, JavaScript, and more with expert-curated content."
        }
    ]

    const benefits = [
        {
            icon: <GraduationCap className="w-6 h-6" />,
            title: "Enhanced Theoretical Knowledge",
            description: "Build strong foundations in technical concepts through interactive learning."
        },
        {
            icon: <Rocket className="w-6 h-6" />,
            title: "Career Advancement",
            description: "Improve your technical skills to advance in your career or switch to tech roles."
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Global Community",
            description: "Join a community of learners from around the world sharing knowledge and experiences."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Quality Assurance",
            description: "All content is carefully curated and regularly updated to ensure accuracy and relevance."
        }
    ]

    const subjects = [
        {
            name: "Python Programming",
            description: "Master Python fundamentals, data structures, algorithms, and advanced concepts.",
            topics: ["Variables & Data Types", "Control Structures", "Functions", "Object-Oriented Programming", "File Handling", "Libraries & Frameworks"]
        },
        {
            name: "Machine Learning",
            description: "Learn the fundamentals of ML, algorithms, and practical applications.",
            topics: ["Supervised Learning", "Unsupervised Learning", "Neural Networks", "Data Preprocessing", "Model Evaluation", "Deep Learning"]
        },
        {
            name: "JavaScript",
            description: "Master modern JavaScript, ES6+, and web development concepts.",
            topics: ["Variables & Functions", "DOM Manipulation", "Async Programming", "ES6+ Features", "Frameworks", "Testing"]
        },
        {
            name: "Data Structures & Algorithms",
            description: "Build strong foundations in computer science fundamentals.",
            topics: ["Arrays & Strings", "Linked Lists", "Trees & Graphs", "Sorting Algorithms", "Search Algorithms", "Dynamic Programming"]
        }
    ]

    const stats = [
        { value: "1000+", label: "Practice Questions", icon: <BookOpen className="w-5 h-5" /> },
        { value: "50+", label: "Learning Levels", icon: <Target className="w-5 h-5" /> },
        { value: "4", label: "Core Subjects", icon: <Code className="w-5 h-5" /> },
        { value: "24/7", label: "Available", icon: <Clock className="w-5 h-5" /> }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <Code className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    CodeTech
                                </h1>
                                <p className="text-sm text-slate-600">Interactive Learning Platform</p>
                            </div>
                        </div>
                        <Link href="/">
                            <Button variant="ghost">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto text-center">
                    <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
                        <Star className="w-4 h-4 mr-2" />
                        About CodeTech
                    </Badge>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                        Empowering Learning Through
                        <span className="block text-blue-600">Interactive Technology</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        CodeTech is a comprehensive learning platform designed to bridge the gap between theoretical knowledge
                        and practical application. We believe in making technical education accessible, engaging, and effective
                        for learners at all levels.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4 bg-white/50">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                                <CardContent className="pt-6">
                                    <div className="text-blue-600 mb-3 flex justify-center">{stat.icon}</div>
                                    <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                                    <div className="text-sm text-slate-600">{stat.label}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <Target className="w-6 h-6 text-blue-600" />
                                    <span>Our Mission</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600 leading-relaxed">
                                    To democratize technical education by providing high-quality, interactive learning experiences
                                    that empower individuals to master complex technical concepts through structured, engaging,
                                    and personalized learning paths.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <Lightbulb className="w-6 h-6 text-purple-600" />
                                    <span>Our Vision</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600 leading-relaxed">
                                    To become the leading platform for interactive technical education, fostering a global
                                    community of learners who are equipped with the knowledge and skills to drive innovation
                                    and technological advancement.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 bg-white/50">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-slate-900">Why Choose CodeTech?</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Our platform is designed to enhance your theoretical understanding through interactive learning
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <div className="text-blue-600 mb-3">{feature.icon}</div>
                                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-slate-900">Benefits for Learners</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Discover how CodeTech can transform your learning journey
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                                <CardHeader>
                                    <div className="text-purple-600 mb-3">{benefit.icon}</div>
                                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subjects Section */}
            <section className="py-20 px-4 bg-white/50">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-slate-900">Available Subjects</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Comprehensive coverage of essential technical topics
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {subjects.map((subject, index) => (
                            <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="text-xl">{subject.name}</CardTitle>
                                    <CardDescription className="text-base">{subject.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-slate-900 mb-3">Key Topics:</h4>
                                        <div className="grid grid-cols-2 gap-2">
                                            {subject.topics.map((topic, topicIndex) => (
                                                <div key={topicIndex} className="flex items-center space-x-2">
                                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                                    <span className="text-sm text-slate-600">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-slate-900">How It Works</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Simple steps to start your learning journey
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center">
                            <CardHeader>
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold">1</span>
                                </div>
                                <CardTitle>Sign Up & Choose</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600">
                                    Create your account and select from our range of technical subjects that interest you most.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center">
                            <CardHeader>
                                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold">2</span>
                                </div>
                                <CardTitle>Progress Through Levels</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600">
                                    Work through structured levels, each building upon the previous one for comprehensive learning.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center">
                            <CardHeader>
                                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold">3</span>
                                </div>
                                <CardTitle>Track & Improve</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600">
                                    Monitor your progress, compete on leaderboards, and continuously improve your skills.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6 text-white">Ready to Start Learning?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of learners who are already mastering technical concepts with CodeTech
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/signup">
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                                Get Started Free
                            </Button>
                        </Link>
                        <Link href="/dashboard">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                                Explore Subjects
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex items-center justify-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <Code className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold">CodeTech</h3>
                    </div>
                    <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
                        Empowering learners worldwide with interactive technical education.
                        Build your future with structured, engaging, and comprehensive learning experiences.
                    </p>
                    <div className="flex justify-center space-x-6 text-sm text-slate-400">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <Link href="/about" className="hover:text-white transition-colors">About</Link>
                        <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
                        <Link href="/leaderboard" className="hover:text-white transition-colors">Leaderboard</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
} 