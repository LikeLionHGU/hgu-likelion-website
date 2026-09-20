import { motion, useScroll, useTransform } from 'framer-motion';
import { useMatch } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';
import group5185 from '../assets/group5185.svg';

export default function ScollProgressBar() {
  const isProjectDetail = useMatch('/projects/:projectId');
  const isGallery = useMatch('/gallery/*');
  const isMain = useMatch('/');
  const isTeam = useMatch('/team');
  const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, (value) => `${Math.min(1, Math.max(0, value)) * 100}%`);
  // These photo-focused designs do not include the sticky banner.
  if (isProjectDetail || isGallery || isTeam || (isMain && isMobile)) return null;

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
