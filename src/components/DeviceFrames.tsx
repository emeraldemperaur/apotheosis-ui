import React from 'react';

export const DesktopFrame: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    return (
        <div className={`macbook-frame-wrapper ${className}`}>
            <div className="tv-wrap">
                <div className="tv-ram">
                    <img 
                        alt="Macbook Pro" 
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiB7XZ9wocjdZwa7lnpoLnYJlMeJjnIfRTc-CXO4s1D_ZfUTB8VLWT9E6HnqY92i2OgcbstLIT1Kzz-Ju5feWx4vyu_K0Jc3UR22DO2Mpd_SivvNixaEXyP_0lOssquKWgVwtA1QO2jsDe8p6SPWCTStoB8YUsItLDoxhnSO3LQqHnzSZzs8c1nOuxdho4/s1600/ram-3.png" 
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