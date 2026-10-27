import React from 'react';
import { Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import TeamCard from '../components/TeamCard.js';
import useSheet from '../hooks/useSheet';
import { TEAM_SHEET_URL, TEAM_LABEL, PHOTO_DIR } from '../config';

// matches current img naming convention (webp files)
const photoFile = (first, last) =>
  `${first}${last}`
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^A-Za-z0-9]/g, '') + '.webp';

const toMember = (row) => {
  const first = (row['First Name'] || '').trim();
  const last = (row['Last Name'] || '').trim();
  const email = (row['UofT Email'] || '').trim();
  const discord = (row['Discord'] || '').trim();
  const linkedin = (row['LinkedIn'] || '').trim();

  return {
    picture: PHOTO_DIR + photoFile(first, last),
    name: `${first} ${last}`.trim(),
    role: (row['Current Role'] || '').trim(),
    year: (row['Year'] || '').trim(),
    contact: [
      email && `E-mail: ${email}`,
      discord && `Discord: ${discord}`,
      linkedin && `LinkedIn: ${linkedin}`,
    ].filter(Boolean),
  };
};

function MeetTheTeam() {
  const { rows, loading, error } = useSheet(TEAM_SHEET_URL);

  const members = rows
    .filter((row) => (row['First Name'] || '').trim())
    .map(toMember);

  const TeamElements = members.map((member, index) => (
    <Grid2 key={index}>
      <TeamCard
        picture={member.picture}
        name={member.name}
        role={member.role}
        year={member.year}
        contact={member.contact}
      />
    </Grid2>
  ));

  return (
    <div>
      <Typography sx={{ color: 'white', margin: '10px 30px 0 30px' }} variant="h4">
        Meet The Team ({TEAM_LABEL})
      </Typography>
      <Typography sx={{ color: 'white', margin: '10px 30px 10px 30px' }} variant="h6">
        More like a family than a team!
      </Typography>
      <br />

      {loading && (
        <Typography sx={{ color: 'white', margin: '10px 30px' }}>Loading the team...</Typography>
      )}
      {error && (
        <Typography sx={{ color: 'white', margin: '10px 30px' }}>
          Couldn't load the team right now. Please try again later.
        </Typography>
      )}

      <Grid2
        alignItems="center"
        container
        spacing={2}
        justifyContent="center"
        sx={{ margin: '0px 25px 10px 30px' }}
      >
        {TeamElements}
      </Grid2>
    </div>
  );
}

export default MeetTheTeam;