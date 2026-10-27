import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, IconButton } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { keyframes } from '@emotion/react';

const CYAN = '#38bdf8';
const INDIGO = '#6366f1';
const TEXT = '#e6edf7';
const SOFT = '#cbd5e1';

const links = [
  { label: 'Merch', to: '/merch' },
  { label: 'Events', to: '/events' },
  { label: 'Articles', to: '/articles' },
  { label: 'Meet The Team', to: '/meettheteam' },
  { label: 'Contact Us', to: '/contactus' },
  { label: 'Resources', to: '/resources' },
];

const dropIn = keyframes`from { transform: translateY(-100%); } to { transform: none; }`;

function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [pill, setPill] = useState({ left: 0, width: 0, visible: false, animate: false });
  const itemRefs = useRef([]);
  const placed = useRef(false);

  const activeIndex = links.findIndex(
    ({ to }) => pathname === to || pathname.startsWith(to + '/')
  );
  const target = hovered !== null ? hovered : activeIndex;

  // Scroll state + progress line
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 12);
      setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  // Close the mobile menu when the page changes
  useEffect(() => { setOpen(false); }, [pathname]);

  // Position the sliding highlight
  const measure = useCallback(() => {
    const el = itemRefs.current[target];
    if (!el) {
      setPill((p) => ({ ...p, visible: false }));
      return;
    }
    setPill({ left: el.offsetLeft, width: el.offsetWidth, visible: true, animate: placed.current });
    placed.current = true;
  }, [target]);

  useLayoutEffect(() => { measure(); }, [measure, scrolled, pathname]);

  useEffect(() => {
    window.addEventListener('resize', measure);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  return (
    <Box
      component="header"
      sx={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1100,
        height: scrolled ? 60 : 76,
        display: 'flex', alignItems: 'center',
        bgcolor: scrolled ? 'rgba(4,16,31,0.82)' : 'rgba(4,16,31,0.4)',
        backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
        borderBottom: `1px solid rgba(148,163,184,${scrolled ? 0.22 : 0.08})`,
        transition: 'height .3s ease, background-color .3s ease, border-color .3s ease',
        animation: `${dropIn} .6s ease both`,
        '@media (prefers-reduced-motion: reduce)': {
          animation: 'none',
          '&, & *': { transition: 'none !important' },
        },
      }}
    >
      <Box sx={{
        width: '100%', maxWidth: 1200, mx: 'auto', px: { xs: 2, md: 3 },
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo + wordmark */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none',
            '&:hover img': { transform: 'rotate(-8deg) scale(1.08)' },
          }}
        >
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/favicon.svg`}
            alt="ECE Club logo"
            sx={{ height: scrolled ? 32 : 38, transition: 'height .3s ease, transform .3s ease' }}
          />
          <Box sx={{
            fontFamily: "'Space Grotesk', 'Inter', sans-serif", fontWeight: 700,
            fontSize: 20, color: TEXT, letterSpacing: 0.3,
          }}>
            ECE Club
          </Box>
        </Box>

        {/* Desktop links */}
        <Box
          component="nav"
          aria-label="Main"
          onMouseLeave={() => setHovered(null)}
          sx={{ display: { xs: 'none', md: 'flex' }, position: 'relative', gap: 0.5 }}
        >
          <Box sx={{
            position: 'absolute', top: '50%', height: 38, transform: 'translateY(-50%)',
            left: pill.left, width: pill.width, opacity: pill.visible ? 1 : 0,
            borderRadius: 999, pointerEvents: 'none',
            bgcolor: 'rgba(56,189,248,0.12)', border: '1px solid rgba(56,189,248,0.35)',
            boxShadow: '0 0 24px -6px rgba(56,189,248,0.55)',
            transition: pill.animate
              ? 'left .35s cubic-bezier(.4,0,.2,1), width .35s cubic-bezier(.4,0,.2,1), opacity .2s ease'
              : 'opacity .2s ease',
          }} />
          {links.map(({ label, to }, i) => {
            const isActive = i === activeIndex;
            const lit = isActive || hovered === i;
            return (
              <Box
                key={to}
                component={Link}
                to={to}
                ref={(el) => { itemRefs.current[i] = el; }}
                onMouseEnter={() => setHovered(i)}
                aria-current={isActive ? 'page' : undefined}
                sx={{
                  position: 'relative', zIndex: 1, px: 2, py: 1,
                  fontFamily: "'Inter', sans-serif", fontSize: 15, fontWeight: 500,
                  textDecoration: 'none', whiteSpace: 'nowrap',
                  color: lit ? '#fff' : SOFT, transition: 'color .2s ease',
                }}
              >
                {label}
              </Box>
            );
          })}
        </Box>

        {/* Mobile menu button */}
        <IconButton
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          sx={{ display: { xs: 'inline-flex', md: 'none' }, color: TEXT }}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>

      {/* Mobile dropdown */}
      <Box sx={{
        display: { xs: 'block', md: 'none' },
        position: 'absolute', top: '100%', left: 0, right: 0, overflow: 'hidden',
        maxHeight: open ? 460 : 0,
        bgcolor: 'rgba(4,16,31,0.96)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
        borderBottom: open ? '1px solid rgba(148,163,184,0.22)' : '1px solid transparent',
        transition: 'max-height .4s ease, border-color .3s ease',
      }}>
        <Box component="nav" aria-label="Mobile" sx={{ display: 'flex', flexDirection: 'column', p: 2, gap: 0.5 }}>
          {links.map(({ label, to }, i) => {
            const isActive = i === activeIndex;
            return (
              <Box
                key={to}
                component={Link}
                to={to}
                tabIndex={open ? 0 : -1}
                aria-current={isActive ? 'page' : undefined}
                sx={{
                  px: 2, py: 1.4, borderRadius: 2, textDecoration: 'none',
                  fontFamily: "'Inter', sans-serif", fontSize: 17, fontWeight: 500,
                  color: isActive ? '#fff' : SOFT,
                  bgcolor: isActive ? 'rgba(56,189,248,0.14)' : 'transparent',
                  borderLeft: `3px solid ${isActive ? CYAN : 'transparent'}`,
                  opacity: open ? 1 : 0,
                  transform: open ? 'none' : 'translateX(-12px)',
                  transition: 'opacity .3s ease, transform .3s ease, background-color .2s ease',
                  transitionDelay: open ? `${80 + i * 50}ms` : '0ms',
                  '&:hover': { bgcolor: 'rgba(56,189,248,0.1)', color: '#fff' },
                }}
              >
                {label}
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Scroll progress line */}
      <Box sx={{
        position: 'absolute', left: 0, bottom: -1, height: 2, width: `${progress}%`,
        background: `linear-gradient(90deg, ${CYAN}, ${INDIGO})`,
        transition: 'width .1s linear', pointerEvents: 'none',
      }} />
    </Box>
  );
}

export default Navbar;