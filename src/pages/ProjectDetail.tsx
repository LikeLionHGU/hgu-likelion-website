import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';
import ProjectGallery from '../components/ProjectGallery';
import {
  DeliverableIcon,
  DeliverableLink,
  DeliverableList,
  DetailDescription,
  DetailField,
  DetailIdentity,
  DetailLabel,
  DetailLayout,
  DetailMetadata,
  DetailPage,
  DetailSubtitle,
  DetailSummary,
  DetailTeam,
  DetailTitle,
  DetailValue,
  TeamMember,
  TeamMemberNames,
  TeamMembers,
  TeamTitle,
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
          <DetailIdentity>
            <DetailLabel>Project</DetailLabel>
            <DetailTitle variantMapping={{ body1: 'h1' }}>{project.name}</DetailTitle>
            <DetailSubtitle>{project.subtitle}</DetailSubtitle>
          </DetailIdentity>

          <DetailSummary>
            <DetailField>
              <DetailLabel variantMapping={{ body1: 'h2' }}>Description</DetailLabel>
              <DetailDescription>{project.description}</DetailDescription>
            </DetailField>
            <DetailMetadata component="dl">
              <DetailField>
                <DetailLabel variantMapping={{ body1: 'dt' }}>Period</DetailLabel>
                <DetailValue variantMapping={{ body1: 'dd' }}>
                  {project.period.start}{'\n'}- {project.period.end}
                </DetailValue>
              </DetailField>
              <DetailField>
                <DetailLabel variantMapping={{ body1: 'dt' }}>Project Scope</DetailLabel>
                <DetailValue variantMapping={{ body1: 'dd' }}>{project.scope}</DetailValue>
              </DetailField>
              <DetailField>
                <DetailLabel variantMapping={{ body1: 'dt' }}>Deliverables</DetailLabel>
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
            <TeamTitle id="project-team-name" variantMapping={{ body1: 'h2' }}>{project.team.name}</TeamTitle>
            <TeamMembers component="dl">
              {project.team.members.map((member) => (
                <TeamMember key={member.role}>
                  <DetailLabel variantMapping={{ body1: 'dt' }}>{member.role}</DetailLabel>
                  <TeamMemberNames variantMapping={{ body1: 'dd' }}>{member.names}</TeamMemberNames>
                </TeamMember>
              ))}
            </TeamMembers>
          </DetailTeam>
        </DetailLayout>
      </DetailPage>
    </>
  );
}
