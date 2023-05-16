import React, { useEffect } from 'react';
import { useTheme } from 'next-themes'

function CalendlyWidget() {
  let { resolvedTheme } = useTheme()

  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
  }, []);

  return (
    <div className="calendly-inline-widget" data-url={`https://calendly.com/origin-intelligence/client-consultation/?hide_landing_page_details=1&hide_gdpr_banner=1${resolvedTheme === 'dark' ? "&primary_color=ffffff&text_color=d1d5db&background_color=040711" : "&primary_color=040711"}`} style={{ minWidth: '320px', height: '100%' }} />
  );
}

export default CalendlyWidget;
