import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import notionIcon from '../assets/main/tool-notion.png';
import figmaIcon from '../assets/main/tool-figma.svg';
import githubIcon from '../assets/main/tool-github.svg';
import { tracksInfo } from '../utils/commons';
import {
  CurriculumList, CurriculumListItem, CurriculumMarker, CurriculumWeek,
  LookingForList, LookingForListItem, LookingForMarker, TrackDialogContent,
  TrackDialogDescription, TrackDialogSection, TrackDialogSectionTitle,
} from './TrackModal.styles';

export type TrackInfo = (typeof tracksInfo)[number];

const DetailsContent = styled(TrackDialogContent, {
  shouldForwardProp: (prop) => prop !== 'compact',
})<{ compact: boolean }>(({ compact }) => compact ? {
  width: '100%', maxWidth: 600, margin: 0, gap: 80,
  '& section': { gap: 24 },
  '& h3': { fontSize: 16, lineHeight: 1.4 },
  '& p': { fontSize: 14 },
  '& ol:first-of-type': { paddingLeft: 8 },
  '& [data-curriculum-list]': { gap: 24, '&::before': { left: 15, top: 12, bottom: 18 } },
  '& [data-curriculum-row]': { gridTemplateColumns: '14px 42px minmax(0, 1fr)', columnGap: 18 },
  '& [data-curriculum-marker]': { width: 14, height: 14 },
  '& [data-looking-for-marker]': { fontSize: 16 },
  '@media (max-width:599.95px)': { margin: 0, gap: 80 },
} : {});

const ToolList = styled(Box)({ display: 'flex', alignItems: 'center', gap: 18 });
const ToolIcon = styled('img')({ width: 28, height: 28, objectFit: 'contain' });

const trackTools: Record<string, { name: string; image: string }[]> = {
  PLANNER: [{ name: 'Notion', image: notionIcon }, { name: 'Figma', image: figmaIcon }],
  DESIGNER: [{ name: 'Figma', image: figmaIcon }],
  FRONTEND: [{ name: 'GitHub', image: githubIcon }],
  BACKEND: [{ name: 'GitHub', image: githubIcon }],
};

export default function TrackDetails({ track, compact = false }: { track: TrackInfo; compact?: boolean }) {
  return (
    <DetailsContent compact={compact}>
      <TrackDialogSection>
        <TrackDialogSectionTitle as="h3">CURRICULUM</TrackDialogSectionTitle>
        <CurriculumList data-curriculum-list>
          {track.curriculum.map((item, index) => (
            <CurriculumListItem key={item} data-curriculum-row>
              <CurriculumMarker aria-hidden="true" data-curriculum-marker />
              <CurriculumWeek>W {String(index + 1).padStart(2, '0')}</CurriculumWeek>
              <TrackDialogDescription>{item}</TrackDialogDescription>
            </CurriculumListItem>
          ))}
        </CurriculumList>
      </TrackDialogSection>
      <TrackDialogSection>
        <TrackDialogSectionTitle as="h3">WHO WE ARE LOOKING FOR:</TrackDialogSectionTitle>
        <LookingForList>
          {track.lookingFor.map((item, index) => (
            <LookingForListItem key={item}>
              <LookingForMarker data-looking-for-marker>{String.fromCharCode(65 + index)}</LookingForMarker>
              <TrackDialogDescription>{item}</TrackDialogDescription>
            </LookingForListItem>
          ))}
        </LookingForList>
      </TrackDialogSection>
      {compact && (
        <TrackDialogSection>
          <TrackDialogSectionTitle as="h3">TOOLS</TrackDialogSectionTitle>
          <ToolList>
            {trackTools[track.track]?.map((tool) => <ToolIcon key={tool.name} src={tool.image} alt={tool.name} />)}
          </ToolList>
        </TrackDialogSection>
      )}
    </DetailsContent>
  );
}
