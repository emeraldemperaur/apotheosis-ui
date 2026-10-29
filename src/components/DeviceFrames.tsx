import React from 'react';
import macbookFrame from '../assets/macbook-pro-frame.png';

export const DesktopFrame: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    return (
        <div className={`macbook-frame-wrapper ${className}`}>
            <div className="tv-wrap">
                <div className="tv-ram">
                    <img 
                        alt="Macbook Pro" 
                        src={macbookFrame} 
                    />
                </div>
                <div className="tv-video">
                    {children}
                </div>
            </div>
        </div>
    );
};

export const IphoneFrame: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    return (
        <div className={`device device-iphone-14 ${className}`}>
            <div className="device-frame">
                <div className="device-screen">
                    {children}
                </div>
            </div>
            <div className="device-stripe"></div>
            <div className="device-header"></div>
            <div className="device-sensors"></div>
            <div className="device-btns"></div>
            <div className="device-power"></div>
            <div className="device-home"></div>
        </div>
    );
};