import FooterPageHeroSection from "@/components/ReusableComponents/FooterPageHeroSection/FooterPageHeroSection";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";

import Ross from "@/assets/reviews/Ross Shuldberg.jpg";
import Clifton from "@/assets/reviews/Ross Shuldberg.jpg";
import Vernisha from "@/assets/reviews/Ross Shuldberg.jpg";
import { useState } from "react";
import DummyUser from "@/assets/dummy-user.svg";

const reviewImages = import.meta.glob(
  "@/assets/reviews/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
) as Record<string, string>;
type Testimonial = {
  name: string;
  designation?: string;
  title?: string;
  comment: string;
  image?: string;
  date?: string;
};
const getUserImage = (userName: string): string => {
  const imagePath = Object.keys(reviewImages).find((path) => {
    const fileName = path.split("/").pop()?.split(".")[0];

    return fileName?.toLowerCase() === userName.toLowerCase();
  });

  return imagePath ? reviewImages[imagePath] : DummyUser;
};
const testimonials: Testimonial[] = [
  {
    name: "Ross Shuldberg",
    designation: "Trustpilot review",
    date: "Sep 1, 2026",
    title: "PgMP Bootcamp and Follow-Up Support Review",
    comment:
      "Taking the PgMP bootcamp with Dharam and his team was an exceptional experience, and I cannot recommend the program highly enough for anyone pursuing the PMI-PgMP certification. What truly made the experience great was the intimate, smaller setting of the training. Because there are far fewer resources available for the PgMP compared to the PMP, I was initially quite apprehensive about finding adequate study support. Dharam and his team completely bridged that gap. The training sessions and study materials were comprehensive, clear, and exceptionally well-structured. Furthermore, Dharam's teaching approach was both professional and thoughtful. What set this program apart was his personal accessibility; he was remarkably approachable and made himself fully available outside of official bootcamp hours and long after the course was completed. The PgMP is a notoriously tough exam, and I genuinely could not have done it without Dharam's guidance and continuous follow-up support. While the program is an investment, it was entirely worth the money for the level of mentorship provided. If you are preparing for the PgMP, this course is an absolute game-changer.",
    // image: Ross,
  },
  {
    name: "Clifton Edwards",
    designation: "Trustpilot review",
    date: "Aug 29, 2026",
    title: "PgMP Bootcamp: Fantastic!",
    comment:
      "The PgMP Bootcamp course was very engaging, highly relevant, practical, and the information was up to date. The instructor demonstrated knowledge mastery of PgMP subject matter. The course materials were aligned with the PgMP Handbook 5th Ed. The instructor included real-world examples. Our class worked through practice questions together several times per day and this was highly beneficial; these were challenging practice questions which evoked logical reasoning, sequencing, and problem solving. The instructor engaged with each of the students therefore allowing us to benefit from one-another's experience and perspectives. The course slide deck goes to the level of providing explanations rather than simply listing high-level information. The additional course materials are indispensable to PgMP studies. I encourage anyone preparing for the PgMP to enroll in this PgMP Bootcamp.",
    // image: DummyUser,
  },
  {
    name: "Vernisha Ahyoung",
    designation: "Trustpilot review",
    date: "Aug 26, 2026",
    title: "Dharam is an excellent teacher",
    comment:
      "Dharam is an excellent teacher. His VCare service ensures that once you sign up with him, you will have all you need to pass your exam. I've done two courses with him. One in person and one virtual. I am very very satisfied. Please consider joining one of his courses.",
    // image: DummyUser,
  },
  {
    name: "Udeme Ibanga",
    designation: "Trustpilot review",
    date: "Aug 22, 2026",
    title: "Superb Expertise and Highly Recommended",
    comment:
      "I highly recommend Dharam Singh in this recently completed PfMP certification training. The programme was expertly delivered, well structured, and highly relevant to the PfMP examination. As a return student from the PgMP training, this is highly recommended. The trainer demonstrated exceptional knowledge of portfolio management, simplified complex concepts, and provided practical, exam-focused guidance. I completed the course with greater clarity, confidence, and readiness for the PfMP certification journey.",
    // image: DummyUser,
  },
  {
    name: "Frank Jimmy",
    designation: "Trustpilot review",
    date: "Aug 12, 2026",
    title: "I passed my PMO CP exam",
    comment:
      "I passed my PMO CP exam in flying colors, and this training was a major reason why. The course was well organized, engaging, and full of practical, real-world insights. The instructor's analogies and examples made complex topics easy to grasp and retain. This is more than exam prep, it's valuable professional development. Strongly recommend!",
    // image: DummyUser,
  },
  {
    name: "Scott Garrett",
    designation: "Trustpilot review",
    date: "Aug 3, 2026",
    title: "Dharam's PMI course was excellent",
    comment:
      "Dharam's PMI course was excellent. He explained complex project management concepts clearly, used practical examples, and made the material easy to understand. His teaching style was engaging, organized, and very helpful for exam preparation. I feel much more confident in my knowledge and better prepared for the PMP exam. I highly recommend Dharam's course to anyone pursuing their PMI certification.",
    // image: DummyUser,
  },
  {
    name: "Mandar Akhare",
    designation: "Trustpilot review",
    date: "Jul 8, 2026",
    title: "Exceptional Mentorship for PgMP & PfMP — Highly Recommended",
    comment:
      "I had the privilege of being mentored by Dharam Singh for both my PgMP and PfMP certification journeys, and I can confidently say it was one of the best professional learning decisions I've made. What sets Dharam apart is the structure and depth of his study material. Every topic is organized in a clear, logical flow that makes even the most complex concepts of program and portfolio management remarkably easy to absorb. The material doesn't just prepare you for the exam — it builds a genuine understanding of the discipline. Beyond the content, it was his real-world insight that made the biggest difference. Dharam has a rare ability to connect PMI frameworks with actual professional scenarios, helping you think like a program or portfolio manager rather than just memorize concepts. That perspective is invaluable, both for the exam and for real-world application. His timely doubt resolution, patient explanations, and personalized guidance kept me consistently motivated and confident throughout the journey. Whether it was clarifying a tricky ECO domain or offering exam-day strategy, his support was always prompt, precise, and encouraging. Thanks to his mentorship, I successfully cleared both PgMP and PfMP — a milestone that felt achievable because of his structured approach and unwavering support. If you are serious about earning your PgMP or PfMP certification, I wholeheartedly recommend Dharam Singh. You won't just pass the exam — you'll walk away as a stronger, more strategic professional.",
    // image: DummyUser,
  },
  {
    name: "Adam Vonyik",
    designation: "Trustpilot review",
    date: "Jun 30, 2026",
    title: "Overall great experience with Dharam…",
    comment:
      "Overall great experience with Dharam and vCare, could not have completed the PMP certification without him.",
    // image: DummyUser,
  },
  {
    name: "Pranita Bagtharia",
    designation: "Trustpilot review",
    date: "Jun 25, 2026",
    title: "Experience was great",
    comment:
      "Experience was great. They were very flexible to accommodate me as per my schedule. Very helpful in solving my questions and queries.",
    // image: DummyUser,
  },
  {
    name: "Marie Kabaria",
    designation: "Trustpilot review",
    date: "Jun 12, 2026",
    title: "The PMP instructor to use",
    comment:
      "The instructor was very knowledgeable. His course content was simplified and so easy to understand. He patiently responded to all questions. Hand holding us in areas where we needed help.",
    // image: DummyUser,
  },
  {
    name: "Martha",
    designation: "Trustpilot review",
    date: "Jun 10, 2026",
    title: "Smooth Learning",
    comment:
      "Dharam was a dedicated instructor, always following up to ensure you get the concepts and was always available to respond to your queries. I would recommend his courses over and over again.",
    // image: DummyUser,
  },
  {
    name: "Tshipiethata Morwaeng",
    designation: "Trustpilot review",
    date: "Jun 9, 2026",
    title: "I would recommend vCare day in day out",
    comment:
      "I would recommend vCare day in day out, my learning experience has been nothing short of incredible. I would like to extend my greatest gratitude to Dharam for all his efforts and assistance. Much appreciated!",
    // image: DummyUser,
  },
  {
    name: "Fatma",
    designation: "Trustpilot review",
    date: "Jun 8, 2026",
    title: "Recommendation",
    comment:
      "I had the privilege of being coached by Mr. Dharam Singh during my preparation for the PgMP certification. His deep knowledge of program management, structured coaching approach, and commitment to his students' success were instrumental in helping me achieve this important professional milestone in a very short time.",
    // image: DummyUser,
  },
  {
    name: "Susan J.",
    designation: "Trustpilot review",
    date: "May 31, 2026",
    title: "Dharam is very insightful and provided…",
    comment:
      "Dharam is very insightful and provided real-world examples that was relevant and helpful to the training.",
    // image: DummyUser,
  },
  {
    name: "Francisco Perez",
    designation: "Trustpilot review",
    date: "May 26, 2026",
    title: "Personalized and great RMP course",
    comment:
      "The RMP course was very specialized and tailored, so I will say it was a very personalized experience. Dharam is an excellent instructor, with tons of experience and real-life stories that make the course very easy to follow. I couldn't not recommend enough Dharam and vCare for any PMI related certifications. If in the future I need another training or course, vCare is my first option without a doubt.",
    // image: DummyUser,
  },
  {
    name: "SS Chaudhary",
    designation: "Trustpilot review",
    date: "May 15, 2026",
    title: "Interactive sessions",
    comment:
      "The instructor keeps you engaged all the time. It is a very interactive session.",
    // image: DummyUser,
  },
  {
    name: "Daniel Abebe",
    designation: "Trustpilot review",
    date: "Apr 23, 2026",
    title: "Dharam is an excellent coach and PGMP mentor",
    comment:
      "Dharam was an excellent support specifically in the PGMP coaching classes. Providing rich insight into what to expect during the PGMP test.",
    // image: DummyUser,
  },
  {
    name: "Rodney K",
    designation: "Trustpilot review",
    date: "Apr 23, 2026",
    title: "PfMP Success!! (Above Targets)",
    comment:
      "As a senior leader responsible for enterprise outcomes, I found vCare Project Management's PfMP Bootcamp to be highly aligned with the strategic demands of portfolio management. Dharam's instruction effectively bridges theory and practice, reinforcing the importance of governance, value optimization, and alignment with organizational strategy. vCare Project Management provided an exceptional, executive-level learning experience that was instrumental in my successful attainment of the PfMP certification. Dharam's Bootcamp goes well beyond exam preparation—it reinforces the critical shift from program-level execution to enterprise portfolio leadership. The training emphasizes the organizational and executive perspective required to align investments with strategic objectives, optimize value delivery, and enable informed decision-making at the highest levels. The exam simulator was equally impactful, closely reflecting the rigor and complexity of the actual exam while strengthening strategic thinking and judgment. The combination of structured content, practical application, and expert mentorship makes vCare a premier choice for senior leaders pursuing the PfMP.",
    // image: DummyUser,
  },
  {
    name: "Franziska Danteva",
    designation: "Trustpilot review",
    date: "Mar 18, 2026",
    title: "Excellent PgMP Bootcamp – Highly Informative and Well-Structured",
    comment:
      "I took the 3-day online PgMP bootcamp with Dharam and had a great experience. As a Program Manager, I found the course highly relevant and valuable for strengthening both my practical knowledge and my PgMP application. While the course is fast-paced, it is well-structured and easy to follow. Dharam is extremely knowledgeable and uses an in-depth, thoughtful approach to teaching, which helped make complex concepts much easier to understand. I would highly recommend this bootcamp to anyone preparing for the PgMP certification.",
    // image: DummyUser,
  },
  {
    name: "Mike Widawski",
    designation: "Trustpilot review",
    date: "Mar 13, 2026",
    title: "Passed PgMP exam",
    comment:
      "Dharam and vCare were a great help to me while I was preparing for the PgMP exam. After less than two months of studying, I passed the exam with an overall score above my target. Thank you!",
    // image: DummyUser,
  },
  {
    name: "Jatin Jajal",
    designation: "Trustpilot review",
    date: "May 4, 2026",
    title: "PMO CP Bootcamp",
    comment:
      "I joined and finished PMO-CP Bootcamp through vCare Project Management. The course was well organized, easy to understand and applicable to practical application to apply in setup of Project Management Office for the organization. The bootcamp covered various topics which covers Value Generating PMO Flywheel. The bootcamp was facilitated by Mr. Dharam and I found him experienced and knowledgeable for specific training. I was the only student on the course and vCare Project Management continued with the bootcamp, the company went extra miles to meet its customer expectations. Mr. Dharam made this bootcamp very interactive and engaged me during entire two days and cleared my doubts where I struggled. After attending the bootcamp, my knowledge in how PMO can meet customer expectations was improved and I received in depth knowledge on Value Generating PMO Flywheel. I can apply the knowledge immediately on a live project. I am incredibly happy with the bootcamp and recommend whoever would like to join PMO-CP bootcamp. In future, if I decide to pursue any Project Management related certifications, I do not hesitate to join through vCare Project Management and Mr. Dharam.",
    // image: DummyUser,
  },
  {
    name: "Chris Parlier",
    designation: "Trustpilot review",
    date: "May 2, 2026",
    title: "PMI Program Management Training Course",
    comment:
      "Vcare Project Management delivered an excellent Program Management certification experience. The training went beyond basic frameworks and focused on how programs actually operate—governance, benefits realization, stakeholder alignment, and managing interdependencies across multiple projects. The instructors were knowledgeable and clearly experienced, which made the sessions engaging and practical. The course content was well organized, easy to follow, and reinforced with realistic scenarios that mirror what program managers face in complex organizations. What Vcare does particularly well is balance certification readiness with real-world application. I walked away not only prepared for the certification, but better equipped to lead programs with confidence and clarity. This is a professional, well-run training organization that delivers real value.",
    // image: DummyUser,
  },
  {
    name: "Chris Parlier",
    designation: "Trustpilot review",
    date: "Feb 28, 2026",
    title: "Risk Management Certification Training Course",
    comment:
      "Outstanding Risk Management Training I had a great experience with Vcare Project Management’s Risk Management certification training. The course was well structured, practical, and directly applicable to real-world project environments. Concepts like risk identification, qualitative and quantitative analysis, and response planning were explained clearly and reinforced with strong examples. What really stood out was how the instructors connected theory to execution. This wasn’t just exam prep—it was professional development. The materials were thorough, the pacing was solid, and the support throughout the course was responsive and professional. Vcare does an excellent job of making complex topics approachable without oversimplifying them. I finished the course more confident in my ability to manage risk proactively across projects and programs. I would absolutely recommend Vcare to anyone serious about advancing their project or risk management skills.",
    // image: DummyUser,
  },
  {
    name: "Opinder Nath",
    designation: "Trustpilot review",
    date: "Feb 26, 2026",
    title: "PgMP Boot Camp in Sydney",
    comment:
      "I attended the PgMP Boot Camp in Sydney from 14–16 March 2025, facilitated by Dharam, and found it to be an outstanding learning experience. The program was well structured, and Dharam delivered each module with clarity, depth, and strong practical relevance. His ability to simplify complex concepts and adapt his teaching style to the diverse needs of the group made the sessions highly effective. Dharam’s approachable manner encouraged active participation, and his deep subject-matter expertise was evident throughout. I particularly valued his motivational guidance—he consistently reinforced our commitment to PMI certification and shared practical insights that will be invaluable on the journey ahead. I am grateful to have been part of this boot camp and highly recommend Dharam’s programs to anyone pursuing PgMP certification or looking to advance their career in program management.",
    // image: DummyUser,
  },
  {
    name: "Oscar Franco",
    designation: "Trustpilot review",
    date: "Feb 22, 2026",
    title: "Mr. Oscar Franco",
    comment:
      "Mr. Dharam Singh's course was engaging and thorough. Looking at real-life examples from colleagues in the course helped the ideas land more efficiently. I would definitely recommend this course to aspiring PMP applicants.",
    // image: DummyUser,
  },
  {
    name: "Prem Mohan",
    designation: "Trustpilot review",
    date: "Feb 20, 2026",
    title:
      "I passed it in first attempt - Training and Materials helped targeted focus",
    comment:
      "I passed it in one attempt. I had portfolio management experience just needed to know what PMI guidance is and Dharam hit those points and I loved that material was crisp enough to have a targeted focus to prep for exam",
    // image: DummyUser,
  },
  {
    name: "Shana Alegria",
    designation: "Trustpilot review",
    date: "Feb 20, 2026",
    title: "Amazing program",
    comment:
      "Amazing program! Dharam was informative, helpful, flexible and truly cares about this student's success.",
    // image: DummyUser,
  },
  {
    name: "Roberto Colmenero",
    designation: "Trustpilot review",
    date: "Feb 19, 2026",
    title: "Review for PMP Boot Camp",
    comment:
      "The instructor was great and knowledgeable. He explained the material thoroughly. We went over practice problems. He made the class engage and asked questions. Which made everyone get out of their comfort zone.",
    // image: DummyUser,
  },
  {
    name: "Marvin Gomez",
    designation: "Trustpilot review",
    date: "Feb 18, 2026",
    title: "Mr. Dharam Singh, PgMP",
    comment:
      "Mr. Dharam Singh, PgMP was very knowledgeable of the PMBOK and the Project Management Institute concepts and requirements. He was professional and offer a wealth of knowledge on Project Management and the concepts. I highly recommend Mr. Singh as an instructor.",
    // image: DummyUser,
  },
  {
    name: "Jesus Fernandez",
    designation: "Trustpilot review",
    date: "Feb 18, 2026",
    title: "Great PMP class",
    comment:
      "I finished the PMP class with Dharam, and it was a great experience, he was able to show the concepts as well to include real life experiences and examples that one could relate as a PM. He was attentive and eager to answer any questions. He kept the class engaged, and we were not just bombarded with PowerPoint slides; we had interactive exercises to illustrate the topics being covered",
    // image: DummyUser,
  },
  {
    name: "Indranath Mitra",
    designation: "Trustpilot review",
    date: "Feb 17, 2026",
    title: "Great PgMP Coaching and Mentoring",
    comment:
      "Heartfelt gratitude to Dharam Singh for his invaluable support and guidance throughout the credentialing journey. His mentorship made a meaningful difference! Dharam was supportive right from the application review, guidance on essays , to being available for any questions on WhatsApp.",
    // image: DummyUser,
  },
  {
    name: "Farhan Baboojee",
    designation: "Trustpilot review",
    date: "Feb 16, 2026",
    title: "Vcare's PgMP training course",
    comment:
      "Vcare Training’s PgMP course was genuinely one of the best learning experiences I’ve had. Dharam is an excellent trainer who explains everything so clearly and patiently. The training is very well balanced—structured, practical, and never overwhelming. He breaks down complex program management concepts in a way that makes them easy to understand and remember. I especially appreciated how he connects theory to real scenarios, which builds confidence for the exam and real work. Every session felt focused and valuable, and I always left with better clarity than I started with. If you’re serious about learning program management and preparing for PgMP, this course is absolutely worth it. Highly recommended for anyone looking to build strong program management knowledge.",
    // image: DummyUser,
  },
  {
    name: "Rajalakshmi Sangoji",
    designation: "Trustpilot review",
    date: "Feb 16, 2026",
    title: "The overall experience of attending the…",
    comment:
      "The overall experience of attending the training sessions and getting guidance from Dharam sir was wonderful and very helpful.",
  },
  {
    name: "Kamaldeep Varmani",
    designation: "Trustpilot review",
    date: "Feb 15, 2026",
    title: "PGMP",
    comment:
      "I had a very good experience preparing for my PgMP® with this course. It was intensive, but exactly what’s needed to prepare properly for the exam. The content was clear, well-structured, and aligned with the certification requirements. Dharam covered the complex topics that were explained in a simple and practical way, with real examples. The curriculum was well planned, instructions were clear, and there was always time for questions and discussions. I would recommend Mr. Dharam Singh and Vcare Project Management to anyone preparing for a PGMP certification.",
  },
  {
    name: "Jims Skariah",
    designation: "Trustpilot review",
    date: "Feb 14, 2026",
    title: "The power of Dharam's coaching",
    comment:
      "I had the privilege of learning from Dharam at vCare Project Management while preparing for the PgMP, and I can confidently say his guidance was instrumental in helping me pass on my very first attempt. Dharam’s depth of knowledge in program management is exceptional. What truly sets him apart is his ability to connect PMI standards and PgMP concepts with practical, real-world examples drawn from actual program environments. He doesn’t just teach theory — he translates complex framework elements like governance, benefits management, stakeholder engagement, and strategic alignment into scenarios that seasoned program managers can immediately relate to. His structured approach, clear articulation of exam expectations, and emphasis on application over memorization made a significant difference in my preparation. The mock discussions, scenario-based breakdowns, and insights into how PMI evaluates program-level thinking helped me shift from a project mindset to a true program management perspective. If you are serious about clearing the PgMP — especially on your first attempt — I highly recommend Dharam and vCare Project Management. His mentorship is practical, focused, and results-driven.",
  },
  {
    name: "Jochen Jung",
    designation: "Trustpilot review",
    date: "Feb 14, 2026",
    title: "PgMP exam preparation course",
    comment:
      "I can truly recommend vCare for preparing for the PgMP exam. The content outline and training format is excellent, covering all relevant aspects. The trainer is professional and authentic. As we were a very small group I appreciated the good interaction although it was an online course.",
  },
  {
    name: "Andrew Rigor",
    designation: "Trustpilot review",
    date: "Feb 11, 2026",
    title: "vCare's PgMP and PfMP mentorship program",
    comment:
      "I used vCare's mentorship program to prepare for both PgMP and PfMP. Dharam is one of very few people qualified and offering a PgMP and PfMP course, with his help to prepare I passed both exams the first time, at or above target for each section. Dharam goes through each section of the certification requirements using the latest published guidance, then engages in a conversation to ensure understanding. His program assists with every step in the process from application through exam, and includes access to the only PgMP and PfMP exam question practice test app that I am aware of.",
  },
  {
    name: "Ali Rizvi",
    designation: "Trustpilot review",
    date: "Feb 14, 2026",
    title: "User friendly",
    comment:
      "User friendly and easy to learn interfaces. Thoroughly enjoyed the experience. Help me to get my PfMP certification with ease.",
  },
  {
    name: "Jose Ceballos",
    designation: "Trustpilot review",
    date: "Feb 10, 2026",
    title: "PfMP Bootcamp",
    comment:
      "Dharam is an extremely knowledgeable trainer. Excellent experience.",
  },
  {
    name: "Chukwunonso Adirika",
    designation: "Trustpilot review",
    date: "Feb 9, 2026",
    title: "Awesome learning experience",
    comment:
      "I had a great experience with Vcare Project Management. Mr. Dharam explains complex topics clearly, and his technical knowledge is excellent. He is patient, encourages questions, and explains concepts using different approaches when needed. After completing the course, I felt confident not only about taking the exam but also about applying project management in real-world situations. I highly recommend Vcare Project Management.",
  },
  {
    name: "Obaid Haider",
    designation: "Trustpilot review",
    date: "Feb 9, 2026",
    title: "Exceptional Trainer with a Supportive Team",
    comment:
      "Dharam has exceptional depth of knowledge and real-world experience, which he explains in a clear and practical way. He genuinely focuses on transferring this knowledge to his students, ensuring they fully understand the concepts and are well prepared to successfully earn their certification. His mock exams are a powerful driver of success and an excellent way to challenge oneself. The Vcare team is equally supportive, well organized, and always quick to respond. Overall, this is a highly effective and positive learning experience and I strongly recommend Vcare Project Management to all PMI certification aspirants.",
  },
  {
    name: "Melvyn Chungath",
    designation: "Trustpilot review",
    date: "Feb 9, 2026",
    title: "Good material and practice test",
    comment:
      "Dharam’s knowledge in the area has helped me to understand the topics. Model questions were added support to identify gaps in my knowledge, thus helping to improvise my focus areas understanding.",
  },
  {
    name: "Kobzar Maksym",
    designation: "Trustpilot review",
    date: "Feb 9, 2026",
    title: "Material and course content is great",
    comment:
      "Material and course content is great. Support during all the course stages and the application is very valuable.",
  },
  {
    name: "Liliya Toneva",
    designation: "Trustpilot review",
    date: "Feb 9, 2026",
    title: "Thank you for the great training!",
    comment:
      "Thank you for the PMI Portfolio Management Professional (PfMP) training.",
  },
  {
    name: "Vishnu Nayudu",
    designation: "Trustpilot review",
    date: "Feb 8, 2026",
    title: "Best Trainer for PgMP & PfMP",
    comment:
      "I completed my PgMP® training with Mr. Dharam Singh from VCare Project & Program Management Institute, and it was one of the most effective and outcome-driven learning experiences I’ve had. Mr. Dharam has a deep command of PMI standards (PMBOK, PgMP Standard) and, more importantly, an exceptional ability to translate complex concepts into practical, exam-oriented understanding. His teaching style is structured, disciplined, and focused on why PMI expects a certain answer—not just what the answer is. What truly sets this training apart is: clear coverage of program life cycle, governance, benefits realization, and stakeholder engagement; strong emphasis on PgMP exam mindset and scenario-based questions; real-world examples that connect theory to practice; rigorous guidance for panel review and application readiness. Thanks to his mentoring and disciplined approach, I was able to confidently pass the PgMP certification. I highly recommend Mr. Dharam Singh and VCare to anyone serious about achieving PgMP—not just attending a class, but actually clearing the certification. A truly professional and results-oriented institute.",
  },
  {
    name: "Karan Bagga",
    designation: "Trustpilot review",
    date: "Feb 8, 2026",
    title: "Fantastic overall experience from start to finish",
    comment:
      "Fantastic overall experience from start to finish which included course selection, enrolment, payment, the course content and the course itself. Dharam is the best in class and is very thorough with wealth of experience. Pre and post course delivery support material along with ongoing connection helped a lot.",
  },
  {
    name: "Erika Lanciault",
    designation: "Trustpilot review",
    date: "Feb 8, 2026",
    title: "Resources are very helpful",
    comment:
      "The resources provided by vCare were very useful in preparing for my certification exams. vCare was also very helpful in reviewing my certification applications and providing insight and guidance to corrections.",
  },
  {
    name: "Moez Gharbi",
    designation: "Trustpilot review",
    date: "Feb 8, 2026",
    title: "vCare Outstanding Services",
    comment:
      "I am thrilled to give a five-star rating to vCare Project Management and especially to Mr. Dharam Singh for his exceptional one-on-one coaching services. His expertise and personalized approach significantly enhanced my preparations for the PgMP and PfMP training certifications. Mr. Singh's ability to clarify complex concepts and provide practical insights was invaluable. His supportive guidance kept me motivated and focused throughout the process. I can confidently say that without his coaching, I would not have achieved my certification goals. Thank you, Vcare, and Mr. Singh, for your outstanding support!",
  },
  {
    name: "Sivasis De",
    designation: "Trustpilot review",
    date: "Feb 7, 2026",
    title: "The mentoring from Dharam is what…",
    comment:
      "The mentoring from Dharam is what helped me complete the journey. Hats off to him!! He has put a lot of effort to customise the learning content as well, to highlight the segments accordingly. Kudos to him!!",
  },
  {
    name: "Rachelle Spencer",
    designation: "Trustpilot review",
    date: "Feb 7, 2026",
    title: "Dharam and the vCare PM team were very…",
    comment:
      "Dharam and the vCare PM team were very hands on in my journey to PgMP certification. From my first meeting with Dharam, I informed him of my interest in certification, and he handled the encouragement and understanding of the requirements for success! I am very thankful for Dharam's hands on mentoring and patience in my (very) long journey to successfully becoming PgMP certified. Thank you Dharam for the encouragement.",
  },
  {
    name: "Geetika Goel",
    designation: "Trustpilot review",
    date: "Feb 5, 2026",
    title: "Great working with vCare for PgMP exam",
    comment:
      "It was great experience working with vCare team. Dharam Singh provided great introductory training for the PgMP certification with lots of tips and tricks. I specially found the mock test provided by vCare and other documentation very useful giving an insight to some extent on what kind of questions can be expected. I passed the PgMP exam in the first attempt. Thanks.",
  },
  {
    name: "DAVIS THOMAS KOILPARAMBIL",
    designation: "Trustpilot review",
    date: "Feb 4, 2026",
    title: "PgMP Sessions That Improved My Understanding and Confidence",
    comment:
      "The PgMP training sessions helped me understand the Program Management Life Cycle in a very simple and clear way. The concepts were explained in an easy manner, which made it easier for me to grasp the PgMP content. I now feel much more confident about the subject and my PgMP preparation.",
  },
  {
    name: "Ryoko Ralston",
    designation: "Trustpilot review",
    date: "Feb 4, 2026",
    title: "vCare fully supports you until you pass the exam.",
    comment:
      "vCare Project Management's course material was well formatted and easy to understand. They fully support your certification journey until you pass.",
  },
  {
    name: "Jeremy Valentineharry",
    designation: "Trustpilot review",
    date: "Feb 4, 2026",
    title: "I really appreciated the practical and…",
    comment:
      "I really appreciated the practical and applicable examples used in the PMI-RMP course. Also, the human touch was always there in the approach. It was nothing short of amazing!!! Would definitely recommend.",
  },
  {
    name: "Jeanne Lee",
    designation: "Trustpilot review",
    date: "Feb 2, 2026",
    title: "PMI PfMP Certification …",
    comment:
      "Dharam was very helpful in the application process. I also took the online training and used the app for studying.",
  },
  {
    name: "Foivos Angelakis",
    designation: "Trustpilot review",
    date: "Feb 1, 2026",
    title: "PgMP exam prep",
    comment:
      "High-end certifications are not a walk in the park - Dharam is the person who will truly guide you with patience all the way though and make you feel and understand the concept and context. I appreciate and highly recommend his mentoring program for PgMP exam prep!",
  },
  {
    name: "Teslim Salawu",
    designation: "Trustpilot review",
    date: "Jan 31, 2026",
    title: "PGMP",
    comment: "Amazing course.",
  },
  {
    name: "Drew Nelson",
    designation: "Trustpilot review",
    date: "Jan 31, 2026",
    title: "PgMP Bootcamp",
    comment:
      "Dharam was engaging and made the training interesting. I would highly recommend anyone wishing to get their PgMP to attend one of his bootcamps.",
  },
  {
    name: "Kolleen Young",
    designation: "Trustpilot review",
    date: "Jan 30, 2026",
    title: "Amazing instructor",
    comment: "Amazing instructor, great communication, great coaching.",
  },
  {
    name: "Praxeda Ndagire",
    designation: "Trustpilot review",
    date: "Jan 30, 2026",
    title: "Delivery of the PgMP",
    comment:
      "The delivery of the programme certification modules in line with the Eco.",
  },
  {
    name: "NISHA JAYADAS",
    designation: "Trustpilot review",
    date: "Jan 29, 2026",
    title: "Game changer in PgMP and PfMP journey",
    comment:
      "I successfully cleared both my PgMP and PfMP exams, and Dharam and the vCare mock exam simulator played a major role in my success!! The questions closely matched real exam logic and helped me build the right pace, strategy, and confidence. Over a few weeks, completing all mock exams significantly sharpened my readiness. Whenever clarification was needed, Dharam’s prompt and logical explanations were extremely helpful. Big thanks to Dharam and the vCare team for creating such a high-quality platform!! it truly made a difference in my certification journey!",
  },
  {
    name: "Ren Dreyfe",
    designation: "Trustpilot review",
    date: "Jan 29, 2026",
    title: "PFMP exam prep course success",
    comment:
      "I took the PFMP exam prep course and was successful. Nice thing about the class is I was able to accommodate my work schedule by attending over a few weekends. Lots of material covered, and Dharam was a huge help with the application preparation, support.",
  },
  {
    name: "Hassan Khalifa",
    designation: "Trustpilot review",
     date: "Jan 29, 2026",
    title: "It helped me get my PgMP certificate",
    comment: "It helped me get my PgMP certificate.",
  },
  {
    name: "Eileen Aquino",
    designation: "Trustpilot review",
     date: "Jan 29, 2026",
    title: "I genuinely enjoyed being a guest…",
    comment:
      "I genuinely enjoyed being a guest speaker hosted by Dharam from Vcare Project Management. The session was well run, the audience was fully engaged, and the conversation opened the door to meaningful, practical insights. Vcare Project Management creates a professional, intentional environment that elevates the discussion and makes it easy to share expertise in a way that actually adds value. I am truly grateful for the opportunity to contribute and be part of this experience.",
  },
].map((testimonial) => ({
  ...testimonial,
  image: getUserImage(testimonial.name),
}));

