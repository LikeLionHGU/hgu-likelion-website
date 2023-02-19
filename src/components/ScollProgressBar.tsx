import { motion, useScroll, useTransform } from 'framer-motion';
import group5185 from '../assets/group5185.svg';

export default function ScollProgressBar() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, (value) => `${value * 100}%`);
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
