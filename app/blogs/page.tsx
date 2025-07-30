"use client";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Search,
  Filter,
  TrendingUp,
  FileText,
  User,
  Calendar,
  Clock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    slug: "why-rfp-creation-is-still-broken-in-2025-and-how-to-fix-it",
    title: "Why RFP Creation Is Still Broken in 2025 (And How to Fix It)",
    excerpt:
      "Despite all the technological progress in procurement, RFP creation remains one of the most painful, manual, and inefficient parts of the vendor selection process.",
    author: "Paperfly Team",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "Procurement",
    tags: ["RFP", "Procurement", "AI", "Automation"],
    featured: true,
  },
];

const categories = [
  "All",
  "Procurement",
  "AI & Technology",
  "Best Practices",
  "Government",
  "Case Studies",
  "Vendor Relations",
];

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterPosts(term, selectedCategory);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    filterPosts(searchTerm, category);
  };

  const filterPosts = (search: string, category: string) => {
    let filtered = blogPosts;

    if (category !== "All") {
      filtered = filtered.filter((post) => post.category === category);
    }

    if (search) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
          post.tags.some((tag) =>
            tag.toLowerCase().includes(search.toLowerCase())
          )
      );
    }

    setFilteredPosts(filtered);
  };

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Sticky Header */}
      <Header />
      <div className="pt-[72px]">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#005DF2]/5 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-slate-900">Paperfly</span>
                <br />
                <span className="bg-gradient-to-r from-[#005DF2] to-[#0048C1] bg-clip-text text-transparent">
                  Blog
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Insights, best practices, and the latest trends in procurement,
                RFP management, and vendor relations.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="max-w-7xl mx-auto px-6 py-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10 h-12 border-slate-200 focus:border-[#005DF2] focus:ring-[#005DF2]"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-slate-500" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={
                        selectedCategory === category ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => handleCategoryFilter(category)}
                      className={
                        selectedCategory === category
                          ? "bg-[#005DF2] hover:bg-[#0048C1] text-white"
                          : "border-slate-200 text-slate-600 hover:border-[#005DF2] hover:text-[#005DF2]"
                      }
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-center space-x-3 mb-8">
              <TrendingUp className="w-6 h-6 text-[#005DF2]" />
              <h2 className="text-3xl font-bold text-slate-900">
                Featured Articles
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link href={`/blogs/${post.slug}`}>
                  <Card
                    key={post.id}
                    className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50"
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className="h-48 bg-gradient-to-br from-[#005DF2] to-[#0048C1] flex items-center justify-center">
                          <div className="text-center text-white">
                            <FileText className="w-12 h-12 mx-auto mb-2 opacity-80" />
                            <Badge className="bg-white/20 text-white border-white/30">
                              Featured
                            </Badge>
                          </div>
                        </div>
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/90 text-[#005DF2] font-semibold">
                            {post.category}
                          </Badge>
                        </div>
                      </div>

                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#005DF2] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-4 text-sm text-slate-500">
                            <div className="flex items-center space-x-1">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="bg-[#005DF2]/10 text-[#005DF2] text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button
                            variant="ghost"
                            className="text-[#005DF2] hover:text-[#0048C1] p-0"
                          >
                            Read more
                            <ArrowRight className="ml-1 w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center space-x-3 mb-8">
            <FileText className="w-6 h-6 text-[#005DF2]" />
            <h2 className="text-3xl font-bold text-slate-900">All Articles</h2>
            <div className="text-slate-500">
              ({filteredPosts.length} articles)
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link href={`/blogs/${post.slug}`}>
                <Card
                  key={post.id}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 border border-slate-200/60 bg-white"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge
                        variant="secondary"
                        className="bg-[#005DF2]/10 text-[#005DF2]"
                      >
                        {post.category}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#005DF2] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center space-x-3 text-xs text-slate-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-slate-100 text-slate-600 text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#005DF2] hover:text-[#0048C1] p-0"
                      >
                        Read more
                        <ArrowRight className="ml-1 w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                No articles found
              </h3>
              <p className="text-slate-600 mb-6">
                Try adjusting your search terms or filters
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  setFilteredPosts(blogPosts);
                }}
                variant="outline"
                className="border-[#005DF2] text-[#005DF2] hover:bg-[#005DF2] hover:text-white"
              >
                Clear filters
              </Button>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
