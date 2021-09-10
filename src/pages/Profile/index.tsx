import React from 'react';
import {
  Container,
  ContainerButtons,
  ContainerH1,
  ContainerLink,
  ContainerProfiles,
} from './styles';
import { Avatar } from '../../components/Avatar';
import Button from '../../components/Button';
import { FiInfo } from 'react-icons/fi';
import { ReactComponent as Play } from '../../assets/play.svg';
import { ReactComponent as Logo } from '../../assets/netflix.svg';
import { Link } from 'react-router-dom';

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
      <ContainerLink>
        <Link to="/dashboard">
          <Logo />
        </Link>
      </ContainerLink>

      <ContainerH1>
        <h1>Quem está assistindo?</h1>
      </ContainerH1>
      <ContainerProfiles>
        {profiles.map((profile) => (
          <Avatar key={profile.name} url={profile.url} name={profile.name} />
        ))}
      </ContainerProfiles>
      <ContainerButtons>
        <Button>Gerenciar Perfis</Button>
        {/* <Button variant="primary">
          <Play />
          <span>Assistir</span>
        </Button> */}
        {/* <Button variant="secondary">
          <FiInfo />
          <span>Mais Informações</span>
        </Button> */}
      </ContainerButtons>
    </Container>
  );
};

export default Profile;
