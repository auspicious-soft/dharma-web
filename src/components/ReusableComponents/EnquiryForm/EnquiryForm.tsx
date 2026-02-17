"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CallIcon, EmailIcon, MapIcon } from "@/utils/svgicons";
import { Label } from "@/components/ui/label";

const EnquiryForm = () => {
  return (
    <section className=" py-10 md:py-14 lg:py-20">
      <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
        <div className="bg-light-blue rounded-[20px] grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-5 md:p-10 lg:p-14 px-4 py-7">
          {/* Left Content */}
          <div>
            <h2 className="text-Black_light text-2xl md:text-3xl md:leading-[46px] font-bold">
              We’d Love to <br /> Hear from You
            </h2>
            <h4 className="text-[#1f1f1f] text-base font-medium leading-6 mt-3">
              vCare Project Management LLC
            </h4>
            <div className="mt-7 space-y-3 text-[#666666]">
              <div className="flex gap-4">
                <div className="flex items-center justify-center size-9 min-w-9 relative bg-[#4c8dea] rounded-[99px] mt-0.5">
                  <MapIcon />
                </div>
                <div>
                  <p className="text-[#666666] text-sm font-normal leading-6">
                    325 N. Saint Paul St. Suite 3100 <br />
                    Dallas TX 75201
                  </p>
                </div>
              </div>

              {/* Emails */}
              <div className="flex gap-4">
                <div className="flex items-center justify-center size-9 min-w-9 relative bg-[#4c8dea] rounded-[99px] mt-0.5">
                  <EmailIcon />
                </div>
                <div className="space-y-1 text-[#666666] text-sm font-normal leading-6">
                  <p>
                    <a
                      href="mailto:info@vcareprojectmanagement.com"
                      className="hover:text-primary_blue transition"
                    >
                      info@vcareprojectmanagement.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:team@vcareprojectmanagement.com"
                      className="hover:text-primary_blue transition"
                    >
                      team@vcareprojectmanagement.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center justify-center size-9 min-w-9 relative bg-[#4c8dea] rounded-[99px] mt-0.5">
                  <CallIcon />
                </div>
                {/* Phone Numbers */}
                <div className="space-y-1 text-[#666666] text-sm font-normal leading-6">
                  <p>
                    <a
                      href="tel:+19727280388"
                      className="hover:text-primary_blue transition"
                    >
                      +1 972-728-0388
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+16502830123"
                      className="hover:text-primary_blue transition"
                    >
                      +1 650-283-0123
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[#4c8dea] text-xl font-bold">
              Enquiry Form
            </h3>

            <div className="space-y-3">
              {/* Subject Select */}
              <div>
                <Label>
                  Subject
                </Label>
                <Select>
                  <SelectTrigger  className="mt-1 h-14 w-full border border-input shadow-none border-[#e4e4e4] p-4 bg-white/80 rounded-full text-[#7a7a7a] text-xs">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="training">Training</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Full Name */}
              <div>
                <Label>
                  Full Name
                </Label>
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  className="mt-1"
                />
              </div>

              {/* Email */}
              <div>
                <Label>
                  Email Address
                </Label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1"
                />
              </div>

              {/* Phone */}
              <div>
                <Label>
                  Phone Number
                </Label>
                <Input
                  type="tel"
                  placeholder="+1 857 458 7569"
                  className="mt-1"
                />
              </div>

              {/* Message */}
              <div>
                <Label>
                  Your Message
                </Label>
                <Textarea
                  placeholder="Write your message here..."
                  className="mt-1 w-full shadow-none border border-input border-[#e4e4e4] p-4 bg-white/80 rounded-[10px] text-[#7a7a7a] text-xs min-h-[120px]"
                />
              </div>

              {/* Submit Button */}
              <Button className="w-full !mt-5">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
