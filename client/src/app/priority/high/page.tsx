import React from 'react';
import ReusablePriorityPage from '../resuablePriorityPage';
import { Priority } from '@/state/api';

const Urgent = () => {
  
    return <ReusablePriorityPage priority={Priority.High} />; // Fixed the JSX closing tag

};

export default Urgent;