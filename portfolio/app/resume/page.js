import React from 'react';
import { renderToStream } from '@react-pdf/renderer';
import ResumeDoc from '@/components/resume-doc';
import dynamic from 'next/dynamic';

// Disable SSR for react-pdf components
const DynamicPDFDocument = dynamic(
  () => import('../../components/resume-doc'),
  {
    ssr: false,
  }
);

const ResumePage = () => {
  return <DynamicPDFDocument />;
};

export default ResumePage;
