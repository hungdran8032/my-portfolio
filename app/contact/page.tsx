
"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { FadeIn, SlideIn } from "@/components/animations"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Gửi email qua EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )

      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset thông báo thành công sau 5 giây
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error("Lỗi khi gửi email:", error)
      setIsSubmitting(false)
      alert("Có lỗi xảy ra khi gửi email. Vui lòng thử lại!")
    }
  }
  return (
    <div className="container py-12 px-4 md:px-6">
      <FadeIn>
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-heading">Contact Me</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Have a question or want to work together? Get in touch!
            </p>
          </div>
        </div>
      </FadeIn>

      <div className="grid gap-8 lg:grid-cols-2">
        <SlideIn direction="right">
          <Card className="glass-card border-primary/10">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="rounded-full bg-primary/10 p-3 text-primary mb-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Message Sent!</h3>
                  <p className="text-muted-foreground mt-2">Thank you for your message. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="border-primary/10 focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border-primary/10 focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="border-primary/10 focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="border-primary/10 focus-visible:ring-primary resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </SlideIn>

        <div className="space-y-6">
          <SlideIn direction="left">
            <Card className="glass-card border-primary/10">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Here are the ways you can reach me directly.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">nguyenhung20032308@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+84 967 061 645</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Nguyen Thi Nhuan, District 12, Ho Chi Minh City, Vietnam</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </SlideIn>

          <SlideIn direction="left" delay={0.1}>
            <Card className="glass-card border-primary/10">
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
                <CardDescription>Find me on these platforms and social media.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full hover-card border-primary/10" asChild>
                    <a href="https://github.com/hungdran8032" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full hover-card border-primary/10" asChild>
                    <a href="https://www.facebook.com/hung.dran.23/" target="_blank" rel="noopener noreferrer">
                      <Facebook className="mr-2 h-4 w-4" />
                      Facebook
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full hover-card border-primary/10" asChild>
                    <a href="https://zalo.me/0967061645" target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-4 w-4" />
                      Zalo
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full hover-card border-primary/10" asChild>
                    <a href="https://www.linkedin.com/in/nguyen-hung-23135b358/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </SlideIn>

          {/* <SlideIn direction="left" delay={0.2}>
            <Card className="glass-card border-primary/10 overflow-hidden">
              <div className="relative h-48 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948322!3d37.75781499657613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1656426148226!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                  className="grayscale"
                ></iframe>
              </div>
            </Card>
          </SlideIn> */}
        </div>
      </div>
    </div>
  )
}
