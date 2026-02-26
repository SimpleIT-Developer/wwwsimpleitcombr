import { motion } from 'framer-motion';

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative flex justify-center items-center h-full w-full"
    >
      <motion.div
        className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] border-4 border-blue-500/80 rounded-3xl flex items-center justify-center overflow-hidden bg-blue-950/20 backdrop-blur-sm"
        animate={{
          boxShadow: [
            '0 0 20px 5px rgba(59, 130, 246, 0.3)',
            '0 0 40px 10px rgba(59, 130, 246, 0.5)',
            '0 0 20px 5px rgba(59, 130, 246, 0.3)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Inner glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent"></div>
        
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          <img 
            src="https://horizons-cdn.hostinger.com/bfb9776d-d169-492a-b1f0-7b06b82ba499/29d36908103d2c7d2f22674f69120f0d.png" 
            alt="Mascote SimpleIT" 
            className="w-56 h-auto md:w-80 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          />
        </motion.div>
      </motion.div>

      {/* Background blurs for extra neon effect */}
      <motion.div
        className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-600/20 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </motion.div>
  );
};

export default HeroImage;
