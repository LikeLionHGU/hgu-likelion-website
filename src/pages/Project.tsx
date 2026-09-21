import { Typography, Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { projectCards } from '../utils/projects';
import {
  FilterButton,
  FilterGroup,
  ProjectCard,
  ProjectCardGrid,
  ProjectCardHeader,
  ProjectCardHeading,
  ProjectContent,
  ProjectFilter,
  ProjectGeneration,
  ProjectImage,
  ProjectImageWrap,
  ProjectLayout,
  ProjectOverlay,
  ProjectPage,
} from '../components/Project.styles';

const generations = ['13th', '12th', '11th'];
const events = ['Holiday', 'ideathon', 'Main Hackathon'];

export default function Project() {
  return (
    <>
      <Helmet>
        <title>프로젝트 | 멋쟁이사자처럼 한동대</title>
      </Helmet>

      <ProjectPage component="main">
        <ProjectContent>
          <Typography variant="pageTitle" component="h1">
            PROJECTs.
          </Typography>

          <ProjectLayout>
            <ProjectFilter aria-label="프로젝트 분류">
              <FilterGroup>
                <Typography
                  component="p"
                  variant="cardLabel"
                  sx={{ color: 'common.white', textAlign: 'left', whiteSpace: 'nowrap' }}
                >
                  ( Gen )
                </Typography>
                <Box component="div" sx={{ display: 'grid', gap: '15px', justifyItems: 'start' }}>
                  {generations.map((generation) => (
                    <FilterButton
                      key={generation}
                      type="button"
                      aria-current={generation === '13th' ? 'true' : undefined}
                    >
                      {generation}
                    </FilterButton>
                  ))}
                </Box>
              </FilterGroup>

              <FilterGroup>
                <Typography
                  component="p"
                  variant="cardLabel"
                  sx={{ color: 'common.white', textAlign: 'left', whiteSpace: 'nowrap' }}
                >
                  ( Events )
                </Typography>
                <Box component="div" sx={{ display: 'grid', gap: '15px', justifyItems: 'start' }}>
                  {events.map((event) => (
                    <FilterButton
                      key={event}
                      type="button"
                      aria-current={event === 'Main Hackathon' ? 'true' : undefined}
                    >
                      {event}
                    </FilterButton>
                  ))}
                </Box>
              </FilterGroup>
            </ProjectFilter>

            <ProjectCardGrid>
              {projectCards.map(({ key, project }) => (
                <ProjectCard
                  key={key}
                  to={`/projects/${project.id}`}
                  aria-label={`${project.name} 프로젝트 상세 보기`}
                >
                  <ProjectImageWrap>
                    <ProjectImage src={project.thumbnail} alt={`${project.name} 프로젝트`} />
                    <ProjectOverlay data-project-overlay>
                      <span>View Project</span>
                    </ProjectOverlay>
                  </ProjectImageWrap>

                  <Box component="div" sx={{ display: 'grid', minWidth: 0, gap: '10px' }}>
                    <ProjectCardHeader>
                      <ProjectCardHeading>
                        <Typography
                          component="p"
                          variant="cardTitle"
                          sx={{ color: 'common.white', overflowWrap: 'anywhere' }}
                        >
                          {project.name}
                        </Typography>
                        <Typography
                          component="p"
                          variant="cardMeta"
                          sx={{ color: 'site.muted', whiteSpace: 'nowrap' }}
                        >
                          {project.scope}
                        </Typography>
                      </ProjectCardHeading>
                      <ProjectGeneration>{project.generation}</ProjectGeneration>
                    </ProjectCardHeader>
                    <Typography
                      component="p"
                      variant="bodyLarge"
                      sx={{
                        color: 'common.white',
                        wordBreak: 'keep-all',
                        overflowWrap: 'anywhere',
                      }}
                    >
                      {project.subtitle}
                    </Typography>
                  </Box>
                </ProjectCard>
              ))}
            </ProjectCardGrid>
          </ProjectLayout>
        </ProjectContent>
      </ProjectPage>
    </>
  );
}
