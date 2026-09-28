import { Card, CardContent } from '@/components/ui/card';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    content: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    content: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=250&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    content: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
  }
];

export function TestimonialsSection() {
  return (
    <section className="w-full py-24 relative overflow-hidden bg-white">
      {/* Decorative blurry green background spot */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-[var(--bytespace-yellow)]/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between mb-16 gap-8 items-start">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground max-w-sm leading-tight">
            Discover What Our<br/>Community Is Saying
          </h2>
          <p className="text-muted-foreground text-[15px] max-w-lg leading-relaxed pt-2">
            At ByteSpace, our vibrant community of learners and creators is at the
            heart of what we do. Hear directly from those who have experienced the
            transformative journey of learning and creating on our platform. Explore
            testimonials that reflect the diverse perspectives of enthusiastic learners
            and accomplished creators.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white border-gray-100 shadow-xl shadow-gray-100/50 rounded-2xl relative pt-12 overflow-visible">
              <div className="absolute -top-10 left-6">
                <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden bg-white shadow-sm">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <CardContent className="px-8 pb-8 pt-4">
                <h4 className="font-bold text-lg text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-blue-600 mb-6">{testimonial.role}</p>
                <p className="text-gray-500 text-[15px] leading-relaxed">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
