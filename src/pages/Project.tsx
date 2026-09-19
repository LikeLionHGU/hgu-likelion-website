import { Helmet } from 'react-helmet-async';
import { projectCards } from '../utils/projects';
import {
  FilterButton,
  FilterGroup,
  FilterLabel,
  FilterList,
  ProjectCard,
  ProjectCardGrid,
  ProjectCardHeader,
  ProjectCardHeading,
  ProjectCardInfo,
  ProjectContent,
  ProjectDescription,
  ProjectFilter,
  ProjectGeneration,
  ProjectImage,
  ProjectImageWrap,
  ProjectLayout,
  ProjectName,
  ProjectOverlay,
  ProjectPage,
  ProjectScope,
  ProjectTitle,
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
          <ProjectTitle variantMapping={{ body1: 'h1' }}>PROJECTs.</ProjectTitle>

          <ProjectLayout>
            <ProjectFilter aria-label="프로젝트 분류">
              <FilterGroup>
                <FilterLabel>( Gen )</FilterLabel>
                <FilterList>
                  {generations.map((generation) => (
                    <FilterButton
                      key={generation}
                      type="button"
                      aria-current={generation === '13th' ? 'true' : undefined}
                    >
                      {generation}
                    </FilterButton>
                  ))}
                </FilterList>
              </FilterGroup>

              <FilterGroup>
                <FilterLabel>( Events )</FilterLabel>
                <FilterList>
                  {events.map((event) => (
                    <FilterButton
                      key={event}
                      type="button"
                      aria-current={event === 'Main Hackathon' ? 'true' : undefined}
                    >
                      {event}
                    </FilterButton>
                  ))}
                </FilterList>
              </FilterGroup>
            </ProjectFilter>

            <ProjectCardGrid>
              {projectCards.map(({ key, project }) => (
                <ProjectCard key={key} to={`/projects/${project.id}`} aria-label={`${project.name} 프로젝트 상세 보기`}>
                  <ProjectImageWrap>
                    <ProjectImage src={project.thumbnail} alt={`${project.name} 프로젝트`} />
                    <ProjectOverlay data-project-overlay>
                      <span>View Project</span>
                    </ProjectOverlay>
                  </ProjectImageWrap>

                  <ProjectCardInfo>
                    <ProjectCardHeader>
                      <ProjectCardHeading>
                        <ProjectName>{project.name}</ProjectName>
                        <ProjectScope>{project.scope}</ProjectScope>
                      </ProjectCardHeading>
                      <ProjectGeneration>{project.generation}</ProjectGeneration>
                    </ProjectCardHeader>
                    <ProjectDescription>{project.subtitle}</ProjectDescription>
                  </ProjectCardInfo>
                </ProjectCard>
              ))}
            </ProjectCardGrid>
          </ProjectLayout>
        </ProjectContent>
      </ProjectPage>
    </>
  );
}
