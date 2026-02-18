import { GetStartedButton } from '@/entities/landing/ui/GetStartedButton';
import { container, item } from '@/shared/lib/animation';
import { motion } from 'motion/react';
export const Hero = () => {
  return (
    <motion.section
      className='container mx-auto px-6 pt-24 pb-24 text-center lg:pt-32'
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h1
        variants={item}
        className='text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl mb-6'
      >
        Manage all your workspaces <br />
        <span className='text-primary'>in one powerful platform</span>
      </motion.h1>

      <motion.p
        variants={item}
        className='mx-auto max-w-[750px] text-lg text-muted-foreground sm:text-xl mb-10 leading-relaxed'
      >
        Create projects, assign tasks, invite your team, and track progress -
        everything you need to stay organized and productive in a single, clean
        interface
      </motion.p>

      <motion.div variants={item} className='flex justify-center'>
        <GetStartedButton />
      </motion.div>
    </motion.section>
  );
};
