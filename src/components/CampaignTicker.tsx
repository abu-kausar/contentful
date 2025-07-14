"use client"
import { CampaignTickerProps } from "@/app/utils/types";
import React from "react";

const CampaignTicker = ({ campaignTickerText, marqueeTickerLink }: CampaignTickerProps) => (
  <a href={marqueeTickerLink} target="_blank" rel="noreferrer">
    <div className="marquee flex justify-center items-center cursor-pointer">
      <div className="marquee-content">
        {[...Array(25)].map((val, ind) => (
          <div className="marquee-item" key={ind}>
            {campaignTickerText}
          </div>
        ))}
      </div>
    </div>
  </a>
);

export default CampaignTicker;
