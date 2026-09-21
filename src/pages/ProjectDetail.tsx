import { Box, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';
import ProjectGallery from '../components/ProjectGallery';
import {
  DeliverableIcon,
  DeliverableLink,
  DeliverableList,
  DetailField,
  DetailLayout,
  DetailMetadata,
  DetailPage,
  DetailSummary,
  DetailTeam,
  TeamMember,
} from '../components/ProjectDetail.styles';
import { projectDetails } from '../utils/projects';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectDetails.find(({ id }) => id === projectId);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <>
      <Helmet>
        <title>{project.name} | 멋쟁이사자처럼 한동대</title>
        <meta name="description" content={project.subtitle} />
      </Helmet>
      <DetailPage component="main">
        <DetailLayout>
          <Box component="div" sx={{ gridArea: 'identity', minWidth: 0 }}>
            <Typography component="p" variant="fluidLabel" sx={{ m: 0, color: 'site.muted' }}>
              Project
            </Typography>
            <Typography variant="detailTitle" component="h1" sx={{ overflowWrap: 'anywhere' }}>
              {project.name}
            </Typography>
            <Typography
              component="p"
              variant="fluidBody"
              sx={{ mt: 1, fontWeight: 600, wordBreak: 'keep-all', overflowWrap: 'anywhere' }}
            >
              {project.subtitle}
            </Typography>
          </Box>

          <DetailSummary>
            <DetailField>
              <Typography variant="fluidLabel" component="h2" sx={{ m: 0, color: 'site.muted' }}>
                Description
              </Typography>
              <Typography
                component="p"
                variant="fluidReading"
                sx={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}
              >
                {project.description}
              </Typography>
            </DetailField>
            <DetailMetadata component="dl">
              <DetailField>
                <Typography variant="fluidLabel" component="dt" sx={{ m: 0, color: 'site.muted' }}>
                  Period
                </Typography>
                <Typography
                  variant="fluidBody"
                  component="dd"
                  sx={{ m: 0, whiteSpace: 'pre-line' }}
                >
                  {project.period.start}
                  {'\n'}- {project.period.end}
                </Typography>
              </DetailField>
              <DetailField>
                <Typography variant="fluidLabel" component="dt" sx={{ m: 0, color: 'site.muted' }}>
                  Project Scope
                </Typography>
                <Typography
                  variant="fluidBody"
                  component="dd"
                  sx={{ m: 0, whiteSpace: 'pre-line' }}
                >
                  {project.scope}
                </Typography>
              </DetailField>
              <DetailField>
                <Typography variant="fluidLabel" component="dt" sx={{ m: 0, color: 'site.muted' }}>
                  Deliverables
                </Typography>
                <DeliverableList component="dd">
                  {project.deliverables.map((deliverable) =>
                    deliverable.href ? (
                      <DeliverableLink
                        key={deliverable.name}
                        href={deliverable.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} ${deliverable.name} (새 창)`}
                      >
                        <DeliverableIcon src={deliverable.icon} alt="" />
                      </DeliverableLink>
                    ) : (
                      <DeliverableIcon
                        key={deliverable.name}
                        src={deliverable.icon}
                        alt={`${deliverable.name} (링크 준비 중)`}
                      />
                    ),
                  )}
                </DeliverableList>
              </DetailField>
            </DetailMetadata>
          </DetailSummary>

          <ProjectGallery key={project.id} name={project.name} slides={project.slides} />

          <DetailTeam component="section" aria-labelledby="project-team-name">
            <Typography variant="cardTitle" id="project-team-name" component="h2">
              {project.team.name}
            </Typography>
            <Box component="dl" sx={{ display: 'grid', gap: '20px', m: 0 }}>
              {project.team.members.map((member) => (
                <TeamMember key={member.role}>
                  <Typography
                    variant="fluidLabel"
                    component="dt"
                    sx={{ m: 0, color: 'site.muted' }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    variant="memberNames"
                    component="dd"
                    sx={{ m: 0, wordBreak: 'keep-all' }}
                  >
                    {member.names}
                  </Typography>
                </TeamMember>
              ))}
            </Box>
          </DetailTeam>
        </DetailLayout>
      </DetailPage>
    </>
  );
}
