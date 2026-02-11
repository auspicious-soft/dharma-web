import React, { useState } from 'react';
import ModuleIcon from "@/assets/module-icon.png"
import { NavArrowRight, NavArrowUp } from 'iconoir-react';

interface Module {
  id: string;
  title: string;
  description: string;
  expandable: boolean;
}

interface RightModule {
  id: string;
  title: string;
  description: string;
  expandedContent: string;
}

const CourseModulesFaq: React.FC = () => {
  const [expandedLeftModule, setExpandedLeftModule] = useState<string | null>('00.0');
  const [expandedRightModule, setExpandedRightModule] = useState<string | null>(null);

  // Left side data - Main modules
  const leftModules: Module[] = [
    {
      id: '00.0',
      title: 'Module 00.0: Welcome',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      expandable: true
    },
    {
      id: '00.2',
      title: 'Module 00.2: The CAPM Exam',
      description: 'Learn about the CAPM certification exam structure, requirements, and preparation strategies.',
      expandable: true
    },
    {
      id: '2',
      title: 'Module 2: Project Roles',
      description: 'Understand different roles in project management including project managers, team members, and stakeholders.',
      expandable: true
    },
    {
      id: '3',
      title: 'Module 3: Project Life Cycle & Development Approach',
      description: 'Explore various project life cycles and development approaches used in modern project management.',
      expandable: true
    },
    {
      id: '4',
      title: 'Module 4: Risk Management Strategies',
      description: 'Learn how to identify, assess, and mitigate risks throughout the project lifecycle.',
      expandable: true
    },
    {
      id: '5',
      title: 'Module 5: Stakeholder Engagement',
      description: 'Master techniques for effective stakeholder communication and engagement throughout projects.',
      expandable: true
    },
    {
      id: '6',
      title: 'Module 6: Agile Methodologies',
      description: 'Discover agile principles, frameworks, and practices for iterative project delivery.',
      expandable: true
    },
    {
      id: '7',
      title: 'Module 7: Quality Assurance Processes',
      description: 'Understand quality planning, assurance, and control processes to ensure project success.',
      expandable: true
    },
    {
      id: '8',
      title: 'Module 8: Performance Measurement & Control',
      description: 'Learn techniques for monitoring project performance and implementing corrective actions.',
      expandable: true
    }
  ];

  // Right side data - Sub-modules
  const rightModules: RightModule[] = [
    {
      id: '00',
      title: 'Module 00 – Welcome & Course Overview',
      description: 'Introduction to the PMP On-Demand Course and learning roadmap.',
      expandedContent: 'Welcome to the PMP certification journey! This module provides a comprehensive overview of the course structure, learning objectives, and roadmap. You\'ll understand what to expect throughout the program and how to maximize your learning experience.'
    },
    {
      id: '01',
      title: 'Module 01 – Exam Structure & FAQs',
      description: 'Understand PMP exam format, eligibility, and scoring approach.',
      expandedContent: 'Learn everything about the PMP exam including the question format, duration, passing criteria, eligibility requirements, application process, and commonly asked questions. This module prepares you for what to expect on exam day.'
    },
    {
      id: '02',
      title: 'Module 02 – Project Management Overview',
      description: 'Core principles, environments, and foundational concepts.',
      expandedContent: 'Explore the fundamental principles of project management, understand different project environments, and learn the core concepts that form the foundation of effective project delivery across industries.'
    },
    {
      id: '03',
      title: 'Module 03 – Project Roles & Governance',
      description: 'Stakeholders, governance models, and organizational structures.',
      expandedContent: 'Deep dive into project roles including project managers, sponsors, team members, and stakeholders. Understand governance frameworks, decision-making hierarchies, and how organizational structures impact project execution.'
    },
    {
      id: '04',
      title: 'Module 04 – Project Life Cycles & Approaches',
      description: 'Predictive, Agile, and Hybrid project life cycles explained.',
      expandedContent: 'Master different project life cycles including Predictive (Waterfall), Agile, and Hybrid approaches. Learn when to use each methodology and how to adapt your approach based on project requirements and organizational context.'
    },
    {
      id: '05',
      title: 'Module 05 – Project Management Concepts',
      description: 'Leadership, team management, and value delivery.',
      expandedContent: 'Develop essential leadership skills, learn effective team management techniques, and understand how to deliver value throughout the project lifecycle. Focus on servant leadership, motivation, and stakeholder satisfaction.'
    },
    {
      id: '06',
      title: 'Module 06 – Project Artifacts',
      description: 'WBS, schedules, cost baselines, and key documentation.',
      expandedContent: 'Learn to create and manage critical project artifacts including Work Breakdown Structures (WBS), project schedules, cost baselines, risk registers, and other essential documentation for successful project delivery.'
    }
  ];
 
  const toggleLeftModule = (moduleId: string): void => {
    setExpandedLeftModule(expandedLeftModule === moduleId ? null : moduleId);
  };

  const toggleRightModule = (moduleId: string): void => {
    setExpandedRightModule(expandedRightModule === moduleId ? null : moduleId);
  };

  return (
      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
            <div className=" flex flex-col justify-center items-center mb-6 md:mb-10 text-center">
                <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">PMP® On-Demand Course</h2>
                <p className="text-paragraph text-sm font-normal mt-1">Self-paced PMP® certification training designed for busy professionals who want flexible, expert-led learning.</p>
            </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* LEFT SECTION */}
          <div className="space-y-3 md:space-y-5">
            {leftModules.map((module) => (
              <div
                key={module.id}
                className="bg-light-blue rounded-[8px] transition-shadow"
              >
                <div
                  className="flex items-center justify-between pr-4 p-2 cursor-pointer"
                  onClick={() => toggleLeftModule(module.id)}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="">
                      <img src={ModuleIcon} alt='Module Icon' className='w-8 h-8' />
                    </div>
                      <h3 className="text-Black_light text-sm lg:text-base font-semibold">
                      {module.title}
                    </h3>
                  </div>
                  {module.expandable ? (
                    expandedLeftModule === module.id ? (
                      <NavArrowUp className="w-5 h-5 text-Black_light flex-shrink-0" />
                    ) : (
                      <NavArrowRight className="w-5 h-5 text-Black_light flex-shrink-0" />
                    )
                  ) : (
                    <NavArrowRight className="w-5 h-5 text-Black_light flex-shrink-0" />
                  )}
                </div>
                
                {module.expandable && expandedLeftModule === module.id && (
                   <div className="px-4 pb-3">
                    <div className="pl-8">
                    <p className="text-paragraph text-xs font-medium leading-6">
                      {module.description}
                    </p>
                  </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT SECTION */}
          <div className="space-y-3 md:space-y-5">
            {rightModules.map((module) => (
              <div
                key={module.id}
                  className="bg-light-blue rounded-[8px] transition-shadow"
              >
                <div 
                 className="flex items-center justify-between pr-4 p-2 cursor-pointer"
                  onClick={() => toggleRightModule(module.id)}
                >
                     <div className="flex items-center gap-2.5">
                    <div className="">
                      <img src={ModuleIcon} alt='Module Icon' className='w-8 h-8' />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-Black_light text-sm lg:text-base font-semibold">
                        {module.title}
                      </h3>
                      <p className="text-paragraph text-xs font-medium mt-1">
                        {module.description}
                      </p>
                    </div>
                  </div>
                  {expandedRightModule === module.id ? (
                    <NavArrowUp className="w-5 h-5 text-Black_light flex-shrink-0 transition-colors" />
                  ) : (
                    <NavArrowRight className="w-5 h-5 text-Black_light flex-shrink-0 transition-colors" />
                  )}
                </div>
                
                {expandedRightModule === module.id && (
                 <div className="px-4 pb-3">
                    <div className="pl-8">
                    <p className="text-paragraph text-xs font-medium leading-6">
                        {module.expandedContent}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseModulesFaq;