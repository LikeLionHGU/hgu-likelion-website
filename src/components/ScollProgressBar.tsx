import { motion, useScroll, useTransform } from 'framer-motion';
import { useMatch } from 'react-router-dom';
import group5185 from '../assets/group5185.svg';

export default function ScollProgressBar() {
  const isProjectDetail = useMatch('/projects/:projectId');
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, (value) => `${Math.min(1, Math.max(0, value)) * 100}%`);
  // The project detail design does not include the sticky banner.
  if (isProjectDetail) return null;

  return (
    <motion.div
      style={{
        width,
        position: 'sticky',
        bottom: 0,
        left: 0,
        right: 0,
        height: 34,
        backgroundImage: `url(${group5185})`,
        transformOrigin: '0%',
      }}
    />
  );
}
