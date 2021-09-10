import React from 'react';
import { Container, ContainerButtons, ContainerProfiles } from './styles';
import { Avatar } from '../../components/Avatar';
import Button from '../../components/Button';

interface ProfileProps {
  name: string;
  url: string;
}
const profile: ProfileProps[] = [
  {
    name: 'Icaro',
    url: 'https://occ-0-4376-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABV8kcIgIUspmvTvH9o9cHGdZUPq_sWXpcV_bYss6oqxh313dgot5KMGnQGNKOkeEGZ9sxZHAcYDJtD_Kx6je2XPEKy35.png?r=06d',
  },
  {
    name: 'Icaro',
    url: 'https://occ-0-4376-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABV8kcIgIUspmvTvH9o9cHGdZUPq_sWXpcV_bYss6oqxh313dgot5KMGnQGNKOkeEGZ9sxZHAcYDJtD_Kx6je2XPEKy35.png?r=06d',
  },
  {
    name: 'Icaro',
    url: 'https://occ-0-4376-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABV8kcIgIUspmvTvH9o9cHGdZUPq_sWXpcV_bYss6oqxh313dgot5KMGnQGNKOkeEGZ9sxZHAcYDJtD_Kx6je2XPEKy35.png?r=06d',
  },
];

const Profile = () => {
  const [profiles, setProfiles] = React.useState<ProfileProps[]>([]);
  const loadProfiles = React.useCallback(() => {
    setProfiles(profile);
  }, []);

  React.useEffect(() => {
    loadProfiles();
  }, [loadProfiles]);
  return (
    <Container>
      <ContainerProfiles>
        {profiles.map((profile) => (
          <Avatar key={profile.name} url={profile.url} name={profile.name} />
        ))}
      </ContainerProfiles>
      <ContainerButtons>
        <Button>Gerenciar Perfis</Button>
        <Button variant="primary">Assistir</Button>
        <Button variant="secondary"> Mais Informações</Button>
      </ContainerButtons>
    </Container>
  );
};

export default Profile;
