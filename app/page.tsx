import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  BookOpen,
  Brain,
  Target,
  TrendingUp,
  CheckCircle,
  Star,
  Play,
  BarChart3,
  Clock,
  Award,
  Zap,
  Bell,
  Calendar,
  Gift,
} from "lucide-react"
import Link from "next/link"

export default function LearnixPreLaunch() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image 
              src="/images/learnix-logo.png" 
              alt="Learnix - AI-powered exam preparation" 
              width={32} 
              height={32} 
              className="h-8 w-auto" 
            />
            <Badge variant="destructive" className="text-xs">BETA</Badge>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#parents" className="text-muted-foreground hover:text-primary transition-colors">
              For Parents
            </Link>
            <Link href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#beta" className="text-muted-foreground hover:text-primary transition-colors">
              Beta Access
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button 
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfEUiHMp9qcQySEG5jTxFQkpjOMdJpJO7Fsd15wAYlXbQkXYA/viewform?fbclid=IwY2xjawKnhZlleHRuA2FlbQIxMQABHpBe6NprJB6abmWpnAryoDjiNX7SnzuRJSzg7lT7L5QKtAapNh4eo58EQrEN_aem_ceUoqKGt4SusfsFSGrk36Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Bell className="w-4 h-4 mr-2" />
                Join Beta Waitlist
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary" className="text-primary">
                    🇦🇺 Designed for Australian Students
                  </Badge>
                  <Badge variant="destructive">
                    <Calendar className="w-3 h-3 mr-1" />
                    Launching Q2 2024
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  The Future of{" "}
                  <span className="text-primary">
                    Exam Prep
                  </span>{" "}
                  is Here
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Be among the first to experience Learnix - the revolutionary AI platform that transforms publicly
                  available study materials into personalized practice questions aligned with your state curriculum.
                  Join our exclusive beta and shape the future of exam preparation.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <Gift className="w-5 h-5 mr-2 text-destructive" />
                  Exclusive Beta Benefits
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                    Lifetime access to premium features
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                    Direct input on platform development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                    Priority customer support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                    Early access to new features
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8"
                  asChild
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfEUiHMp9qcQySEG5jTxFQkpjOMdJpJO7Fsd15wAYlXbQkXYA/viewform?fbclid=IwY2xjawKnhZlleHRuA2FlbQIxMQABHpBe6NprJB6abmWpnAryoDjiNX7SnzuRJSzg7lT7L5QKtAapNh4eo58EQrEN_aem_ceUoqKGt4SusfsFSGrk36Q"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Bell className="mr-2 w-5 h-5" />
                    Register for Beta Access
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Preview
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-card rounded-2xl p-8 shadow-lg border border-border">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/_zTgY0Uaek4"
                    title="Learnix Platform Preview"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute bottom-4 left-4 text-muted-foreground text-sm bg-background/50 px-2 py-1 rounded">
                    Platform Preview
                  </div>
                  <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs font-medium">
                    BETA PREVIEW
                  </div>
                </div>
                <div className="mt-4 text-center text-muted-foreground">
                  Exclusive preview: See how AI creates personalized questions from your curriculum
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-card rounded-lg shadow-lg p-3 border border-border">
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-destructive" />
                  <span className="text-sm font-medium">AI-Powered</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card rounded-lg shadow-lg p-3 border border-border">
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Beta Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Registration Section */}
      <section id="beta" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Learnix Beta Program</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be among the first 1,000 students to experience the future of AI-powered exam preparation. Limited spots
              available for our exclusive beta launch.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Secure Your Beta Access</h3>
                  <p className="text-gray-600">
                    Join thousands of Australian students already on the waitlist. Get notified the moment beta access
                    opens and claim your exclusive benefits.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <form className="space-y-4">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700"
                  >
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfEUiHMp9qcQySEG5jTxFQkpjOMdJpJO7Fsd15wAYlXbQkXYA/viewform?fbclid=IwY2xjawKnhZlleHRuA2FlbQIxMQABHpBe6NprJB6abmWpnAryoDjiNX7SnzuRJSzg7lT7L5QKtAapNh4eo58EQrEN_aem_ceUoqKGt4SusfsFSGrk36Q"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Bell className="mr-2 w-4 h-4" />
                      Join Beta Waitlist
                    </a>
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    We&apos;ll notify you as soon as beta access is available. No spam, ever.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Revolutionary Features Coming Soon</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-driven platform will transform the way Australian students prepare for exams, making study sessions
              more effective and less stressful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-blue-100 text-blue-700 text-xs">BETA READY</Badge>
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>AI-Powered Personalization</CardTitle>
                <CardDescription>
                  Our advanced AI will analyze your learning patterns and create personalized practice questions
                  tailored to your strengths and weaknesses.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-red-100 text-red-700 text-xs">BETA READY</Badge>
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Curriculum Alignment</CardTitle>
                <CardDescription>
                  Every question will be aligned with your specific state curriculum, ensuring you&apos;re studying exactly
                  what you need for your exams.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-100 text-green-700 text-xs">BETA READY</Badge>
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Targeted Learning</CardTitle>
                <CardDescription>
                  Focus on areas that need improvement with intelligent recommendations and adaptive practice sessions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-purple-100 text-purple-700 text-xs">COMING SOON</Badge>
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Smart Scheduling</CardTitle>
                <CardDescription>
                  Maximize your study time with intelligent scheduling that adapts to your learning pace and exam dates.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-blue-100 text-blue-700 text-xs">BETA READY</Badge>
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Real-Time Progress</CardTitle>
                <CardDescription>
                  Track your improvement with detailed analytics and insights that show your journey to exam success.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-indigo-200 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-indigo-100 text-indigo-700 text-xs">COMING SOON</Badge>
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>Achievement System</CardTitle>
                <CardDescription>
                  Stay motivated with gamified learning experiences and achievement badges for reaching study
                  milestones.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Learnix Will Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI will transform publicly available study materials into your personalized exam preparation toolkit
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Analyzes Your Curriculum</h3>
                  <p className="text-gray-600">
                    Our AI will process publicly available study materials, past exams, and assessment reports specific
                    to your state curriculum.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalized Questions Generated</h3>
                  <p className="text-gray-600">
                    Advanced algorithms will create practice questions tailored to your learning style, difficulty
                    level, and areas needing improvement.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Adaptive Learning Path</h3>
                  <p className="text-gray-600">
                    As you practice, the AI will continuously adapt your learning path, focusing on weak areas and
                    reinforcing strengths.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Track Progress & Succeed</h3>
                  <p className="text-gray-600">
                    Monitor your improvement with detailed analytics and achieve better exam results with confidence.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl shadow-2xl p-6">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-red-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/_zTgY0Uaek4"
                    title="Learnix Platform Preview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute top-4 right-4 bg-white/90 rounded-lg px-3 py-1 text-sm font-medium">
                    Beta Preview
                  </div>
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                    BETA PREVIEW
                  </div>
                </div>
                <div className="mt-4 text-center text-gray-600">
                  Exclusive beta preview: See the AI in action creating your personalized study plan
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parents Section */}
      <section id="parents" className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Peace of Mind for Parents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about your child&apos;s progress with transparent dashboards and detailed insights into their
              learning journey. Coming in our beta release.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-lg p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Sarah&apos;s Progress Dashboard</h3>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-100 text-green-700">Beta Preview</Badge>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Mathematics</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div className="w-20 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">English</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div className="w-[78%] h-2 bg-green-500 rounded-full"></div> {/* Adjusted width for 78% */}
                        </div>
                        <span className="text-sm font-medium">78%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Science</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div className="w-[72%] h-2 bg-red-500 rounded-full"></div> {/* Adjusted width for 72% */}
                        </div>
                        <span className="text-sm font-medium">72%</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-900">AI Insights (Beta Feature)</span>
                    </div>
                    <p className="text-sm text-blue-800">
                      Sarah has improved in algebra but needs focus on geometry concepts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
                Coming in Beta
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Transparent Progress Tracking</h3>
                <p className="text-gray-600 mb-6">
                  Get real-time insights into your child&apos;s learning progress with detailed dashboards that will show
                  strengths, areas for improvement, and study recommendations.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Detailed Analytics</h4>
                    <p className="text-gray-600 text-sm">
                      View comprehensive reports on study time, question accuracy, and topic mastery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <Target className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">AI-Powered Recommendations</h4>
                    <p className="text-gray-600 text-sm">
                      Receive specific suggestions on which topics your child should focus on next.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Weekly Progress Reports</h4>
                    <p className="text-gray-600 text-sm">
                      Get automated weekly summaries delivered to your email with key insights.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700"
                asChild
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfEUiHMp9qcQySEG5jTxFQkpjOMdJpJO7Fsd15wAYlXbQkXYA/viewform?fbclid=IwY2xjawKnhZlleHRuA2FlbQIxMQABHpBe6NprJB6abmWpnAryoDjiNX7SnzuRJSzg7lT7L5QKtAapNh4eo58EQrEN_aem_ceUoqKGt4SusfsFSGrk36Q"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Bell className="mr-2 w-5 h-5" />
                  Get Notified When Ready
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Early Access Feedback</h2>
            <p className="text-xl text-gray-600">Insights from our pilot program participants</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-red-400 text-red-400" />
                  ))}
                  <Badge className="ml-2 bg-blue-100 text-blue-700 text-xs">PILOT TESTER</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;The AI personalization in the pilot was incredible! It identified my weak areas in calculus and
                  created targeted questions that really helped me improve.&quot;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">JM</span>
                  </div>
                  <div>
                    <div className="font-semibold">Jessica M.</div>
                    <div className="text-sm text-gray-500">Year 12 Student, NSW</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-red-400 text-red-400" />
                  ))}
                  <Badge className="ml-2 bg-red-100 text-red-700 text-xs">PILOT TESTER</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;As a parent, the progress dashboard preview was exactly what I needed. I could finally see where my
                  daughter needed help without having to guess.&quot;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-semibold">ST</span>
                  </div>
                  <div>
                    <div className="font-semibold">Sarah T.</div>
                    <div className="text-sm text-gray-500">Parent, Victoria</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-red-400 text-red-400" />
                  ))}
                  <Badge className="ml-2 bg-green-100 text-green-700 text-xs">PILOT TESTER</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;The curriculum alignment was spot-on for Queensland. Every question felt relevant to what I was
                  studying. Can&apos;t wait for the full beta release!&quot;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">MK</span>
                  </div>
                  <div>
                    <div className="font-semibold">Michael K.</div>
                    <div className="text-sm text-gray-500">Year 11 Student, Queensland</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don&apos;t Miss Out on the Future of Exam Prep</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the exclusive Learnix beta program and be among the first Australian students to experience
            revolutionary AI-powered learning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8"
              asChild
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfEUiHMp9qcQySEG5jTxFQkpjOMdJpJO7Fsd15wAYlXbQkXYA/viewform?fbclid=IwY2xjawKnhZlleHRuA2FlbQIxMQABHpBe6NprJB6abmWpnAryoDjiNX7SnzuRJSzg7lT7L5QKtAapNh4eo58EQrEN_aem_ceUoqKGt4SusfsFSGrk36Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Bell className="mr-2 w-5 h-5" />
                Secure Your Beta Access
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-700 text-lg px-8"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Beta Preview
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/learnix-logo.png"
                  alt="Learnix - AI-powered exam preparation"
                  width={24}
                  height={24}
                  className="h-6 w-auto"
                />
                <Badge className="bg-red-100 text-red-700 text-xs">BETA</Badge>
              </div>
              <p className="text-gray-400">
                AI-powered exam preparation for Australian students. Personalized, efficient, and effective.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Beta Program</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Join Beta Waitlist
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Beta Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Launch Timeline
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Early Access Benefits
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Beta Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Learnix. All rights reserved. Made with ❤️ for Australian students.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
