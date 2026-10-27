import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { keyframes } from '@emotion/react';
import {
  Event, People, Inbox, Article, NewspaperOutlined,
  School, MeetingRoom, Forum, ArrowForward,
} from '@mui/icons-material';
import { DISCORD_URL } from '../config';

const CYAN = '#38bdf8';
const INDIGO = '#6366f1';
const AMBER = '#fbbf24';
const INK = '#04101f';
const TEXT = '#e6edf7';
const MUTED = '#94a3b8';

// Optional: put a photo in public/imgs/home/ and set this, e.g. '/imgs/home/hero.jpg'
const HERO_PHOTO = '';

const display = { fontFamily: "'Space Grotesk', 'Inter', sans-serif" };
const body = { fontFamily: "'Inter', sans-serif" };
const mono = { fontFamily: "'JetBrains Mono', 'Courier New', monospace" };

// Circuit-board tile, drawn in SVG and used as a repeating background
const circuitSvg = `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'>
<g fill='none' stroke='${CYAN}' stroke-opacity='0.22' stroke-width='1.2'>
<path d='M0 40h50l10 10h40l10-10h50'/><path d='M80 0v30l10 10v50l-10 10v70'/>
<path d='M0 120h30l10-10h30'/><path d='M120 160v-30l10-10h30'/></g>
<g fill='${CYAN}' fill-opacity='0.5'><circle cx='50' cy='40' r='2.5'/><circle cx='110' cy='40' r='2.5'/>
<circle cx='90' cy='90' r='2.5'/><circle cx='30' cy='120' r='2.5'/><circle cx='130' cy='120' r='2.5'/></g></svg>`;
const circuitBg = `url("data:image/svg+xml,${encodeURIComponent(circuitSvg)}")`;
const fadeMask = 'radial-gradient(ellipse at 70% 30%, #000 15%, transparent 72%)';

const fadeUp = keyframes`from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; }`;
const shift = keyframes`0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; }`;
const blink = keyframes`0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; }`;
const reduceMotion = { '@media (prefers-reduced-motion: reduce)': { animation: 'none !important' } };

const whatWeDo = [
  { icon: <Event />, title: 'Events', text: 'From the ECE Dinner Dance to socials, we run the events that make the program feel like a community.' },
  { icon: <School />, title: 'Mentorship', text: 'Lower-year ECE students get paired with upper-years who have been there.' },
  { icon: <MeetingRoom />, title: 'Spaces', text: 'We manage the ECE Common Room and Study Hall, so you have somewhere to hang out and work.' },
  { icon: <Forum />, title: 'Advocacy', text: 'We take academic concerns to ECE professors and represent students in the department.' },
];

const quickLinks = [
  { icon: Event, name: 'Events', link: '/events', info: 'Latest announcements and events' },
  { icon: NewspaperOutlined, name: 'Articles', link: '/articles', info: 'Tips for the best UofT experience' },
  { icon: People, name: 'Meet The Team', link: '/meettheteam', info: "Who's behind the scenes" },
  { icon: Inbox, name: 'Contact Us', link: '/contactus', info: 'Ways to reach the club' },
  { icon: Article, name: 'Resources', link: '/resources', info: 'Important club documents' },
];

const glass = {
  bgcolor: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(148,163,184,0.18)',
  backdropFilter: 'blur(8px)',
  borderRadius: 3,
  transition: 'transform .25s ease, border-color .25s ease, box-shadow .25s ease',
  '@media (hover: hover)': {
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: 'rgba(56,189,248,0.6)',
    boxShadow: '0 12px 40px -12px rgba(56,189,248,0.35)',
  },
},
};

const primaryBtn = {
  ...body, background: `linear-gradient(135deg, ${CYAN}, ${INDIGO})`, color: INK,
  fontWeight: 600, textTransform: 'none', borderRadius: 2, px: 3, py: 1.3,
  boxShadow: '0 8px 30px -8px rgba(56,189,248,0.6)',
  '&:hover': { filter: 'brightness(1.1)', boxShadow: '0 10px 36px -8px rgba(56,189,248,0.8)' },
};
const ghostBtn = {
  ...body, color: TEXT, fontWeight: 600, textTransform: 'none', borderRadius: 2, px: 3, py: 1.3,
  border: '1px solid rgba(148,163,184,0.4)',
  '&:hover': { borderColor: CYAN, color: CYAN, bgcolor: 'rgba(56,189,248,0.08)' },
};