const REVIEW_PREVIEW_LENGTH = 220;

const Reviews = () => {
  const [expandedReviews, setExpandedReviews] = useState<
    Record<string, boolean>
  >({});
  const [currentPage, setCurrentPage] = useState(1);

  const reviewsPerPage = 6;
  const totalPages = Math.ceil(testimonials.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const paginatedTestimonials = testimonials.slice(
    startIndex,
    startIndex + reviewsPerPage,
  );

  const toggleExpanded = (name: string) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <>
      <FooterPageHeroSection
        title="Transforming Careers. Inspiring Success."
        description="Discover authentic reviews and success stories from professionals around the world who have advanced their careers through our training programs. From aspiring project managers to experienced leaders, our programs have helped thousands gain new skills, earn globally recognized certifications, and achieve their professional goals. Join a global community of learners building confidence, earning certifications, and transforming their careers."
      />

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto text-center">
          <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
            What Our Learners Say
          </h2>
          <p className="text-paragraph text-sm md:text-base font-normal mt-2 max-w-[820px] mx-auto leading-[26px] md:leading-[30px]">
            Hear directly from professionals who have completed our training
            programs and exam preparation courses. Their feedback reflects the
            quality of our instructors, the effectiveness of our learning
            resources, and the confidence they gained to succeed in their
            certification journey.
          </p>
          <p className="text-paragraph text-sm md:text-base font-normal mt-3 max-w-[760px] mx-auto leading-[26px] md:leading-[30px]">
            We appreciate all of our customer feedback. Thank you for choosing
            vCare Project Management.
          </p>
        </div>

        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto mt-8 md:mt-12">
          {/* <div className="flex justify-end mb-6">
            <a
              href="https://g.page/vcare-project-management-LLC/review?gm"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#11406d] bg-white px-5 py-2.5 text-sm font-semibold text-[#11406d] transition hover:bg-[#11406d] hover:text-white"
            >
              Read Our Google Reviews
            </a>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {paginatedTestimonials.map((testimonial) => {
              const isExpanded = Boolean(expandedReviews[testimonial.name]);
              const shouldTruncate =
                testimonial.comment.length > REVIEW_PREVIEW_LENGTH;
              const commentText =
                shouldTruncate && !isExpanded
                  ? `${testimonial.comment.slice(0, REVIEW_PREVIEW_LENGTH).trim()}...`
                  : testimonial.comment;

              return (
                <article
                  key={`${testimonial.name}-${testimonial.title}`}
                  className="bg-white border border-[#E6EEF8] rounded-[8px] p-5 shadow-sm flex flex-col gap-4"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image ?? DummyUser}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <h3 className="text-Black_light text-base font-bold leading-6">
                        {testimonial.name}
                      </h3>
                      {testimonial.designation ? (
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-paragraph text-xs font-normal leading-5">
                            {testimonial.designation}
                          </p>
                          {testimonial.date ? (
                            <p className="text-paragraph text-xs font-normal leading-5">
                              {testimonial.date}
                            </p>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div
                    className="flex gap-1 text-[#f5a623]"
                    aria-label="5 star review"
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span
                        key={`${testimonial.name}-star-${index}`}
                        className="text-lg leading-none"
                      >
                        &#9733;
                      </span>
                    ))}
                  </div>

                  {testimonial.title ? (
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#11406d]">
                      {testimonial.title}
                    </p>
                  ) : null}

                  <p className="text-paragraph text-sm font-normal leading-[26px]">
                    {commentText}
                    {shouldTruncate ? (
                      <button
                        type="button"
                        className="ml-1 font-semibold text-[#11406d] underline underline-offset-2"
                        onClick={() => toggleExpanded(testimonial.name)}
                      >
                        {isExpanded ? "Less" : "More"}
                      </button>
                    ) : null}
                  </p>
                </article>
              );
            })}
          </div>

          {totalPages > 1 ? (
            <div className="mt-8 flex flex-col gap-4 border-t border-[#E6EEF8] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-paragraph">
                Showing {startIndex + 1}-
                {Math.min(startIndex + reviewsPerPage, testimonials.length)} of{" "}
                {testimonials.length} reviews
              </p>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((page) => Math.max(1, page - 1))
                  }
                  disabled={currentPage === 1}
                  className="rounded-full border border-[#DDEAF8] bg-white px-4 py-2 text-sm font-medium text-[#11406d] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="text-sm font-medium text-[#11406d]">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((page) => Math.min(totalPages, page + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="rounded-full border border-[#DDEAF8] bg-white px-4 py-2 text-sm font-medium text-[#11406d] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto text-center">
          <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
            Leave Us a Review
          </h2>
          <p className="text-paragraph text-sm md:text-base font-normal mt-3 max-w-[820px] mx-auto leading-[26px] md:leading-[30px]">
            Enjoyed your experience with vCare Project Management? We’d appreciate
            you sharing your experience. Your feedback helps us improve and helps
            other professionals make an informed choice.
          </p>
 
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://g.page/vcare-project-management-LLC/review?gm"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#11406d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d4d]"
            >
              <span aria-hidden="true">⭐</span>
              Write a Google Review
            </a>
            <a
              href="https://www.trustpilot.com/evaluate/vcareprojectmanagement.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#11406d] bg-white px-6 py-3 text-sm font-semibold text-[#11406d] transition hover:bg-[#11406d] hover:text-white"
            >
              <span aria-hidden="true">★</span>
              Write a Trustpilot Review
            </a>
          </div>
        </div>
      </section> */}

      <section className="bg-light-blue pb-10 md:pb-14 lg:pb-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto text-center">
          <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
            Trusted by Professionals Worldwide
          </h2>
          <p className="text-paragraph text-sm md:text-base font-normal mt-2 max-w-[840px] mx-auto leading-[26px] md:leading-[30px]">
            Our learners come from diverse industries, organizations, and
            countries, united by a common goal: earning globally recognized
            certifications and advancing their careers. Their success continues
            to inspire everything we do.
          </p>
          <p className="text-paragraph text-sm md:text-base font-normal mt-3 max-w-[760px] mx-auto leading-[26px] md:leading-[30px]">
            Ready to become our next success story? Explore our certification
            training programs and take the next step toward achieving your
            professional goals.
          </p>
        </div>
      </section>

      <TopFooterSection />
    </>
  );
};

export default Reviews;
