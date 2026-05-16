"use client";

import { useParams, useRouter } from "next/navigation";
import { SITE_RESOURCES, SiteResource } from "@/data/site-resources";
import { ExternalLink, Star, Bookmark, Share2, AlertCircle, ArrowLeft } from "lucide-react";
import { BadgeLabel } from "@/components/BadgeLabel";
import { ToolFeatures } from "@/components/ToolFeatures";
import { ReviewSection } from "@/components/ReviewSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function ResourceDetail() {
  const params = useParams();
  const router = useRouter();
  const slug = params.id as string;
  
  const resource = SITE_RESOURCES[slug];

  if (!resource) {
    return (
      <div className="container mx-auto px-6 py-32 text-center">
        <AlertCircle className="w-16 h-16 text-accent-pink mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">Resource Not Found</h1>
        <p className="text-text-gray mb-8">The tool you are looking for does not exist or has been removed.</p>
        <button onClick={() => router.push('/search')} className="btn-primary">
          Back to Directory
        </button>
      </div>
    );
  }

  // Find related tools (same category, excluding self)
  const relatedTools = Object.values(SITE_RESOURCES).filter(r => r.category === resource.category && r.slug !== resource.slug);

  // Mock extended data
  const mockFeatures = [
    "Intuitive user interface designed for speed",
    "Export options in multiple modern formats",
    "Cloud synchronization across all your devices",
    "API access for developers (Pro plan)",
    "24/7 priority customer support"
  ];
  
  const mockUseCases = [
    "Freelancers looking to streamline their workflow",
    "Student projects needing quick, high-quality assets",
    "Startup founders building MVPs rapidly",
    "Content creators planning out their weekly schedules"
  ];

  return (
    <div className="pb-32">
      
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
        <div className="absolute inset-0 noise-overlay opacity-30"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm font-medium text-text-gray hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Search
          </button>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Logo/Icon Container */}
            <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-[2rem] bg-gradient-to-br from-surface to-surface-hover border border-white/10 shadow-2xl flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-6xl font-black gradient-text group-hover:scale-110 transition-transform">{resource.title.charAt(0)}</span>
            </div>

            <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  {resource.category}
                </span>
                {resource.isTrending && <BadgeLabel type="trending" />}
                {resource.rating > 4.8 && <BadgeLabel type="editor" />}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">{resource.title}</h1>
              <p className="text-xl md:text-2xl text-text-gray mb-8 max-w-3xl leading-relaxed">
                {resource.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {resource.tags.map(tag => (
                  <span key={tag} className="text-sm px-4 py-2 bg-surface rounded-xl text-text-gray border border-white/5 font-medium hover:text-white hover:border-white/20 transition-all cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <a 
                  href={resource.websiteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary py-4 px-8 text-lg"
                >
                  Visit Website <ExternalLink className="w-5 h-5" />
                </a>
                <button className="h-[60px] px-6 rounded-full glass-strong hover:bg-surface flex items-center justify-center gap-2 font-bold transition-colors">
                  <Bookmark className="w-5 h-5" /> Save
                </button>
                <button className="h-[60px] w-[60px] rounded-full glass-strong hover:bg-surface flex items-center justify-center transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>

                <div className="ml-auto hidden sm:flex items-center gap-2 bg-surface px-4 py-3 rounded-2xl border border-white/5">
                  <Star className="w-6 h-6 text-accent fill-accent" />
                  <div className="flex flex-col">
                    <span className="font-bold leading-none">{resource.rating} / 5.0</span>
                    <span className="text-xs text-text-gray">248 Reviews</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container mx-auto px-6 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-16">
            
            {/* Features & Use Cases */}
            <ToolFeatures features={mockFeatures} useCases={mockUseCases} />

            {/* Screenshots / Previews Mockup */}
            <div className="glass-card rounded-[2.5rem] p-2 overflow-hidden border-primary/20">
              <div className="aspect-video bg-gradient-to-br from-surface to-background rounded-[2rem] flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 mesh-bg opacity-50"></div>
                <div className="relative z-10 w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shadow-2xl cursor-pointer group-hover:scale-110 transition-transform border border-white/20">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
                </div>
                <p className="absolute bottom-6 left-6 font-bold text-white/50 group-hover:text-white transition-colors z-10">Product Walkthrough</p>
              </div>
            </div>

            {/* Reviews */}
            <ReviewSection />

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-3xl sticky top-24">
              <h3 className="text-lg font-bold mb-6">Tool Information</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-text-gray">Pricing</span>
                  <span className="font-bold text-success">Freemium</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-text-gray">Platform</span>
                  <span className="font-bold">Web App</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-text-gray">Added</span>
                  <span className="font-bold">2 days ago</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5">
                <p className="text-sm text-text-gray mb-4">Did you find an issue with this tool or is the link broken?</p>
                <button className="text-sm font-bold text-accent-pink hover:underline">Report an Issue</button>
              </div>
            </div>
          </div>

        </div>

        {/* Recommendations */}
        <RelatedTools tools={relatedTools} />

      </section>

    </div>
  );
}
