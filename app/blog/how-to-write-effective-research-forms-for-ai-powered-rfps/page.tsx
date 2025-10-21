import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { DEMO_BOOKING_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  Calendar,
  Clock,
  User,
  FileText,
  Target,
  Settings,
  TrendingUp,
  Shield,
  Award,
  AlertCircle,
} from "lucide-react";

const EffectiveResearchForms = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <div className="pt-[72px]">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#005DF2]/5 to-transparent"></div>
          <div className="max-w-4xl mx-auto px-6 py-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Badge
                  variant="secondary"
                  className="bg-[#005DF2]/10 text-[#005DF2] border-[#005DF2]/20"
                >
                  Best Practices
                </Badge>
                <div className="md:flex hidden items-center space-x-2 text-slate-500">
                  <User className="w-4 h-4" />
                  <span className="font-medium">Paperfly Team</span>
                  <span>•</span>
                  <Calendar className="w-4 h-4" />
                  <span>January 2025</span>
                  <span>•</span>
                  <Clock className="w-4 h-4" />
                  <span>8 min read</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-slate-900">
                  How to Write Effective
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#005DF2] to-[#0048C1] bg-clip-text text-transparent">
                  Research Forms
                </span>
                <br />
                <span className="text-slate-700 text-3xl md:text-4xl">
                  for AI-Powered RFPs
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                The quality of your RFP starts with how well you complete your research form. 
                Learn how to provide the right context and details to help AI generate precise, 
                comprehensive RFPs that attract the best vendors.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 py-12">
          <article className="prose prose-lg lg:prose-xl max-w-none">
            <p>
              When you're creating an RFP with Paperfly, the research form is your 
              foundation. The more thoughtfully you complete it, the more accurate and 
              effective your final RFP will be. Our AI uses your responses to understand 
              your project's unique needs and craft a tailored procurement document.
            </p>
            
            <p>
              This guide walks you through each question in our research form, explaining 
              what we're looking for and how to provide responses that lead to better outcomes.
            </p>

            <h2>Understanding the Research Form Structure</h2>
            <p>
              Our research form consists of 10 carefully designed questions that cover 
              every critical aspect of your project. Each question serves a specific purpose 
              in building a comprehensive understanding of your needs.
            </p>

            <div className="not-prose bg-blue-50 border-l-4 border-[#005DF2] p-6 my-8 rounded-r-lg">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-[#005DF2] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Key Principle</p>
                  <p className="text-slate-700 text-base">
                    Be specific, be thorough, and think from a vendor's perspective. 
                    The more context you provide, the better vendors can understand 
                    your needs and submit relevant proposals.
                  </p>
                </div>
              </div>
            </div>

            <h2>Question 1: Project Context, Goals, and Initiation</h2>
            <blockquote>
              <p>"Briefly explain the project's context, goals, and why it is being initiated."</p>
            </blockquote>
            
            <h3>What We're Looking For</h3>
            <p>
              This question establishes the foundation of your entire RFP. We need to 
              understand the bigger picture: What's driving this project? What business 
              problem are you solving? What opportunity are you pursuing?
            </p>

            <h3>How to Answer Effectively</h3>
            <ul>
              <li><strong>Business Context:</strong> Explain your organization's current situation and what prompted this initiative</li>
              <li><strong>Strategic Goals:</strong> Outline what you're trying to achieve and how it aligns with broader objectives</li>
              <li><strong>Timing:</strong> Mention why now is the right time for this project</li>
              <li><strong>Stakeholders:</strong> Indicate who will be impacted or involved</li>
            </ul>

            <h3>Example Response</h3>
            <div className="not-prose bg-slate-50 p-6 rounded-lg my-6 border border-slate-200">
              <p className="text-slate-700 italic">
                "Our healthcare organization is experiencing rapid growth with patient visits 
                increasing 40% year-over-year. Our current electronic health records (EHR) 
                system cannot scale to meet demand, resulting in slower patient processing 
                and staff frustration. We're initiating this project to replace our legacy 
                EHR system with a modern, cloud-based solution that can support 500+ 
                concurrent users, integrate with our existing billing systems, and meet 
                HIPAA compliance requirements. This project supports our strategic goal of 
                improving patient care quality while reducing operational costs by 25%."
              </p>
            </div>

            <h2>Question 2: Problem or Opportunity</h2>
            <blockquote>
              <p>"What problem does this project solve or opportunity does it address?"</p>
            </blockquote>

            <h3>What We're Looking For</h3>
            <p>
              Here, we want to understand the specific pain points or opportunities you're 
              addressing. This helps vendors tailor their solutions to your exact needs.
            </p>

            <h3>How to Answer Effectively</h3>
            <ul>
              <li><strong>Specific Pain Points:</strong> Identify concrete issues you're facing with quantifiable impacts</li>
              <li><strong>Root Causes:</strong> Explain why current solutions aren't working</li>
              <li><strong>Opportunity Scope:</strong> If pursuing an opportunity, describe the market potential or benefits</li>
              <li><strong>Current Impact:</strong> Quantify how the problem affects operations, costs, or outcomes</li>
            </ul>

            <h3>Example Response</h3>
            <div className="not-prose bg-slate-50 p-6 rounded-lg my-6 border border-slate-200">
              <p className="text-slate-700 italic">
                "Our manual inventory management process leads to stockouts 15% of the time, 
                resulting in $200K annual lost sales. Staff spend 20 hours weekly on manual 
                counts that are still 30% inaccurate. We lack real-time visibility into 
                inventory across our 8 warehouses, making it impossible to optimize stock 
                levels or fulfill orders efficiently. This project addresses the opportunity 
                to reduce carrying costs by 35%, improve order fulfillment speed by 50%, 
                and eliminate stockouts through automated inventory tracking and AI-powered 
                demand forecasting."
              </p>
            </div>

            <h2>Question 3: Deliverables and Success Metrics</h2>
            <blockquote>
              <p>"What are the main deliverables, and how will you measure the project's success?"</p>
            </blockquote>

            <h3>What We're Looking For</h3>
            <p>
              Clear deliverables and success criteria ensure everyone understands what 
              "done" looks like. This question helps vendors understand expectations and 
              structure their proposals accordingly.
            </p>

            <h3>How to Answer Effectively</h3>
            <ul>
              <li><strong>Tangible Deliverables:</strong> List specific outputs (software, reports, trained systems, documentation)</li>
              <li><strong>Quantitative Metrics:</strong> Define measurable KPIs (response time, accuracy rate, cost reduction)</li>
              <li><strong>Qualitative Goals:</strong> Include experience improvements or capability enhancements</li>
              <li><strong>Timeline Markers:</strong> Specify when different deliverables should be completed</li>
            </ul>

            <h3>Example Response</h3>
            <div className="not-prose bg-slate-50 p-6 rounded-lg my-6 border border-slate-200">
              <p className="text-slate-700 italic">
                "Main deliverables: (1) Fully implemented CRM system with custom integrations 
                to our ERP and marketing automation platforms, (2) Migrated historical data 
                from 3 legacy systems (5 years of records), (3) Trained 150 staff members 
                with role-specific workflows, (4) Comprehensive documentation and admin guides. 
                Success metrics: 95% user adoption rate within 3 months, 40% reduction in lead 
                response time, 25% increase in sales pipeline visibility, 99.9% system uptime, 
                and positive user satisfaction scores (4+ out of 5) in post-implementation survey."
              </p>
            </div>

            <h2>Question 4: Critical Tools, Technologies, and Materials</h2>
            <blockquote>
              <p>"List any critical tools, technologies, or materials required for the solution."</p>
            </blockquote>

            <h3>What We're Looking For</h3>
            <p>
              This question identifies technical requirements and constraints that vendors 
              must accommodate. It ensures compatibility with your existing infrastructure.
            </p>

            <h3>How to Answer Effectively</h3>
            <ul>
              <li><strong>Existing Systems:</strong> List platforms and software that must integrate with the new solution</li>
              <li><strong>Technical Stack:</strong> Specify required programming languages, frameworks, or databases</li>
              <li><strong>Hardware Requirements:</strong> Mention any physical equipment or infrastructure needs</li>
              <li><strong>Licensing Constraints:</strong> Note any vendor lock-in situations or preferred technologies</li>
              <li><strong>Standards:</strong> Reference industry standards or protocols that must be supported</li>
            </ul>

            <h3>Example Response</h3>
            <div className="not-prose bg-slate-50 p-6 rounded-lg my-6 border border-slate-200">
              <p className="text-slate-700 italic">
                "The solution must integrate with: Salesforce CRM (Enterprise edition), 
                Microsoft Azure cloud infrastructure, PostgreSQL database, Tableau for 
                analytics, and our SSO system (Okta). Required technology stack: RESTful 
                APIs for all integrations, support for OAuth 2.0 authentication, mobile-responsive 
                web application (iOS Safari and Android Chrome), and compatibility with our 
                CI/CD pipeline (GitHub Actions). Preferred technologies: React or Vue.js for 
                frontend, Node.js or Python for backend. Must support TLS 1.3 encryption and 
                comply with SOC 2 Type II requirements."
              </p>
            </div>

            <h2>Question 5: Timeline and Flexibility</h2>
            <blockquote>
              <p>"When should the project start and be completed? Is the timeline flexible?"</p>
            </blockquote>

            <h3>What We're Looking For</h3>
            <p>
              Timeline expectations help vendors assess feasibility and allocate resources. 
              Being clear about flexibility prevents mismatched proposals.
            </p>

            <h3>How to Answer Effectively</h3>
            <ul>
              <li><strong>Ideal Start Date:</strong> Specify when you'd like work to begin</li>
              <li><strong>Target Completion:</strong> Indicate when you need the project finished</li>
              <li><strong>Critical Milestones:</strong> Mention any interim deadlines (regulatory filings, seasonal demands)</li>
              <li><strong>Flexibility Level:</strong> Be honest about how rigid or flexible dates are</li>
              <li><strong>Constraints:</strong> Explain what's driving the timeline (fiscal year end, contract expiration, etc.)</li>
            </ul>

            <h3>Example Response</h3>
            <div className="not-prose bg-slate-50 p-6 rounded-lg my-6 border border-slate-200">
              <p className="text-slate-700 italic">
                "Ideal project start: March 1, 2025 (2 weeks after vendor selection). 
                Target completion: September 30, 2025 (before Q4 peak season). Critical 
                milestone: Beta testing must begin by August 1st to allow adequate user 
                acceptance testing before peak season. Timeline flexibility: Start date 
                is flexible by ±2 weeks. Completion date is firm due to seasonal business 
                constraints - we cannot launch during Q4 when our system usage peaks by 300%. 
                If needed, we can phase the rollout: Phase 1 (core features) by Sept 30, 
                Phase 2 (advanced features) by Nov 30."
              </p>
            </div>

            <h2>Question 6: Budget Range and Allocation</h2>
            <blockquote>
              <p>"What is the overall budget range, and which areas should receive the most funding?"</p>
            </blockquote>

            <h3>What We're Looking For</h3>
            <p>
              Budget transparency helps vendors submit realistic proposals within your 
              financial constraints. It also indicates your priorities.
            </p>

            <h3>How to Answer Effectively</h3>
            <ul>
              <li><strong>Total Budget Range:</strong> Provide a realistic range, not just a ceiling</li>
              <li><strong>Budget Components:</strong> Break down categories (software, implementation, training, support)</li>
              <li><strong>Priority Areas:</strong> Indicate where you're willing to invest more</li>
              <li><strong>Ongoing Costs:</strong> Mention expectations for annual maintenance or subscription fees</li>
              <li><strong>Budget Flexibility:</strong> Signal if you might adjust for exceptional value</li>
            </ul>

            <h3>Example Response</h3>
            <div className="not-prose bg-slate-50 p-6 rounded-lg my-6 border border-slate-200">
              <p className="text-slate-700 italic">
                "Total project budget: $250K - $350K for implementation, with $50K - $75K 
                annual budget for ongoing support and licensing. Priority allocation: 40% 
                should go to custom development and integrations (this is our highest priority), 
                25% to software licensing and infrastructure, 20% to comprehensive training 
                and change management (crucial for adoption), 15% to documentation and support. 
                We're willing to extend budget by 10% for vendors who can demonstrate 
                significantly faster implementation or superior integration capabilities. 
                Budget does not include internal staff time."
              </p>
            </div>

            <h2>Question 7: Vendor Expertise and Evaluation</h2>
            <blockquote>
              <p>"What expertise or certifications must vendors have? How will you evaluate them?"</p>
            </blockquote>

            <h3>What We're Looking For</h3>
            <p>
              This establishes baseline qualifications and evaluation criteria, helping 
              appropriate vendors self-select and understand how to position their proposals.
            </p>

            <h3>How to Answer Effectively</h3>
            <ul>
              <li><strong>Required Certifications:</strong> List must-have certifications or partner statuses</li>
              <li><strong>Experience Requirements:</strong> Specify years of experience or number of similar projects</li>
              <li><strong>Industry Expertise:</strong> Indicate if industry-specific knowledge is needed</li>
              <li><strong>Evaluation Criteria:</strong> Detail how you'll score proposals (technical approach, cost, experience)</li>
              <li><strong>References:</strong> Mention if you'll require case studies or client references</li>
            </ul>

            <h3>Example Response</h3>
            <div className="not-prose bg-slate-50 p-6 rounded-lg my-6 border border-slate-200">
              <p className="text-slate-700 italic">
                "Required: AWS Certified Solutions Architect or equivalent cloud certification, 
                minimum 5 years experience with enterprise SaaS implementations, at least 3 
                completed projects in the financial services sector (due to regulatory complexity). 
                Preferred: ISO 27001 certification, SOC 2 Type II attestation, experience with 
                GDPR compliance implementations. Evaluation criteria (weighted scoring): Technical 
                approach and architecture (35%), relevant experience and case studies (25%), 
                project timeline and methodology (20%), cost and value proposition (15%), 
                team qualifications and references (5%). Vendors must provide 3 references 
                from similar-sized financial services organizations."
              </p>
            </div>

            <h2>Question 8: Regulations, Certifications, and Protocols</h2>
            <blockquote>
              <p>"What regulations, certifications, or safety protocols must the solution meet?"</p>
            </blockquote>

            <h3>What We're Looking For</h3>
            <p>
              Compliance requirements are non-negotiable. This question ensures vendors 
              understand and can meet your regulatory obligations.
            </p>

            <h3>How to Answer Effectively</h3>
            <ul>
              <li><strong>Regulatory Requirements:</strong> List all applicable regulations (HIPAA, GDPR, SOX, etc.)</li>
              <li><strong>Industry Standards:</strong> Specify standards that must be met (PCI DSS, ISO, NIST)</li>
              <li><strong>Certifications Needed:</strong> Detail what certifications the solution or vendor must have</li>
              <li><strong>Audit Requirements:</strong> Mention if the solution must support compliance audits</li>
              <li><strong>Data Handling:</strong> Explain specific data security or privacy requirements</li>
            </ul>

            <h3>Example Response</h3>
            <div className="not-prose bg-slate-50 p-6 rounded-lg my-6 border border-slate-200">
              <p className="text-slate-700 italic">
                "The solution must comply with: HIPAA (all PHI must be encrypted at rest and 
                in transit), HITECH Act breach notification requirements, state-specific 
                privacy laws (California CCPA, New York SHIELD Act). Required certifications: 
                HITRUST CSF certification for the platform, SOC 2 Type II attestation updated 
                within last 12 months. Security protocols: Multi-factor authentication for 
                all user access, role-based access controls with audit logging, automatic 
                session timeout after 15 minutes of inactivity, data encryption using AES-256, 
                annual penetration testing with results shared. The solution must support 
                compliance audits with detailed access logs retained for 7 years."
              </p>
            </div>

            <h2>Question 9: Known Risks and Challenges</h2>
            <blockquote>
              <p>"What are the known risks or challenges associated with this project?"</p>
            </blockquote>

            <h3>What We're Looking For</h3>
            <p>
              Being upfront about challenges allows vendors to propose realistic mitigation 
              strategies and demonstrate problem-solving capabilities.
            </p>

            <h3>How to Answer Effectively</h3>
            <ul>
              <li><strong>Technical Risks:</strong> Identify integration challenges, data migration complexity, or legacy system issues</li>
              <li><strong>Organizational Risks:</strong> Mention change management concerns, stakeholder resistance, or resource constraints</li>
              <li><strong>External Risks:</strong> Note regulatory changes, market conditions, or vendor dependencies</li>
              <li><strong>Past Experience:</strong> Reference lessons learned from previous similar projects</li>
              <li><strong>Mitigation Expectations:</strong> Indicate what risk management you expect from vendors</li>
            </ul>

            <h3>Example Response</h3>
            <div className="not-prose bg-slate-50 p-6 rounded-lg my-6 border border-slate-200">
              <p className="text-slate-700 italic">
                "Key risks: (1) Data migration from legacy AS/400 system with poorly documented 
                database schema - previous migration attempts failed due to data quality issues; 
                (2) User resistance - our workforce is 60% age 50+ with low technical comfort, 
                previous system rollout had only 40% adoption; (3) Integration complexity with 
                30-year-old ERP system that has limited API capabilities; (4) Budget constraints 
                if project extends beyond 6 months due to fiscal year limitations; (5) Regulatory 
                uncertainty as new data privacy legislation is pending in our state. We expect 
                vendors to provide detailed risk mitigation plans, including data validation 
                strategies, comprehensive change management approaches, and contingency plans 
                for integration challenges."
              </p>
            </div>

            <h2>Question 10: Additional Information for Vendors</h2>
            <blockquote>
              <p>"Is there anything else vendors should know to prepare their proposal?"</p>
            </blockquote>

            <h3>What We're Looking For</h3>
            <p>
              This catch-all question captures unique aspects of your organization, culture, 
              or project that don't fit other categories but are important for vendors to know.
            </p>

            <h3>How to Answer Effectively</h3>
            <ul>
              <li><strong>Organizational Culture:</strong> Share values or working styles that vendors should align with</li>
              <li><strong>Decision Process:</strong> Explain who will be involved in vendor selection and their priorities</li>
              <li><strong>Future Plans:</strong> Mention how this project fits into longer-term roadmaps</li>
              <li><strong>Unique Constraints:</strong> Note any unusual requirements or limitations</li>
              <li><strong>Preferred Approaches:</strong> Indicate if you favor agile vs. waterfall, or other methodologies</li>
            </ul>

            <h3>Example Response</h3>
            <div className="not-prose bg-slate-50 p-6 rounded-lg my-6 border border-slate-200">
              <p className="text-slate-700 italic">
                "Additional context: We're a nonprofit with a collaborative culture - vendors 
                who demonstrate commitment to our mission (education access) will be viewed 
                favorably. Decision committee includes IT Director, CFO, and 2 program directors 
                who prioritize ease of use over advanced features. This project is Phase 1 of 
                a 3-year digital transformation; we're looking for a long-term partner who can 
                grow with us. We strongly prefer agile methodology with 2-week sprints and 
                regular stakeholder demos. Important: All work must be done by US-based teams 
                due to data sovereignty requirements. We value transparency - please include 
                detailed assumptions in your proposal and flag any concerns early. Our staff 
                is available for demos and clarification questions during the proposal period."
              </p>
            </div>

            <h2>Best Practices for Research Form Success</h2>
            <p>
              Follow these principles to maximize the quality of your AI-generated RFP:
            </p>

            <h3>Be Specific and Quantitative</h3>
            <p>
              Replace vague statements with concrete details and numbers. Instead of 
              "improve efficiency," say "reduce processing time from 4 hours to 30 minutes." 
              Specific information helps AI understand your exact needs and helps vendors 
              craft targeted solutions.
            </p>

            <h3>Think Like a Vendor</h3>
            <p>
              Consider what information you would need if you were proposing a solution. 
              What would help you estimate costs accurately? What would you need to assess 
              feasibility? Providing this context upfront reduces back-and-forth clarifications.
            </p>

            <h3>Be Honest About Constraints</h3>
            <p>
              Don't hide limitations or challenges. Vendors appreciate transparency and can 
              propose more realistic solutions when they understand the full picture. Surprises 
              during implementation lead to delays and budget overruns.
            </p>

            <h3>Prioritize Requirements</h3>
            <p>
              Distinguish between must-haves and nice-to-haves. This helps vendors understand 
              what's non-negotiable and where there's flexibility. Use language like "required," 
              "preferred," or "optional" to signal importance.
            </p>

            <h3>Review Before Submitting</h3>
            <p>
              Read through your responses as if you're a vendor seeing them for the first time. 
              Are they clear? Is there enough context? Are there obvious questions left unanswered? 
              A few minutes of review can significantly improve your RFP quality.
            </p>

            <h2>Common Mistakes to Avoid</h2>
            
            <h3>Being Too Brief</h3>
            <p>
              Minimal responses lead to generic RFPs. While we set minimum character requirements 
              for some questions, aim to provide comprehensive answers that give full context. 
              Your thoroughness directly translates to RFP quality.
            </p>

            <h3>Using Jargon Without Explanation</h3>
            <p>
              While industry terms are fine, explain acronyms and specialized terminology the 
              first time you use them. This ensures the AI correctly interprets your requirements 
              and helps vendors from diverse backgrounds understand your needs.
            </p>

            <h3>Providing Contradictory Information</h3>
            <p>
              Ensure consistency across your answers. If you mention a 6-month timeline in one 
              response but reference a year-long project elsewhere, vendors will be confused. 
              Review for internal consistency.
            </p>

            <h3>Omitting Critical Details</h3>
            <p>
              Don't assume the AI or vendors will infer unstated requirements. If data must 
              remain within specific geographic boundaries, say so explicitly. If you need 
              24/7 support, state it clearly.
            </p>

            <h2>How AI Uses Your Responses</h2>
            <p>
              Understanding how Paperfly's AI processes your research form can help you provide 
              better information:
            </p>

            <ul>
              <li>
                <strong>Context Building:</strong> Your responses create a comprehensive project 
                profile that informs every section of your RFP
              </li>
              <li>
                <strong>Requirement Extraction:</strong> The AI identifies technical, functional, 
                and business requirements from your detailed descriptions
              </li>
              <li>
                <strong>Evaluation Framework:</strong> Your success metrics and vendor criteria 
                shape the scoring rubric in your RFP
              </li>
              <li>
                <strong>Risk Management:</strong> Challenges you identify inform the risk 
                mitigation sections and proposal requirements
              </li>
              <li>
                <strong>Compliance Mapping:</strong> Regulatory requirements are automatically 
                incorporated into relevant RFP sections
              </li>
            </ul>

            <p>
              The more comprehensive and specific your responses, the more sophisticated and 
              accurate your AI-generated RFP will be.
            </p>

            <h2>Conclusion</h2>
            <p>
              Writing effective research forms is both an art and a science. It requires 
              balancing thoroughness with clarity, specificity with flexibility, and technical 
              detail with accessibility. The time you invest in completing your research form 
              thoughtfully pays dividends in the quality of your RFP and, ultimately, in the 
              quality of vendor proposals you receive.
            </p>

            <p>
              Remember: your research form is the foundation of your entire procurement process. 
              A well-crafted form leads to a precise RFP, which attracts qualified vendors, 
              which results in better proposals, which leads to successful projects. Each 
              question is an opportunity to communicate your needs clearly and set your 
              project up for success.
            </p>

            <p>
              By following the guidance in this article, you'll be able to provide the rich 
              context Paperfly's AI needs to generate RFPs that truly reflect your project's 
              unique requirements and position you to find the perfect vendor partner.
            </p>

            <div className="not-prose text-center my-16">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Ready to create your first AI-powered RFP?
              </h3>
              <p className="text-xl text-slate-600 mb-8">
                Put these best practices to work with Paperfly
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "border-2 border-[#005DF2] text-[#005DF2] hover:bg-[#005DF2] hover:text-white px-8 py-4 text-lg transition-all duration-200 bg-transparent"
                  )}
                  href={DEMO_BOOKING_URL}
                  target="_blank"
                >
                  Book a demo today
                </a>
              </div>
            </div>
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default EffectiveResearchForms;