function SectionTitle({ kicker, title }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography sx={{ ...mono, color: CYAN, fontSize: 13, letterSpacing: 1.5 }}>{kicker}</Typography>
      <Typography component="h2" sx={{ ...display, color: TEXT, fontWeight: 700, fontSize: { xs: 28, md: 38 }, mt: 0.5 }}>
        {title}
      </Typography>
    </Box>
  );
}

function Home() {
  const showDiscord = DISCORD_URL.startsWith('https');

  return (
    <div>
      {/* Hero */}
      <Box sx={{ position: 'relative', overflow: 'hidden', isolation: 'isolate' }}>
        {HERO_PHOTO && (
          <Box sx={{
            position: 'absolute', inset: 0, zIndex: -3, backgroundSize: 'cover', backgroundPosition: 'center',
            backgroundImage: `linear-gradient(180deg, rgba(10,17,36,0.55), rgba(10,17,36,0.95)), url(${HERO_PHOTO})`,
          }} />
        )}
        <Box sx={{
          position: 'absolute', inset: 0, zIndex: -2,
          backgroundImage: `radial-gradient(600px circle at 15% 20%, rgba(56,189,248,0.22), transparent 60%),
                            radial-gradient(700px circle at 85% 75%, rgba(99,102,241,0.28), transparent 60%)`,
        }} />
        <Box sx={{
          position: 'absolute', inset: 0, zIndex: -1, backgroundImage: circuitBg, backgroundSize: '160px 160px',
          WebkitMaskImage: fadeMask, maskImage: fadeMask,
        }} />

        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 11 } }}>
          <Grid2 container spacing={6} alignItems="center">
            <Grid2 xs={12} md={7} sx={{ animation: `${fadeUp} .7s ease both`, ...reduceMotion }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box component="img" src={`${process.env.PUBLIC_URL}/favicon.svg`} alt="" sx={{ width: 40, height: 40 }} />
                <Typography sx={{ ...mono, color: CYAN, fontSize: 13, letterSpacing: 1.5 }}>
                  <Box component="span" sx={{ color: AMBER }}>//</Box> THE UNIVERSITY OF TORONTO
                </Typography>
              </Box>

              <Typography component="h1" sx={{
                ...display, color: TEXT, fontWeight: 700, mt: 2, lineHeight: 1.05,
                fontSize: { xs: 40, sm: 52, md: 64 },
              }}>
                Electrical and Computer{' '}
                <Box component="span" sx={{
                  background: `linear-gradient(90deg, ${CYAN}, ${INDIGO}, ${CYAN})`, backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  animation: `${shift} 6s linear infinite`, ...reduceMotion,
                }}>
                  Engineering Club
                </Box>
              </Typography>

              <Typography sx={{ ...body, color: MUTED, fontSize: { xs: 18, md: 21 }, mt: 3, maxWidth: 560, lineHeight: 1.5 }}>
                Your first stop for life as an undergraduate ECE student at UofT.
              </Typography>

              <Box sx={{ mt: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {showDiscord && (
                  <Button href={DISCORD_URL} target="_blank" rel="noopener noreferrer" sx={primaryBtn} endIcon={<ArrowForward />}>
                    Join the Discord
                  </Button>
                )}
                <Button component={Link} to="/events" sx={showDiscord ? ghostBtn : primaryBtn}>
                  See upcoming events
                </Button>
              </Box>
            </Grid2>

            {/* Terminal card */}
            <Grid2 xs={12} md={5} sx={{ animation: `${fadeUp} .7s .15s ease both`, ...reduceMotion }}>
              <Box sx={{
                ...mono, bgcolor: 'rgba(4,16,31,0.75)', border: '1px solid rgba(148,163,184,0.25)', borderRadius: 3,
                backdropFilter: 'blur(10px)', boxShadow: '0 30px 80px -30px rgba(56,189,248,0.35)', overflow: 'hidden',
              }}>
                <Box sx={{ display: 'flex', gap: 1, px: 2, py: 1.5, borderBottom: '1px solid rgba(148,163,184,0.18)' }}>
                  {['#ff5f56', '#ffbd2e', '#27c93f'].map((c) => (
                    <Box key={c} sx={{ width: 11, height: 11, borderRadius: '50%', bgcolor: c, opacity: 0.85 }} />
                  ))}
                  <Typography sx={{ ...mono, color: MUTED, fontSize: 12, ml: 1 }}>ece@uoft: ~</Typography>
                </Box>
                <Box sx={{ p: 3, fontSize: 14.5, lineHeight: 2, color: TEXT }}>
                  <div><span style={{ color: CYAN }}>$</span> ece --about</div>
                  <div style={{ color: MUTED }}>&gt; student-run · undergraduate · UofT</div>
                  <div><span style={{ color: CYAN }}>$</span> ece --offers</div>
                  <div style={{ color: MUTED }}>&gt; events, mentorship, spaces, advocacy</div>
                  <div>
                    <span style={{ color: CYAN }}>$</span> ece --join
                    <Box component="span" sx={{ color: AMBER, ml: 0.5, animation: `${blink} 1s steps(1) infinite`, ...reduceMotion }}>▮</Box>
                  </div>
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </Box>

            {/* Who we are */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <SectionTitle kicker="// WHO WE ARE" title="Built by students, for students" />
        <Typography sx={{ ...body, color: MUTED, fontSize: { xs: 17, md: 19 }, lineHeight: 1.7, maxWidth: 780, mb: 5, mt: -2 }}>
          We're a team of student volunteers dedicated to student life and academics for undergraduate ECE
          students. If there's a large event that involves ECEs, odds are we're involved.
        </Typography>

        <Box sx={{
          display: 'grid', gap: 3,
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
        }}>
          {whatWeDo.map((item, i) => (
            <Box key={item.title} sx={{ ...glass, p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ color: CYAN, '& svg': { fontSize: 36 } }}>{item.icon}</Box>
                <Typography sx={{ ...mono, color: AMBER, fontSize: 13 }}>0{i + 1}</Typography>
              </Box>
              <Typography sx={{ ...display, color: TEXT, fontWeight: 700, fontSize: 22, mt: 2 }}>{item.title}</Typography>
              <Typography sx={{ ...body, color: MUTED, mt: 1, lineHeight: 1.6 }}>{item.text}</Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Explore */}
      <Container maxWidth="lg" sx={{ pt: 1, pb: { xs: 5, md: 8 } }}>
        <SectionTitle kicker="// EXPLORE" title="Find what you need" />
        <Box sx={{ display: 'grid', gap: 2.5, gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))' }}>
          {quickLinks.map(({ icon: Icon, name, link, info }) => (
            <Box key={name} component={Link} to={link} sx={{
              ...glass, p: 2.5, textDecoration: 'none', color: TEXT, display: 'block',
              '&:hover .arrow': { transform: 'translateX(4px)', color: CYAN },
            }}>
              <Icon sx={{ color: CYAN, fontSize: 30 }} />
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1.5 }}>
                <Typography sx={{ ...display, fontWeight: 700, fontSize: 18 }}>{name}</Typography>
                <ArrowForward className="arrow" sx={{ fontSize: 18, color: MUTED, transition: 'all .25s ease' }} />
              </Box>
              <Typography sx={{ ...body, color: MUTED, fontSize: 14.5, mt: 0.5 }}>{info}</Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Closing call to action */}
      <Container maxWidth="lg" sx={{ pb: { xs: 5, md: 8 } }}>
        <Box sx={{
          ...glass, '@media (hover:hover)': {}, p: { xs: 4, md: 6 }, textAlign: 'center',
          backgroundImage: `radial-gradient(500px circle at 50% 0%, rgba(99,102,241,0.25), transparent 70%)`,
        }}>
          <Typography component="h2" sx={{ ...display, color: TEXT, fontWeight: 700, fontSize: { xs: 26, md: 36 } }}>
            Ready to get involved?
          </Typography>
          <Typography sx={{ ...body, color: MUTED, mt: 1.5, mb: 3 }}>
            Come say hi, ask a question, or join the team.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            {showDiscord && (
              <Button href={DISCORD_URL} target="_blank" rel="noopener noreferrer" sx={primaryBtn}>Join the Discord</Button>
            )}
            <Button component={Link} to="/contactus" sx={showDiscord ? ghostBtn : primaryBtn}>Contact us</Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Home;