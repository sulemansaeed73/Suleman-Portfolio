// Framer Motion Animation Variants & Physics configurations

// Apple-style Quintic ease-out curve (same as in arsil-imam-portfolio)
export const quinticEase = [0.22, 1, 0.36, 1];

// Viewport configuration for scroll triggers
export const defaultViewport = {
  once: true,
  amount: 0.2,
};

// Fade In Up
export const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: quinticEase,
    },
  },
};

// Fade In Down
export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: quinticEase,
    },
  },
};

// Slide In Left
export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: quinticEase,
    },
  },
};

// Slide In Right
export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: quinticEase,
    },
  },
};

// Scale & Pop
export const popScale = {
  hidden: { opacity: 0, scale: 0.88, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: quinticEase,
    },
  },
};

// Stagger Container
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0.1) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Spring interaction variants
export const buttonSpring = {
  hover: {
    scale: 1.05,
    y: -3,
    boxShadow: "0 8px 25px rgba(30, 144, 255, 0.45)",
    transition: {
      type: "spring",
      stiffness: 450,
      damping: 18,
    },
  },
  tap: {
    scale: 0.94,
  },
};

// Card Hover Lift
export const cardHover = {
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 14px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(30, 144, 255, 0.25)",
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 20,
    },
  },
};

// Tech pill micro-rotation on hover
export const pillHover = (rotate = 2) => ({
  hover: {
    y: -4,
    rotate: rotate,
    scale: 1.06,
    transition: {
      type: "spring",
      stiffness: 450,
      damping: 16,
    },
  },
  tap: {
    scale: 0.95,
  },
});

// Floating element loop animation
export const floatLoop = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
