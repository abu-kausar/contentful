import React from "react";

interface CampaignTickerProps {
    campaignTickerText: string;
}

const CampaignTicker = ({ campaignTickerText }: CampaignTickerProps) => (
  <a target="_blank" rel="noreferrer">
    <div className="marquee flex justify-center items-center">
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
